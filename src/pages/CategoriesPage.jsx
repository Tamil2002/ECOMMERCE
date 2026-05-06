import React from "react";

import {
  Smartphone,
  Shirt,
  Footprints,
  Laptop,
  ShoppingBasket,
  Sparkles,
  Watch,
  Headphones,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Mobiles",
    icon: <Smartphone size={45} />,
    products: "120+ Products",
    color: "from-teal-400 to-cyan-500",
  },
  {
    id: 2,
    name: "Fashion",
    icon: <Shirt size={45} />,
    products: "80+ Products",
    color: "from-orange-400 to-amber-500",
  },
  {
    id: 3,
    name: "Shoes",
    icon: <Footprints size={45} />,
    products: "60+ Products",
    color: "from-lime-400 to-green-500",
  },
  {
    id: 4,
    name: "Electronics",
    icon: <Laptop size={45} />,
    products: "200+ Products",
    color: "from-sky-400 to-blue-500",
  },
  {
    id: 5,
    name: "Grocery",
    icon: <ShoppingBasket size={45} />,
    products: "150+ Products",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: 6,
    name: "Beauty",
    icon: <Sparkles size={45} />,
    products: "90+ Products",
    color: "from-rose-400 to-orange-400",
  },
  {
    id: 7,
    name: "Watches",
    icon: <Watch size={45} />,
    products: "70+ Products",
    color: "from-violet-400 to-purple-500",
  },
  {
    id: 8,
    name: "Headphones",
    icon: <Headphones size={45} />,
    products: "50+ Products",
    color: "from-red-400 to-orange-500",
  },
];

const CategoriesPage = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#081120] via-[#0f172a] to-[#1e293b] text-white py-24">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-teal-400 font-semibold mb-4">
            Explore Collections
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold">
            Shop By Categories
          </h1>

          <p className="text-gray-300 mt-8 text-lg max-w-3xl mx-auto leading-8">
            Discover trending fashion, electronics,
            beauty products and premium collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {categories.map((category) => (
            <div
              key={category.id}
              className="
                relative
                group
                bg-white/5
                backdrop-blur-2xl
                rounded-[35px]
                p-10
                overflow-hidden
                hover:-translate-y-4
                hover:scale-105
                transition-all
                duration-500
                cursor-pointer
                shadow-[0_10px_40px_rgba(0,0,0,0.4)]
              "
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/10 to-transparent"></div>

              {/* Icon */}
              <div
                className={`
                  w-24
                  h-24
                  rounded-3xl
                  bg-gradient-to-r
                  ${category.color}
                  flex
                  items-center
                  justify-center
                  shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                  group-hover:rotate-12
                  group-hover:scale-110
                  transition-all
                  duration-500
                `}
              >
                {category.icon}
              </div>

              {/* Content */}
              <div className="mt-8">

                <h2 className="text-3xl font-bold">
                  {category.name}
                </h2>

                <p className="text-gray-300 mt-3 text-lg">
                  {category.products}
                </p>

                {/* Button */}
                <button
                  className="
                    mt-8
                    w-full
                    bg-gradient-to-r
                    from-teal-400
                    to-cyan-500
                    hover:from-orange-400
                    hover:to-amber-500
                    py-4
                    rounded-2xl
                    text-lg
                    font-bold
                    transition-all
                    duration-500
                    hover:scale-105
                    shadow-lg
                  "
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="
            mt-24
            bg-gradient-to-r
            from-teal-400
            via-cyan-500
            to-sky-500
            rounded-[40px]
            p-12
            text-center
            shadow-[0_20px_80px_rgba(20,184,166,0.4)]
          "
        >

          <h2 className="text-5xl font-extrabold">
            Discover New Trends
          </h2>

          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Upgrade your shopping experience with premium
            collections and modern products.
          </p>

          <button
            className="
              mt-10
              bg-black
              hover:bg-slate-900
              px-10
              py-4
              rounded-2xl
              text-lg
              font-bold
              transition-all
              duration-500
              hover:scale-105
            "
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;