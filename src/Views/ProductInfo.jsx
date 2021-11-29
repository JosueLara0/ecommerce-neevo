// Libraries
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";

// Context
import ProductListContext from "../Context/ProductListContext";

// Components
import Product from "../Components/Custom/Product";

// assets
import star from "../assets/star.png";

const ProductInfo = () => {
  // Context States
  const { state: listState } = useContext(ProductListContext);

  // Params
  const { id } = useParams();

  // States
  const [productInfo, setProductInfo] = useState(null);

  // Save info of the product selected in the Home view
  useEffect(() => {
    setProductInfo(
      listState.products.filter((product) => product.id === parseInt(id))
    );
  }, [listState, id]);

  return (
    <>
      {productInfo && productInfo[0] && (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-5/6 md:w-4/6 m-auto pt-36 pb-10 text-lg">
          <img
            className="sm:h-60 md:h-96 sm:w-60 md:w-96"
            src={productInfo[0].image}
            alt={productInfo[0].title}
          />

          <div className="md:ml-10 lg:ml-0">
            <p className="font-semibold">{productInfo[0].category}</p>
            <h2 className="font-bold text-xl text-blueSoft">
              {productInfo[0].title}
            </h2>

            <div className="flex">
              <p className="font-semibold">{productInfo[0].rating.rate}</p>{" "}
              <img className="h-5" src={star} alt="stars" />
            </div>

            <p className="py-2 font-bold text-2xl">${productInfo[0].price}</p>
            <p className="text-justify">{productInfo[0].description}</p>

            <Product
              key={productInfo[0].id}
              id={productInfo[0].id}
              name={productInfo[0].title}
              price={productInfo[0].price}
              image={productInfo[0].image}
              rate={productInfo[0].rating.rate}
              status="ProductInfo"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
