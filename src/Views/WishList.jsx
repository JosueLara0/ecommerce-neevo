// Libraries
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Contexts
import WishListContext from "../Context/WishListContext";

// Components
import Product from "../Components/Custom/Product";

const WishList = () => {
  // Context states
  const { state } = useContext(WishListContext);

  return (
    <div className="pt-20">
      <h2 className="py-4 font-serif font-bold text-center text-2xl md:text-4xl text-yellow underline">
        Wish List
      </h2>

      {state.wishList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-11/12 m-auto">
          {state.wishList.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              rate={product.rate}
            />
          ))}
        </div>
      ) : (
        <Link
          to="/"
          className="flex justify-center text-center mt-20 font-bold text-4xl text-blueMain hover:text-yellow"
        >
          Your wish list is empty. Let's check products!
        </Link>
      )}
    </div>
  );
};

export default WishList;
