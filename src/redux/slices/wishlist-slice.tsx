import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface wishlistState {
  value: IProduct[];
}

const initialState: wishlistState = {
  value: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    saveWishlist: (state, action: PayloadAction<IProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.value.push(action.payload);
      } else {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const { saveWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
