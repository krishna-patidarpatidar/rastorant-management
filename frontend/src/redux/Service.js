import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

const rastorantApi = createApi({
  reducerPath: "rastorantApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  tagTypes: ["Menu"],
  endpoints: () => ({}),  
});

export default rastorantApi;
