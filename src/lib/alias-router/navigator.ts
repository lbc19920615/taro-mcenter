import Taro from "@tarojs/taro";
import { CommonParams, PathType } from "./interface";

const paramsParsing = (commonParams: CommonParams) => {
  const { path, query = new URLSearchParams() } = commonParams;

  const routerPath =
    typeof path === "string" ? { path, type: PathType.NORMAL } : path;

  const urlQuery = query.toString();
  const urlQueryStr = urlQuery ? `?${urlQuery}` : "";
  const toUrl = `${routerPath.path}${urlQueryStr}`;

  return {
    routerPath,
    toUrl,
  };
};

export class Navigator {
  public async navigateTo(
    path: CommonParams["path"],
    query?: CommonParams["query"],
    options?: { events: any }
  ): Promise<any> {
    const { toUrl } = paramsParsing({ path, query });

    return new Promise((resolve, reject) => {
      Taro.navigateTo({
        url: toUrl,
        events: options?.events,
        success: (arg) => {
          console.log("navigateTo:success", "navigateTo成功", { toUrl });
          resolve(arg);
        },
        fail: (arg) => {
          console.log("navigateTo:fail", "navigateTo失败", arg);
          reject(arg);
        },
      });
    });
  }
}

export const navigator = new Navigator();

export default navigator;
