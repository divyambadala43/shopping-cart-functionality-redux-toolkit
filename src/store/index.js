import { configureStore } from "@reduxjs/toolkit";
import cartButtonSlice from "./cartButton";
import cartSlice from "./cart";

const store = configureStore({
  reducer: {
    cartButton: cartButtonSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
