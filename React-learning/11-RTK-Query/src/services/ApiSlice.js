import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CartApi = createApi({
  reducerPath: "CartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    fatchProductById: builder.query({
      query:(id)=>`products/${id}`,


    })
    
  }),
});

export const { useGetProductsQuery, useFatchProductByIdQuery } = CartApi;