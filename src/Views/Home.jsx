// Libraries
import React, { useContext } from "react";

// Context
import ProductListContext from "../Context/ProductListContext";

// Components
import Product from "../Components/Custom/Product";
import Loader from "../Components/Custom/Loader";

const Home = () => {
  // Context States
  const { state: listState } = useContext(ProductListContext);

  return (
    <div className="pt-20">
      {listState?.products?.length > 0 ? (
        <>
          {/* Banner */}
          <div className="flex flex-col items-center w-full py-8 bg-yellow">
            <h2 className="font-serif font-semibold text-2xl md:text-4xl text-white">
              <span className="font-bold font-serif text-5xl sm:text-7xl">
                NEEVO
              </span>{" "}
              Store
            </h2>
            <p className="font-semibold text-xl md:text-2xl text-white">
              In-line with online retail
            </p>
            <p className="w-11/12 pt-2 font-semibold text-center text-lg sm:text-xl md:text-2xl text-blueSoft">
              FREE SHIPPING on all orders over $60
            </p>
          </div>

          {/* Render of products */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-11/12 m-auto">
            {listState.products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                image={product.image}
                rate={product.rating.rate}
              />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
