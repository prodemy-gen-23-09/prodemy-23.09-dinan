import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  dataCheckout: [],
}

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addToCheckout: (state, action) => {
      state.dataCheckout = action.payload
    },
    deleteFromCheckout: (state, action) => {
      state.dataCheckout = [...state.dataCheckout].filter((list) => list.id != action.payload)
    },
  },
})

export const { addToCheckout, deleteFromCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
