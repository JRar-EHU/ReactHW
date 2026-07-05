import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.cartCount += action.payload;
    },
    clearCart: (state) => {
      state.cartCount = 0;
    },
  },
});
export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
