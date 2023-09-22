import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholder",

  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (pageNumber) => `/posts?_limit=10&_page=${pageNumber}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),

    getPostById: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = jsonPlaceholderApi;
