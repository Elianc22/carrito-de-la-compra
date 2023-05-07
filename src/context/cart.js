import { createContext, useReducer } from 'react'
import { reducer, cartInitialState } from '../reducers/cart.js'

export const CartContex = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(reducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = product => dispatch({
    type: 'CLEAR_CART'
  })

  return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContex.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContex.Provider>
  )
}
