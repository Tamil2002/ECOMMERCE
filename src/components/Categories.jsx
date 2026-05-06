import React from "react";

import {
  Smartphone,
  Shirt,
  Footprints,
  Laptop,
  ShoppingBasket,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Mobiles",
    icon: <Smartphone size={36} />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    name: "Fashion",
    icon: <Shirt size={36} />,
    color: "from-orange-400 to-pink-500",
  },
  {
    id: 3,
    name: "Shoes",
    icon: <Footprints size={36} />,
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 4,
    name: "Electronics",
    icon: <Laptop size={36} />,
    color: "from-purple-400 to-indigo-500",
  },
  {
    id: 5,
    name: "Grocery",
    icon: <ShoppingBasket size={36} />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 6,
    name: "Beauty",
    icon: <Sparkles size={36} />,
    color: "from-rose-400 to-pink-500",
  },
];

const Categories = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold">
            Shop By Categories
          </h2>

          <p className="text-gray-400 mt-4">
            Explore trending collections
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (

            <div
              key={category.id}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                hover:-translate-y-2
                transition
                duration-300
                cursor-pointer
              "
            >

              {/* Icon */}
              <div
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  ${category.color}
                  flex
                  items-center
                  justify-center
                `}
              >
                {category.icon}
              </div>

              {/* Name */}
              <h3 className="mt-4 text-lg font-semibold">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;