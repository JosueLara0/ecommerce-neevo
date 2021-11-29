const CartProduct = ({ name, price, image, amount, product, dispatch }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-4 p-2 border border-blueMain rounded-md">
      <div className="flex justify-center items-center">
        <img src={image} alt={name} className="h-40 w-32" />
      </div>

      <div className="flex flex-col justify-center">
        <p className="font-bold text-xl text-blueSoft">{name}</p>

        <div>
          <p className="py-2 font-bold text-2xl">
            ${price} x {amount} = {(price * amount).toFixed(2)}
          </p>

          <div className="flex justify-center font-extrabold text-5xl">
            <button
              className="pr-5 hover:text-yellow"
              onClick={() =>
                dispatch({ type: "TAKE_OUT_PRODUCT", payload: product })
              }
            >
              -
            </button>

            <button
              className="hover:text-yellow"
              onClick={() =>
                dispatch({ type: "ADD_PRODUCT", payload: product })
              }
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        className="font-bold text-2xl text-blueSoft hover:text-yellow "
        onClick={() =>
          dispatch({ type: "REMOVE_ALL_PRODUCT", payload: product })
        }
      >
        Remove
      </button>
    </div>
  );
};

export default CartProduct;
