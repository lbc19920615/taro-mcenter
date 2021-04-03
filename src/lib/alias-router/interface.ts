export interface RouteParam {
  name: string;
}

export enum PathType {
  // 普通页面
  NORMAL = "normal",
  // 微信小程序原生tabBar页面
  TAB = "tab",
}

export interface CommonParams {
  path: string | { path: string; type: PathType };
  query?: URLSearchParams;
}
