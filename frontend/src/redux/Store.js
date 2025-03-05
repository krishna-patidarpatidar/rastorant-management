import { configureStore } from "@reduxjs/toolkit";
import rastorantApi from "./Service";

const Store = configureStore({
  reducer: {
    [rastorantApi.reducerPath]: rastorantApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rastorantApi.middleware),  
});

export default Store;
