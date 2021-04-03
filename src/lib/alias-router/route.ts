import navigator from "./navigator";

export class Route<QueryType> {
  private routeUrl: string;

  constructor({ routeUrl }) {
    this.routeUrl = routeUrl;
  }

  public navigateTo(query: QueryType) {
    return navigator.navigateTo(this.routeUrl, query);
  }
}
