import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchProduct = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products/",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    createProduct: builder.mutation({
      query: (formData) => ({
        url: `/products`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useCreateProductMutation } = fetchProduct;
