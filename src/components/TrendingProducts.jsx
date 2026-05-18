import React, {
  useEffect,
  useState,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
} from "swiper/modules";

import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import "swiper/css";

const TrendingProducts = () => {

  // PRODUCTS
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
  const addToCart = (
    product
  ) => {

    const savedCart =
      JSON.parse(
        localStorage.getItem(
          "cart"
        )
      ) || [];

    // CHECK DUPLICATE
    const alreadyExist =
      savedCart.find(
        (item) =>
          item.id === product.id
      );

    if (alreadyExist) {

      alert(
        "Already Added To Cart"
      );

      return;
    }

    // ADD PRODUCT
    const updatedCart = [
      ...savedCart,
      product,
    ];

    // SAVE
    localStorage.setItem(
      "cart",
      JSON.stringify(
        updatedCart
      )
    );

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

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#07111f]
        via-[#0f172a]
        to-[#111827]
        text-white
        py-24
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-0
          w-72
          h-72
          bg-cyan-500/20
          rounded-full
          blur-3xl
          animate-pulse
        "
      ></div>

      <div
        className="
          absolute
          bottom-0
          right-0
          w-80
          h-80
          bg-orange-500/20
          rounded-full
          blur-3xl
          animate-bounce
        "
      ></div>

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          relative
          z-10
        "
      >

        {/* Heading */}
        <div className="text-center mb-16">

          <p
            className="
              uppercase
              tracking-[6px]
              text-cyan-400
              font-semibold
              mb-4
            "
          >
            Trending Now
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-extrabold
            "
          >
            Best Selling Products
          </h2>

          <p
            className="
              text-gray-300
              mt-6
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            Explore premium trending
            products with modern styles
            and amazing discounts.
          </p>

        </div>

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

        {/* SWIPER */}
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

            <SwiperSlide
              key={product.id}
            >

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

                {/* Badge */}
                <div
                  className="
                    absolute
                    top-5
                    left-5
                    z-20
                    bg-orange-500
                    text-white
                    px-4
                    py-1
                    rounded-full
                    text-sm
                    font-bold
                  "
                >
                  20% OFF
                </div>

                {/* Wishlist */}
                <button
                  className="
                    absolute
                    top-5
                    right-5
                    z-20
                    bg-white/10
                    backdrop-blur-lg
                    p-3
                    rounded-full
                    hover:bg-pink-500
                    transition
                  "
                >

                  <Heart size={20} />

                </button>

                {/* IMAGE */}
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

                {/* DETAILS */}
                <div className="p-6">

                  {/* Rating */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-yellow-400
                      mb-3
                    "
                  >

                    <Star
                      size={18}
                      fill="yellow"
                    />

                    <span>4.8</span>

                  </div>

                  {/* NAME */}
                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    {product.name}
                  </h3>

                  {/* CATEGORY */}
                  <p className="text-gray-400 mt-2">
                    {product.category}
                  </p>

                  {/* PRICE */}
                  <p
                    className="
                      text-cyan-400
                      text-2xl
                      font-bold
                      mt-3
                    "
                  >
                    {product.price}
                  </p>

                  {/* BUTTONS */}
                  <div
                    className="
                      flex
                      gap-4
                      mt-6
                    "
                  >

                    {/* BUY */}
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

                    {/* CART */}
                    <button
                      onClick={() =>
                        addToCart(
                          product
                        )
                      }
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

                      <ShoppingCart
                        size={22}
                      />

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