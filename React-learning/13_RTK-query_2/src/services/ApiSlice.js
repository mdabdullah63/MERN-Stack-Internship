import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CardApi = createApi({
  reducerPath: "CardApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),

  endpoints: (build) => ({
    getCardByName: build.query({
      query: () => "products",
      keepUnusedDataFor: 300,
      providesTags: ['CARD_BY_NAME']
    }),
    fetchProductById: build.query({
      query: (id) => `products/${id}`,
      keepUnusedDataFor: 30,
      invalidatesTags: ['CARD_BY_NAME']
    }),
  }),
});

export const {
  useGetCardByNameQuery,
  useFetchProductByIdQuery,
  useLazyFetchProductByIdQuery
} = CardApi;