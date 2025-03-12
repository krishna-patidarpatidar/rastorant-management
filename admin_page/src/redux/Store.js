import { configureStore } from "@reduxjs/toolkit";
import restaurantApi from "./Service";

const Store = configureStore({
  reducer: {[restaurantApi.reducerPath]:restaurantApi.reducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([restaurantApi.middleware]),
});
export default Store;
