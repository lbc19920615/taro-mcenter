import { Route } from "./route";
import RouteMatcher from "./route-matcher";
import { setter } from "./utils";
import navigator from "./navigator";
import { CommonParams } from "./interface";

export interface RegisterOption {
  route: string;
  path?: string;
}

export class Router {
  private routes = {};
  private routeMatchers: Array<RouteMatcher> = [];

  public register<QueryType>(option: RegisterOption) {
    const tiers = option.route
      .replace(/^\//, "")
      .replace(/$\//, "")
      .split("/")
      .slice(0, -1)
      .join(".");

    console.log(tiers);

    setter<Route<QueryType>>(
      this.routes,
      tiers,
      new Route<QueryType>({ routeUrl: option.route })
    );

    if (option.path)
      this.routeMatchers.push(new RouteMatcher(option.path, option.route));
  }

  public batchRegister(options) {
    options.forEach((option) => this.register(option));
  }

  public getRoutes() {
    return this.routes;
  }

  private matchRoute(pathOrRoute) {
    const matchResult = this.routeMatchers
      .map((routeMatcher) => routeMatcher.match(pathOrRoute))
      .filter((result) => !!result);

    console.debug("route match result:", { matchResult, pathOrRoute });

    return {
      path: matchResult[0]?.route || pathOrRoute,
      params: matchResult[0]?.params,
    };
  }

  public navigateTo(pathOrRoute: CommonParams["path"]) {
    const { path, params } = this.matchRoute(pathOrRoute);
    let retParams = params;
    return navigator.navigateTo(path, retParams);
  }
}
