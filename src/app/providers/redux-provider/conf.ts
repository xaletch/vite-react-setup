import { configureStore } from "@reduxjs/toolkit";
import { API } from "@/shared/api";

export const store = configureStore({
  reducer: {
    // your api
    [API.reducerPath]: API.reducer,

    // your slices
    // ...
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([API.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;