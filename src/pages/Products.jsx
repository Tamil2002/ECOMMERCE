import React, { useContext } from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  ShoppingCart,
  Zap,
} from "lucide-react";

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
    name: "Laptop",
    price: "₹74,999",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
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
    name: "Sneakers",
    price: "₹5,499",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 6,
    name: "Modern Camera",
    price: "₹29,999",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: 7,
    name: "iPhone",
    price: "₹89,999",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab",
  },
];

const Products = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const { addToCart } =
    useContext(CartContext);

  const searchParams =
    new URLSearchParams(location.search);

  const search =
    searchParams
      .get("search")
      ?.toLowerCase() || "";

  // Filter
  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search)
    );

  // Add To Cart
  const handleCart = (product) => {

    addToCart({
      ...product,
      quantity: 1,
    });

    navigate("/cart");
  };

  // Buy Now
  const handleBuy = (product) => {

    addToCart({
      ...product,
      quantity: 1,
    });

    navigate("/cart");
  };

  return (
    <section className="min-h-screen bg-[#0f172a] text-white py-20 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold">
            Products
          </h2>

          <p className="text-gray-400 mt-4">
            Explore trending products
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <div
                key={product.id}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-3xl
                  overflow-hidden
                  hover:-translate-y-2
                  transition
                  duration-300
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
                  "
                />

                {/* Content */}
                <div className="p-5">

                  <h3 className="text-2xl font-bold">
                    {product.name}
                  </h3>

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
                        bg-cyan-500
                        hover:bg-cyan-600
                        py-3
                        rounded-2xl
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
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
                        bg-pink-500
                        hover:bg-pink-600
                        py-3
                        rounded-2xl
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      <Zap size={20} />
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))

          ) : (

            <div className="col-span-full text-center">

              <h2 className="text-4xl font-bold text-red-400">
                No Products Found
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;