import React, { useContext, useState } from "react";

import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  CreditCard,
  MapPin,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const Cart = () => {

  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  // Popup
  const [showAddress, setShowAddress] =
    useState(false);

  // Total
  const totalPrice = cartItems.reduce(
    (total, item) => {

      const price =
        Number(
          item.price
            .replace("₹", "")
            .replace(/,/g, "")
        );

      return total + price * item.quantity;
    },
    0
  );

  const finalPrice =
    totalPrice - 1000 + 9;

  // Payment
  const handlePayment = () => {

    alert(
      "Order Placed Successfully 🎉"
    );

    setShowAddress(false);
  };

  return (
    <section className="min-h-screen bg-[#f1f3f6] py-8 px-3">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-slate-800
            mb-8
          "
        >
          Shopping Cart
        </h1>

        {/* Empty */}
        {cartItems.length === 0 ? (

          <div
            className="
              bg-white
              rounded-3xl
              p-10
              text-center
            "
          >

            <ShoppingBag
              size={70}
              className="
                mx-auto
                text-[#2874f0]
              "
            />

            <h2 className="text-3xl font-bold mt-6">
              Your Cart Is Empty
            </h2>

            <button
              onClick={() =>
                navigate("/")
              }
              className="
                mt-8
                bg-[#2874f0]
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
              "
            >
              Continue Shopping
            </button>
          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-6">

            {/* Left */}
            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="
                    bg-white
                    rounded-3xl
                    p-4
                    md:p-6
                    flex
                    flex-col
                    md:flex-row
                    gap-6
                  "
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full
                      md:w-60
                      h-56
                      object-cover
                      rounded-2xl
                    "
                  />

                  {/* Content */}
                  <div className="flex-1">

                    <h2
                      className="
                        text-2xl
                        md:text-4xl
                        font-bold
                        text-slate-800
                      "
                    >
                      {item.name}
                    </h2>

                    <p
                      className="
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-[#2874f0]
                        mt-4
                      "
                    >
                      {item.price}
                    </p>

                    {/* Qty */}
                    <div className="flex items-center gap-4 mt-6">

                      <button
                        onClick={() =>
                          decreaseQty(item.id)
                        }
                        className="
                          w-11
                          h-11
                          rounded-full
                          bg-pink-100
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Minus size={18} />
                      </button>

                      <span className="text-2xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQty(item.id)
                        }
                        className="
                          w-11
                          h-11
                          rounded-full
                          bg-cyan-100
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">

                      {/* Remove */}
                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="
                          bg-[#ffe4e6]
                          text-[#e11d48]
                          px-6
                          py-3
                          rounded-2xl
                          font-semibold
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <Trash2 size={20} />
                        Remove
                      </button>

                      {/* Buy */}
                      <button
                        onClick={() =>
                          setShowAddress(true)
                        }
                        className="
                          bg-[#dbeafe]
                          text-[#2563eb]
                          px-6
                          py-3
                          rounded-2xl
                          font-semibold
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <CreditCard size={20} />
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                h-fit
                sticky
                top-24
              "
            >

              <h2
                className="
                  text-2xl
                  font-bold
                  text-slate-800
                  mb-8
                "
              >
                Price Details
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">
                  <span>Price</span>

                  <span>
                    ₹{totalPrice}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>

                  <span className="text-green-600">
                    - ₹1000
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>

                  <span className="text-green-600">
                    FREE
                  </span>
                </div>

                <div className="border-t pt-5 flex justify-between">

                  <span className="text-xl font-bold">
                    Total
                  </span>

                  <span
                    className="
                      text-2xl
                      font-extrabold
                      text-[#2874f0]
                    "
                  >
                    ₹{finalPrice}
                  </span>
                </div>

                {/* Order */}
                <button
                  onClick={() =>
                    setShowAddress(true)
                  }
                  className="
                    w-full
                    mt-6
                    bg-[#fb641b]
                    hover:bg-[#f85606]
                    text-white
                    py-4
                    rounded-2xl
                    text-lg
                    font-bold
                  "
                >
                  PLACE ORDER
                </button>

                {/* Continue */}
                <button
                  onClick={() =>
                    navigate("/")
                  }
                  className="
                    w-full
                    mt-4
                    bg-[#e0e7ff]
                    text-[#2563eb]
                    py-4
                    rounded-2xl
                    font-semibold
                  "
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Address Popup */}
        {showAddress && (

          <div
            className="
              fixed
              inset-0
              bg-black/50
              z-50
              flex
              items-center
              justify-center
              p-3
              overflow-y-auto
            "
          >

            {/* Popup */}
            <div
              className="
                relative
                bg-white
                rounded-3xl
                w-full
                max-w-2xl
                p-5
                sm:p-8
                md:p-10
                my-10
              "
            >

              {/* Close */}
              <button
                onClick={() =>
                  setShowAddress(false)
                }
                className="
                  absolute
                  top-4
                  right-4
                  bg-gray-100
                  hover:bg-red-500
                  hover:text-white
                  p-2
                  rounded-full
                  transition
                "
              >
                <X size={20} />
              </button>

              {/* Heading */}
              <div className="flex items-center gap-3 mb-6">

                <MapPin className="text-[#2874f0]" />

                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-slate-800
                  "
                >
                  Delivery Address
                </h2>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    border
                    border-gray-300
                    p-4
                    rounded-2xl
                    outline-none
                    w-full
                  "
                />

                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="
                    border
                    border-gray-300
                    p-4
                    rounded-2xl
                    outline-none
                    w-full
                  "
                />

                <input
                  type="text"
                  placeholder="City"
                  className="
                    border
                    border-gray-300
                    p-4
                    rounded-2xl
                    outline-none
                    w-full
                  "
                />

                <input
                  type="text"
                  placeholder="Pincode"
                  className="
                    border
                    border-gray-300
                    p-4
                    rounded-2xl
                    outline-none
                    w-full
                  "
                />

                <input
                  type="text"
                  placeholder="State"
                  className="
                    border
                    border-gray-300
                    p-4
                    rounded-2xl
                    outline-none
                    w-full
                    md:col-span-2
                  "
                />
              </div>

              {/* Address */}
              <textarea
                placeholder="Full Address"
                rows="4"
                className="
                  border
                  border-gray-300
                  p-4
                  rounded-2xl
                  outline-none
                  w-full
                  mt-4
                  resize-none
                "
              />

              {/* Payment */}
              <button
                onClick={handlePayment}
                className="
                  w-full
                  mt-6
                  bg-[#2874f0]
                  hover:bg-[#1d63d1]
                  text-white
                  py-4
                  rounded-2xl
                  text-lg
                  sm:text-xl
                  font-bold
                  transition
                "
              >
                Pay ₹{finalPrice}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;