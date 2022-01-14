// Libraries
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import CartContext from "../Context/CartContext";

// Components
import CartProduct from "../Components/Cart/CartProduct";

const Cart = () => {
  // Context State
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="w-11/12 sm:w-8/12 m-auto pt-20">
      <h2 className="py-4 font-serif font-bold text-center text-2xl md:text-4xl text-yellow underline">
        Shopping Cart
      </h2>

      {state.totalPrice > 1 ? (
        <>
          {state.cart.map((product) => (
            <CartProduct
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              amount={product.amount}
              product={product}
              dispatch={dispatch}
            />
          ))}

          <div className="flex justify-center items-center my-10">
            <p className="font-bold text-2xl sm:text-4xl underline">
              Total: ${state.totalPrice.toFixed(2)}
            </p>

            <Link
              to="/payment"
              className="ml-10 px-2 sm:px-4 py-2 bg-blueSoft hover:bg-yellow font-bold text-xl md:text-3xl text-white 
              transition duration-300 rounded-lg"
            >
              Buy Now
            </Link>
          </div>
        </>
      ) : (
        <Link
          to="/"
          className="flex justify-center mt-20 font-bold text-4xl text-blueMain hover:text-yellow"
        >
          Your cart is empty. Let's go shopping!
        </Link>
      )}
    </div>
  );
};

export default Cart;
