import React, {
  useEffect,
  useState,
} from "react";

const Products = () => {

  // Products
  const [products, setProducts] =
    useState([]);

  // Search
  const [search, setSearch] =
    useState("");

  // Load Products
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

    // First Load
    loadProducts();

    // Realtime Update
    const handleStorage = () => {

      loadProducts();
    };

    window.addEventListener(
      "storage",
      handleStorage
    );

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

  // Add To Cart
  const addToCart = (
    product
  ) => {

    // Existing Cart
    const savedCart =
      JSON.parse(
        localStorage.getItem(
          "cart"
        )
      ) || [];

    // Check Duplicate
    const alreadyExist =
      savedCart.find(
        (item) =>
          item.id === product.id
      );

    // If Already Added
    if (alreadyExist) {

      alert(
        "Already Added To Cart"
      );

      return;
    }

    // Add Product
    const updatedCart = [
      ...savedCart,
      product,
    ];

    // Save Cart
    localStorage.setItem(
      "cart",
      JSON.stringify(
        updatedCart
      )
    );

    // Refresh Navbar Count
    window.dispatchEvent(
      new Event(
        "cartUpdated"
      )
    );

    // Success Message
    alert(
      "Product Added To Cart"
    );
  };

  // SEARCH FILTER
  const filteredProducts =
    products.filter((product) =>

      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        ) ||

      product.category
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <section className="min-h-screen bg-[#020617] text-white p-10">

      {/* Heading */}
      <div className="mb-14">

        <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
          Explore Collection
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
          All Products
        </h1>

      </div>

      {/* SEARCH */}
      <div className="mb-10">

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="
            w-full
            md:w-[450px]
            bg-[#111827]
            border
            border-white/10
            px-6
            py-5
            rounded-2xl
            outline-none
            text-lg
          "
        />

      </div>

      {/* Empty */}
      {filteredProducts.length === 0 && (

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

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            className="
              bg-[#111827]
              rounded-[30px]
              overflow-hidden
              border
              border-white/10
              hover:-translate-y-3
              transition-all
              duration-500
            "
          >

            {/* Product Image */}
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

              {/* Name */}
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

              {/* Add To Cart */}
              <button
                onClick={() =>
                  addToCart(
                    product
                  )
                }
                className="
                  w-full
                  mt-6
                  bg-cyan-500
                  hover:bg-cyan-600
                  py-4
                  rounded-2xl
                  text-black
                  font-bold
                  text-lg
                  transition
                "
              >
                Add To Cart
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Products;