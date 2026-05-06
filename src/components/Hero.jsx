import React, { useContext } from "react";

import {
  ShoppingCart,
  Zap,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import { CartContext } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 2,
    name: "Wireless Headphone",
    price: "₹7,499",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 3,
    name: "Modern Camera",
    price: "₹29,999",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
  {
    id: 5,
    name: "Laptop",
    price: "₹74,999",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 6,
    name: "Sneakers",
    price: "₹5,499",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
];

const Hero = () => {

  const navigate = useNavigate();

  const { addToCart } =
    useContext(CartContext);

  // Add To Cart
  const handleCart = (product) => {

    addToCart(product);

    navigate("/cart");
  };

  // Buy Now
  const handleBuy = (product) => {

    addToCart(product);

    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-purple-950 text-white overflow-hidden">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <p className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-4">
            New Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Discover
            <span className="text-pink-500">
              {" "}Amazing{" "}
            </span>
            Products
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-8">
            Shop premium gadgets, fashion
            accessories and trending products.
          </p>

          <button
            onClick={() =>
              navigate("/products")
            }
            className="
              mt-10
              bg-gradient-to-r
              from-pink-500
              to-purple-600
              hover:from-cyan-400
              hover:to-blue-500
              px-10
              py-4
              rounded-full
              text-lg
              font-bold
              transition-all
              duration-500
            "
          >
            Shop Now
          </button>
        </div>

        {/* Right */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
            alt="hero"
            className="
              rounded-[35px]
              shadow-[0_20px_80px_rgba(0,0,0,0.5)]
              hover:scale-105
              transition-all
              duration-700
            "
          />
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-5xl font-bold mb-14">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="
                bg-white/5
                border
                border-white/10
                rounded-[30px]
                overflow-hidden
                hover:-translate-y-3
                hover:border-cyan-400/40
                transition-all
                duration-500
              "
            >

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="
                  h-64
                  w-full
                  object-cover
                  hover:scale-110
                  transition-all
                  duration-700
                "
              />

              {/* Content */}
              <div className="p-6">

                {/* Name */}
                <h3 className="text-2xl font-bold">
                  {product.name}
                </h3>

                {/* Price */}
                <p className="text-cyan-400 text-2xl font-bold mt-3">
                  {product.price}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">

                  {/* Cart */}
                  <button
                    onClick={() =>
                      handleCart(product)
                    }
                    className="
                      flex-1
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      hover:from-pink-500
                      hover:to-purple-600
                      py-3
                      rounded-2xl
                      font-semibold
                      text-white
                      flex
                      items-center
                      justify-center
                      gap-2
                      transition-all
                      duration-500
                    "
                  >
                    <ShoppingCart size={20} />
                    Cart
                  </button>

                  {/* Buy */}
                  <button
                    onClick={() =>
                      handleBuy(product)
                    }
                    className="
                      flex-1
                      bg-gradient-to-r
                      from-pink-500
                      to-purple-600
                      hover:from-cyan-400
                      hover:to-blue-500
                      py-3
                      rounded-2xl
                      font-semibold
                      text-white
                      flex
                      items-center
                      justify-center
                      gap-2
                      transition-all
                      duration-500
                    "
                  >
                    <Zap size={20} />
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;