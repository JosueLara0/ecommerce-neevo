// Libraries
import React, { useContext, useState } from "react";

// Context
import CartContext from "../Context/CartContext";

const Payment = () => {
  // Context states
  const { state } = useContext(CartContext);

  // States
  const [payMethod, setPayMethod] = useState("Credit/Debit Card");
  const [message, setMessage] = useState(null);

  // Handle render of Payment Methods
  const handlePayMethod = (e) => {
    setPayMethod(e.target.value);
    setMessage(null);
  };

  // Handle message of Buy Button
  const handleMessage = (e) => {
    e.preventDefault();
    setMessage("It's just a Demo");
  };

  return (
    <div className="flex flex-col justify-center items-center w-10/12 m-auto pt-20">
      <p className="my-6 font-bold text-center text-4xl underline">
        Total Payment: ${state.totalPrice.toFixed(2)}
      </p>
      <form action="" name="form">
        <p className="p-4 font-bold text-2xl text-center">
          Payment Method:{" "}
          <select
            className="border-2 text-blueSoft"
            name={payMethod}
            onChange={handlePayMethod}
          >
            <option value="Credit/Debit Card">Credit/Debit Card</option>
            <option value="Paypal">Paypal</option>
            <option value="OXXO/7-Eleven">OXXO/7-Eleven</option>
          </select>
        </p>

        {payMethod === "Credit/Debit Card" && (
          <div className="flex flex-col items-center m-4 text-xl">
            <input className="border rounded" placeholder="Card number" />
            <input
              className="my-4 border rounded"
              placeholder="Expiration date"
            />
            <input className="border rounded" placeholder="CVV" />
            <button
              className="mt-10 px-4 py-2 bg-blueSoft hover:bg-yellow font-bold text-2xl md:text-3xl text-white 
              transition duration-300 rounded-lg"
              onClick={(e) => handleMessage(e)}
            >
              Purchase
            </button>
          </div>
        )}

        {payMethod === "Paypal" && (
          <div className="flex flex-col items-center m-4">
            <button
              className="mt-10 px-4 py-2 bg-blueSoft hover:bg-yellow font-bold text-2xl md:text-3xl text-white 
              transition duration-300 rounded-lg"
              onClick={(e) => handleMessage(e)}
            >
              Pay with PayPal
            </button>
          </div>
        )}

        {payMethod === "OXXO/7-Eleven" && (
          <div className="flex flex-col items-center m-4">
            <button
              className="mt-10 px-4 py-2 bg-blueSoft hover:bg-yellow font-bold text-2xl md:text-3xl text-white 
              transition duration-300 rounded-lg"
              onClick={(e) => handleMessage(e)}
            >
              Pay with OXXO
            </button>
            <button
              className="mt-10 px-4 py-2 bg-blueSoft hover:bg-yellow font-bold text-2xl md:text-3xl text-white 
              transition duration-300 rounded-lg"
              onClick={(e) => handleMessage(e)}
            >
              Pay with 7-eleven
            </button>
          </div>
        )}

        {message && (
          <p className=" font-bold text-center text-2xl text-yellow">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Payment;
