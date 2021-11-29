// Libraries
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Contexts
import CartContext from "../../Context/CartContext";
import WishListContext from "../../Context/WishListContext";

// assets
import mark from "../../assets/mark.png";
import markHover from "../../assets/markHover.png";
import star from "../../assets/star.png";

const Product = ({ id, name, price, image, rate, status }) => {
  // Context States
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
  const { state: wishListState, dispatch: wishListDispatch } =
    useContext(WishListContext);

  // States
  const [payload, setPayload] = useState({});

  // Set info of each product for Home, WishList and ProductInfo views
  useEffect(() => {
    setPayload({ id, name, price, image, rate });
  }, [id, name, price, image, rate]);

  return (
    <div className="flex flex-col items-center m-4 p-2 border border-blueMain hover:border-yellow rounded-md">
      {status !== "ProductInfo" && (
        <>
          <Link to={`/productInfo/${id}`}>
            <img className="h-52 w-44" src={image} alt={name} />
          </Link>

          <h2 className="font-bold text-lg text-blueSoft hover:text-yellow">
            <Link to={`/productInfo/${id}`}>{name.substring(0, 18)}...</Link>
          </h2>

          <div className="flex">
            <p className="font-semibold text-lg">{rate}</p>{" "}
            <img className="h-5" src={star} alt="stars" />
          </div>

          <p className="pb-2 font-bold text-2xl">${price}</p>
        </>
      )}

      <div className="flex justify-between w-5/6 ">
        {/* Add and remove to Cart button */}
        {cartState.cart.find((product) => product.id === id) ? (
          <button
            className="px-2 bg-yellow text-white rounded"
            onClick={() => cartDispatch({ type: "TAKE_OUT_PRODUCT", payload })}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="px-2 border border-blueMain hover:bg-yellow text-blueSoft hover:text-white rounded"
            onClick={() => cartDispatch({ type: "ADD_PRODUCT", payload })}
          >
            Add to Cart
          </button>
        )}

        {/* Add and remove to Wish list button */}
        {wishListState.wishList.find((product) => product.id === id) ? (
          <button
            onClick={() =>
              wishListDispatch({ type: "REMOVE_OF_WISH_LIST", payload })
            }
          >
            <img src={markHover} alt="REMOVE_OF_WISH_LIST" />
          </button>
        ) : (
          <button
            onClick={() =>
              wishListDispatch({ type: "ADD_TO_WISH_LIST", payload })
            }
          >
            <img src={mark} alt="ADD_TO_WISH_LIST" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
