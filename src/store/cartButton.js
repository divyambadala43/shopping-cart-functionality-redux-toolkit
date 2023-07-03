import { createSlice } from "@reduxjs/toolkit";

const initialCartButtonState = { quantity: 0, showCart: false };
const cartButtonSlice = createSlice({
  name: "cartButton",
  initialState: initialCartButtonState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    
  },
});

export const cartButtonActions = cartButtonSlice.actions;
export default cartButtonSlice;
