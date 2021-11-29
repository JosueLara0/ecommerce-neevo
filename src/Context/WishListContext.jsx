// Libraries
import React, { createContext, useReducer } from "react";

// Create context
const WishListContext = createContext();

const initialState = {
  wishList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISH_LIST":
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };

    case "REMOVE_OF_WISH_LIST":
      return {
        ...state,
        wishList: state.wishList.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

// Create provider
const WishListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state, dispatch };

  return (
    <WishListContext.Provider value={data}>{children}</WishListContext.Provider>
  );
};

export { WishListProvider };
export default WishListContext;
