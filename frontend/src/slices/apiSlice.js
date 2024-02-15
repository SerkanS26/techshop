import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "User", "Order"],
  endpoints: (builder) => ({
    // Products Endpoints from productsApiSlice /injectEndpoints
    // Users Endpoints from usersApiSlice /injectEndpoints
    // Orders Endpoints from ordersApiSlice /injectEndpoints
  }),
});
