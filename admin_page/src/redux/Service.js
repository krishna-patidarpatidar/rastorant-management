import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const restaurantApi = createApi({
  reducerPath: "restaurantApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  endpoints: () => ({}),
});

export default restaurantApi;
