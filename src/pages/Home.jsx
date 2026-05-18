import React, {
  useEffect,
  useState,
} from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";

import {
  ShoppingCart,
  Zap,
} from "lucide-react";

const Home = () => {

  // Products State
  const [products, setProducts] =
    useState([]);

  // Scroll Top
  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  // Load Products From LocalStorage
  useEffect(() => {

    const loadProducts = () => {

      // Only LocalStorage Products
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

    // First Load
    loadProducts();

    // Realtime Update
    const handleStorage = () => {

      loadProducts();
    };

    // Multi Tab
    window.addEventListener(
      "storage",
      handleStorage
    );

    // Same Tab
    window.addEventListener(
      "productsUpdated",
      handleStorage
    );

    return () => {

      window.removeEventListener(
        "storage",
        handleStorage
      );

      window.removeEventListener(
        "productsUpdated",
        handleStorage
      );
    };

  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-slate-950 to-purple-950 text-white overflow-hidden">

      {/* Hero */}
      <Hero />

      {/* Categories */}
      <section className="py-20">
        <Categories />
      </section>

      {/* Products */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="mb-14">

            <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
              Trending Collection
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
              Featured Products
            </h1>

          </div>

          {/* Empty */}
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

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
                  transition-all
                  duration-500
                "
              >

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-72
                    object-cover
                  "
                />

                {/* Content */}
                <div className="p-6">

                  {/* Product Name */}
                  <h2 className="text-3xl font-bold">
                    {product.name}
                  </h2>

                  {/* Category */}
                  <p className="text-gray-400 mt-3 text-lg">
                    {product.category}
                  </p>

                  {/* Price */}
                  <h3
                    className="
                      text-cyan-400
                      text-3xl
                      font-extrabold
                      mt-5
                    "
                  >
                    {product.price}
                  </h3>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-8">

                    {/* Cart */}
                    <button
                      className="
                        flex-1
                        bg-cyan-500
                        hover:bg-cyan-600
                        py-4
                        rounded-2xl
                        font-bold
                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      <ShoppingCart size={22} />
                      Cart
                    </button>

                    {/* Buy */}
                    <button
                      className="
                        flex-1
                        bg-pink-500
                        hover:bg-pink-600
                        py-4
                        rounded-2xl
                        font-bold
                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      <Zap size={22} />
                      Buy
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Offer Banner */}
      <section className="py-20 px-4">

        <div
          className="
            max-w-7xl
            mx-auto
            bg-white/5
            border
            border-white/10
            rounded-[35px]
            overflow-hidden
            grid
            md:grid-cols-2
            gap-10
            items-center
            p-10
          "
        >

          {/* Left */}
          <div>

            <p className="uppercase tracking-[5px] text-cyan-400 font-semibold mb-4">
              Big Sale
            </p>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Up To
              <span className="text-pink-500">
                {" "}70% OFF
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-8">
              Upgrade your style with premium gadgets,
              fashion and trending accessories.
            </p>

            <button
              className="
                mt-8
                bg-gradient-to-r
                from-pink-500
                to-purple-600
                hover:from-cyan-400
                hover:to-blue-500
                px-8
                py-4
                rounded-full
                text-lg
                font-bold
                transition
                duration-300
              "
            >
              Shop Now
            </button>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
              alt="sale"
              className="
                rounded-[30px]
                w-full
                max-w-lg
                object-cover
              "
            />

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;