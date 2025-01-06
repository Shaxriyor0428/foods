import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter-slice";
import wishlist from "./slices/wishlist-slice";
export const store = configureStore({
  reducer: {
    counter,
    wishlist,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
