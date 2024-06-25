import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => "users",
    }),
      getUserById: build.query({
          query: (id) => ({url: `users/${id}`})
      })
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
