// Libraries
import React, { createContext, useReducer, useEffect } from "react";

// Create context
const ProductListContext = createContext();

const initialState = {
  products: [],
};

// State Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

// Create provider
const ProductListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state };

  // Bring info of the products from the API
  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const API = "https://fakestoreapi.com/products";
        const response = await fetch(API);
        const payload = await response.json();
        dispatch({ type: "ADD_PRODUCTS", payload });
      } catch (error) {
        console.log(error);
      }
    };

    handleFetchData();
  }, []);

  return (
    <ProductListContext.Provider value={data}>
      {children}
    </ProductListContext.Provider>
  );
};

export { ProductListProvider };
export default ProductListContext;
