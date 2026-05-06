import React, { useEffect } from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import TrendingProducts from "../components/TrendingProducts";

const Home = () => {

  // Scroll Top
  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-slate-950 to-purple-950 text-white overflow-hidden">

      {/* Hero */}
      <Hero />

      {/* Categories */}
      <section className="py-20">
        <Categories />
      </section>

      {/* Trending Products */}
      <section className="py-20">
        <TrendingProducts />
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