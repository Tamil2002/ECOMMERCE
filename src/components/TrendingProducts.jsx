import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import "swiper/css";

const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: "₹9,999",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 2,
    name: "Wireless Headphone",
    price: "₹7,499",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "₹2,999",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
  {
    id: 4,
    name: "Laptop",
    price: "₹74,999",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 5,
    name: "Sneakers",
    price: "₹5,499",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 6,
    name: "Modern Camera",
    price: "₹29,999",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
];

const TrendingProducts = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#07111f] via-[#0f172a] to-[#111827] text-white py-24">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold mb-4">
            Trending Now
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold">
            Best Selling Products
          </h2>

          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Explore premium trending products with modern styles
            and amazing discounts.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {products.map((product) => (
            <SwiperSlide key={product.id}>

              <div
                className="
                  group
                  relative
                  bg-white/5
                  backdrop-blur-2xl
                  rounded-[35px]
                  overflow-hidden
                  hover:-translate-y-4
                  transition-all
                  duration-500
                  shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                "
              >

                {/* Discount Badge */}
                <div className="absolute top-5 left-5 z-20 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  20% OFF
                </div>

                {/* Wishlist */}
                <button className="absolute top-5 right-5 z-20 bg-white/10 backdrop-blur-lg p-3 rounded-full hover:bg-pink-500 transition duration-300">
                  <Heart size={20} />
                </button>

                {/* Product Image */}
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-72
                      w-full
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700
                    "
                  />
                </div>

                {/* Product Details */}
                <div className="p-6">

                  {/* Rating */}
                  <div className="flex items-center gap-2 text-yellow-400 mb-3">
                    <Star size={18} fill="yellow" />
                    <span>{product.rating}</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-2xl font-bold">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <p className="text-cyan-400 text-2xl font-bold mt-3">
                    {product.price}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-6">

                    {/* Buy Now */}
                    <button
                      className="
                        flex-1
                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-500
                        hover:from-orange-400
                        hover:to-pink-500
                        py-3
                        rounded-2xl
                        font-semibold
                        transition-all
                        duration-500
                        hover:scale-105
                      "
                    >
                      Buy Now
                    </button>

                    {/* Cart */}
                    <button
                      className="
                        w-14
                        flex
                        items-center
                        justify-center
                        bg-white/10
                        hover:bg-cyan-400
                        hover:text-black
                        rounded-2xl
                        transition-all
                        duration-500
                      "
                    >
                      <ShoppingCart size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingProducts;