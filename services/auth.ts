import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiRoutes, baseDomain } from "./apiRoute";
import { url } from "inspector";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoutes.users.domain,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: apiRoutes.users.route.getUsers.path,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = authApi;
