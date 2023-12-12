import { ADD_TO_CART, DELETE_FROM_CART } from "../types"

const initialState = {
  dataCart: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        dataCart: action.payload,
      }
    case DELETE_FROM_CART:
      return {
        ...state,
        dataCart: [...state.dataCart].filter((list) => list.id != action.id),
      }
    default:
      return state
  }
}

export default cartReducer
