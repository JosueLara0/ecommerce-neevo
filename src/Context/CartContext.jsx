// Libraries
import React, { createContext, useReducer } from "react";

// Create context
const CartContext = createContext();

const initialState = {
  totalPrice: 0,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state.cart.find((product) => product.id === action.payload.id)
        ? {
            ...state,
            totalPrice: state.totalPrice + action.payload.price,
            cart: state.cart.map((product) =>
              product.id === action.payload.id
                ? { ...product, amount: product.amount + 1 }
                : product
            ),
          }
        : {
            ...state,
            totalPrice: state.totalPrice + action.payload.price,
            cart: [...state?.cart, { ...action.payload, amount: 1 }],
          };

    case "TAKE_OUT_PRODUCT":
      return action.payload.amount > 1
        ? {
            ...state,
            totalPrice: state.totalPrice - action.payload.price,
            cart: state.cart.map((product) =>
              product.id === action.payload.id
                ? { ...product, amount: product.amount - 1 }
                : product
            ),
          }
        : {
            ...state,
            totalPrice: state.totalPrice - action.payload.price,
            cart: [
              ...state.cart.filter(
                (product) => product.id !== action.payload.id
              ),
            ],
          };

    case "REMOVE_ALL_PRODUCT":
      return {
        ...state,
        totalPrice:
          state.totalPrice -
          (action.payload.price * action.payload.amount).toFixed(2),
        cart: [
          ...state.cart.filter((product) => product.id !== action.payload.id),
        ],
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state, dispatch };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
