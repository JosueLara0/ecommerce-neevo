// Libraries
import React from "react";
import { Link } from "react-router-dom";

// assets
import cartImg from "../../assets/shopping-cart.png";

const Header = ({ cart }) => {
  return (
    <header
      className="grid grid-cols-3 flex items-center fixed w-screen h-20 bg-blueSoft font-serif font-medium 
      text-lg sm:text-xl md:text-2xl text-white"
    >
      <h2 className="ml-4 md:ml-10 font-bold text-xl sm:text-2xl md:text-3xl hover:text-yellow">
        <Link to="/">NEEVO</Link>
      </h2>

      <Link to="/" className="text-center hover:text-yellow">
        Store
      </Link>

      <div className="flex justify-end items-center">
        <Link to="/wishList" className="hover:text-yellow">
          Wish List
        </Link>

        <Link
          to="/cart"
          className="mx-2 md:mx-10 px-0.5 md:px-1 bg-white hover:bg-yellow font-sans text-blueSoft hover:text-white 
          rounded-lg transition duration-300"
        >
          <p className="font-bold text-right text-2xl">{cart.length}</p>
          <img src={cartImg} alt="Cart" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
