import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Must pass three properties inside createApi - reducerPath, baseQUery, endPoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET", // must be in capital letter
      }),
    }),
  }),
});

export const { useGetTodosQuery } = baseApi;
