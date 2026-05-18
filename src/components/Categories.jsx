import React from "react";

import {
  Smartphone,
  Shirt,
  Footprints,
  Laptop,
  ShoppingBasket,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Mobiles",
    count: "120+ Products",
    icon: <Smartphone size={36} />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    name: "Fashion",
    count: "80+ Products",
    icon: <Shirt size={36} />,
    color: "from-orange-400 to-pink-500",
  },
  {
    id: 3,
    name: "Shoes",
    count: "60+ Products",
    icon: <Footprints size={36} />,
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 4,
    name: "Electronics",
    count: "200+ Products",
    icon: <Laptop size={36} />,
    color: "from-purple-400 to-indigo-500",
  },
  {
    id: 5,
    name: "Grocery",
    count: "150+ Products",
    icon: <ShoppingBasket size={36} />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 6,
    name: "Beauty",
    count: "90+ Products",
    icon: <Sparkles size={36} />,
    color: "from-rose-400 to-pink-500",
  },
];

const Categories = () => {

  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#020b2d] to-[#000814] text-white py-20 min-h-screen">

      {/* Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top */}
        <div className="flex items-start gap-6 mb-14">

          {/* Back Arrow */}
          <button
            onClick={() =>
              navigate(-1)
            }
            className="
              w-16
              h-16
              bg-[#374151]
              hover:bg-[#4b5563]
              rounded-2xl
              flex
              items-center
              justify-center
              transition
              flex-shrink-0
            "
          >
            <ArrowLeft
              size={30}
              className="text-white"
            />
          </button>

          {/* Heading */}
          <div>

            <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
              Explore Collections
            </p>

            <h2 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
              Shop By Categories
            </h2>

            <p className="text-gray-300 mt-6 text-lg max-w-3xl">
              Discover trending fashion,
              electronics, beauty products
              and premium collections.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {categories.map((category) => (

            <div
              key={category.id}

              onClick={() =>
                navigate("/products")
              }

              className="
                bg-white/5
                border
                border-white/10
                rounded-[35px]
                p-12
                hover:-translate-y-3
                transition-all
                duration-500
                cursor-pointer
              "
            >

              {/* Icon */}
              <div
                className={`
                  w-32
                  h-32
                  rounded-[35px]
                  bg-gradient-to-br
                  ${category.color}
                  flex
                  items-center
                  justify-center
                  shadow-2xl
                `}
              >
                {category.icon}
              </div>

              {/* Content */}
              <div className="mt-10">

                <h3 className="text-4xl font-bold">
                  {category.name}
                </h3>

                <p className="text-gray-300 mt-5 text-2xl">
                  {category.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;