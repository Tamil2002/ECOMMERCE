import React, {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  ShoppingCart,
  Zap,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import { CartContext } from "../context/CartContext";

const Hero = () => {

  const navigate =
    useNavigate();

  const { addToCart } =
    useContext(CartContext);

  // DYNAMIC PRODUCTS
  const [products, setProducts] =
    useState([]);

  // LOAD PRODUCTS
  useEffect(() => {

    const loadProducts = () => {

      const savedProducts =
        JSON.parse(
          localStorage.getItem(
            "products"
          )
        ) || [];

      setProducts(
        savedProducts
      );
    };

    // FIRST LOAD
    loadProducts();

    // LIVE UPDATE
    window.addEventListener(
      "productsUpdated",
      loadProducts
    );

    return () => {

      window.removeEventListener(
        "productsUpdated",
        loadProducts
      );
    };

  }, []);

  // ADD TO CART
  const handleCart = (
    product
  ) => {

    addToCart(product);

    // NAVBAR UPDATE
    window.dispatchEvent(
      new Event(
        "cartUpdated"
      )
    );

    alert(
      "Added To Cart"
    );
  };

  // BUY NOW
  const handleBuy = (
    product
  ) => {

    addToCart(product);

    window.dispatchEvent(
      new Event(
        "cartUpdated"
      )
    );

    navigate("/cart");
  };

  return (
    <>

      {/* Offer Banner */}
      <div
        className="
          bg-gradient-to-r
          from-[#111827]
          via-[#1e293b]
          to-[#0f172a]
          text-white
          py-4
          px-6
          text-center
          font-bold
          text-sm
          md:text-lg
          tracking-wide
          border-b
          border-cyan-500/20
        "
      >

        🔥 Mega Sale Offer — Flat 45% OFF On All Products 🔥

      </div>

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
              Shop premium gadgets,
              fashion accessories and
              trending products.
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

          {/* EMPTY */}
          {products.length === 0 && (

            <div className="text-center py-20">

              <h2 className="text-4xl font-bold">
                No Products Found
              </h2>

              <p className="text-gray-400 mt-4">
                Add Products From Admin Panel
              </p>

            </div>

          )}

          {/* GRID */}
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

                  {/* Category */}
                  <p className="text-gray-400 mt-3">
                    {product.category}
                  </p>

                  {/* Price */}
                  <p className="text-cyan-400 text-2xl font-bold mt-3">
                    {product.price}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-6">

                    {/* Cart */}
                    <button
                      onClick={() =>
                        handleCart(
                          product
                        )
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
                        handleBuy(
                          product
                        )
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

    </>
  );
};

export default Hero; 