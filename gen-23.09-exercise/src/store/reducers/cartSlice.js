import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  dataCart: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.dataCart = action.payload
    },
    deleteFromCart: (state, action) => {
      state.dataCart = [...state.dataCart].filter((list) => list.id != action.payload)
    },
    changeObject: (state, action) => {
      const modifyDataCart = [...state.dataCart].map((obj) => {
        if (obj.id === action.payload.id) {
          return { ...obj, quantity: action.payload.quantity }
        }
        return obj
      })
      console.log(modifyDataCart)
      state.dataCart = modifyDataCart
    },
  },
})

export const { addToCart, deleteFromCart, changeObject } = cartSlice.actions

export default cartSlice.reducer
