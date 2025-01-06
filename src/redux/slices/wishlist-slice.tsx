import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface wishlistState {
  value: IProduct[];
}

const initialState: wishlistState = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]"), // default qiymatni to'g'ri tekshirish
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
        localStorage.setItem("wishlist", JSON.stringify(state.value)); // JSON.stringify
      } else {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem("wishlist", JSON.stringify(state.value)); // JSON.stringify
      }
    },
  },
});

export const { saveWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
