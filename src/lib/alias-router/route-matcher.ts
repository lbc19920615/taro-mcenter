import { pathToRegexp } from "path-to-regexp";
import { RouteParam } from "./interface";

export default class RouteMatcher {
  private keys = [];

  // 匹配正则
  public regex;

  // 真实路径
  public route;

  constructor(path, route) {
    this.regex = pathToRegexp(path);
    this.route = route;
  }

  match(path: string) {
    const result = path.match(this.regex);
    if (!result) return undefined;
    const route = this.route;
    const params = new URLSearchParams();

    // 若存在路由参数，解释
    if (this.keys[0]) {
      this.keys.forEach((key: RouteParam, index) => {
        params.append(key.name, result[index + 1]);
      });
    }

    return {
      route,
      params,
    };
  }
}
