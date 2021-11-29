// Libraries
import React, { useContext } from "react";

// Context
import CartContext from "../Context/CartContext";

// Components
import Header from "../Components/Custom/Header";

const Main = ({ children }) => {
  // Context State
  const { state: cartState } = useContext(CartContext);

  return (
    <div className="min-h-screen">
      <Header cart={cartState.cart} />
      {children}
    </div>
  );
};

export default Main;
