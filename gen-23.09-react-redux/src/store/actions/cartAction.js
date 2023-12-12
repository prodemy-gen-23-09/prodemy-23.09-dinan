import { ADD_TO_CART, DELETE_FROM_CART } from "../types"

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
})

export const deleteFromCart = (id) => ({
  type: DELETE_FROM_CART,
  id,
})
