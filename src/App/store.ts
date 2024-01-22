import { configureStore } from "@reduxjs/toolkit";
import { fetchFromRapidapi } from "./fetchData/fetchVideo";
import categorySlice from "./SliceCategory/categorySlice";

export const store = configureStore({
  reducer: {
    [fetchFromRapidapi.reducerPath]: fetchFromRapidapi.reducer,
    categorys: categorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchFromRapidapi.middleware),
});
