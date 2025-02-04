export const baseDomain = "https://jsonplaceholder.typicode.com";

interface ApiRoute {
  [key: string]: {
    domain: string;
    route: {
      [key: string]: {
        path: string;
        method: string;
      };
    };
  };
}

export const apiRoutes: ApiRoute = {
  users: {
    domain: baseDomain,
    route: {
      getUsers: {
        path: "/users",
        method: "GET",
      },
    },
  },
};
