import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./reducers/cartSlice"
import authSlice from "./reducers/authSlice"
import checkoutSlice from "./reducers/checkoutSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
  },
})

export default store
