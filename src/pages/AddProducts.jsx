import React, {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  ShoppingCart,
  Plus,
  Trash2,
  Search,
  ArrowLeft,
  Pencil,
  Save,
  Package,
  IndianRupee,
  Layers3,
} from "lucide-react";

const AddProducts = () => {

  const navigate =
    useNavigate();

  // Products State
  const [products, setProducts] =
    useState([]);

  // Search
  const [search, setSearch] =
    useState("");

  // Add Inputs
  const [name, setName] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [image, setImage] =
    useState("");

  // Edit States
  const [editId, setEditId] =
    useState(null);

  const [editName, setEditName] =
    useState("");

  const [editCategory, setEditCategory] =
    useState("");

  const [editPrice, setEditPrice] =
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

    loadProducts();

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

  // Add Product
  const addProduct = () => {

    if (
      !name ||
      !category ||
      !price ||
      !image
    ) {

      alert(
        "Fill all fields"
      );

      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      category,
      price,
      image,
    };

    const updatedProducts = [
      ...products,
      newProduct,
    ];

    setProducts(
      updatedProducts
    );

    localStorage.setItem(
      "products",
      JSON.stringify(
        updatedProducts
      )
    );

    window.dispatchEvent(
      new Event(
        "productsUpdated"
      )
    );

    setName("");
    setCategory("");
    setPrice("");
    setImage("");
  };

  // Remove Product
  const removeProduct = (id) => {

    const updatedProducts =
      products.filter(
        (product) =>
          product.id !== id
      );

    setProducts(
      updatedProducts
    );

    localStorage.setItem(
      "products",
      JSON.stringify(
        updatedProducts
      )
    );

    window.dispatchEvent(
      new Event(
        "productsUpdated"
      )
    );
  };

  // Edit
  const startEdit = (product) => {

    setEditId(
      product.id
    );

    setEditName(
      product.name
    );

    setEditCategory(
      product.category
    );

    setEditPrice(
      product.price
    );
  };

  // Save Edit
  const saveEdit = (id) => {

    const updatedProducts =
      products.map((product) =>

        product.id === id
          ? {
              ...product,
              name: editName,
              category:
                editCategory,
              price: editPrice,
            }
          : product
      );

    setProducts(
      updatedProducts
    );

    localStorage.setItem(
      "products",
      JSON.stringify(
        updatedProducts
      )
    );

    window.dispatchEvent(
      new Event(
        "productsUpdated"
      )
    );

    setEditId(null);
  };

  // Search
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
    <section className="min-h-screen bg-[#f1f3f6] p-8">

      <div className="max-w-[1600px] mx-auto">

        {/* TOPBAR */}
        <div
          className="
            bg-white
            rounded-3xl
            shadow-lg
            p-6
            flex
            items-center
            justify-between
            mb-8
          "
        >

          {/* Left */}
          <div className="flex items-center gap-5">

            <button
              onClick={() =>
                navigate(-1)
              }
              className="
                w-14
                h-14
                bg-blue-100
                rounded-2xl
                flex
                items-center
                justify-center
              "
            >
              <ArrowLeft
                className="text-blue-600"
              />
            </button>

            <div>

              <h1
                className="
                  text-5xl
                  font-extrabold
                  text-gray-800
                "
              >
                Product Management
              </h1>

              <p className="text-gray-500 mt-2 text-lg">
                Shopkart
              </p>

            </div>

          </div>

          {/* Right */}
          <Link
            to="/products"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-4
              rounded-2xl
              flex
              items-center
              gap-3
              text-lg
              font-bold
            "
          >

            <ShoppingCart size={24} />

            Products :
            {products.length}

          </Link>

        </div>

        {/* DASHBOARD CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Products */}
          <div
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
            "
          >

            <div
              className="
                w-16
                h-16
                bg-blue-100
                rounded-2xl
                flex
                items-center
                justify-center
              "
            >

              <Package
                className="
                  text-blue-600
                "
                size={32}
              />

            </div>

            <h2
              className="
                text-5xl
                font-extrabold
                mt-8
                text-gray-800
              "
            >
              {products.length}
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Total Products
            </p>

          </div>

          {/* Revenue */}
          <div
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
            "
          >

            <div
              className="
                w-16
                h-16
                bg-green-100
                rounded-2xl
                flex
                items-center
                justify-center
              "
            >

              <IndianRupee
                className="
                  text-green-600
                "
                size={32}
              />

            </div>

            <h2
              className="
                text-5xl
                font-extrabold
                mt-8
                text-gray-800
              "
            >
              ₹2L
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Revenue
            </p>

          </div>

          {/* Categories */}
          <div
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
            "
          >

            <div
              className="
                w-16
                h-16
                bg-pink-100
                rounded-2xl
                flex
                items-center
                justify-center
              "
            >

              <Layers3
                className="
                  text-pink-600
                "
                size={32}
              />

            </div>

            <h2
              className="
                text-5xl
                font-extrabold
                mt-8
                text-gray-800
              "
            >
              15
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Categories
            </p>

          </div>

        </div>

        {/* ADD PRODUCT */}
        <div
          className="
            bg-white
            rounded-3xl
            shadow-lg
            p-8
            mb-8
          "
        >

          <h2
            className="
              text-3xl
              font-extrabold
              text-gray-800
              mb-8
            "
          >
            Add New Product
          </h2>

          <div className="grid md:grid-cols-4 gap-5">

            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              className="
                bg-[#f1f3f6]
                p-5
                rounded-2xl
                outline-none
              "
            />

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
              className="
                bg-[#f1f3f6]
                p-5
                rounded-2xl
                outline-none
              "
            />

            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) =>
                setPrice(
                  e.target.value
                )
              }
              className="
                bg-[#f1f3f6]
                p-5
                rounded-2xl
                outline-none
              "
            />

            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) =>
                setImage(
                  e.target.value
                )
              }
              className="
                bg-[#f1f3f6]
                p-5
                rounded-2xl
                outline-none
              "
            />

          </div>

          <button
            onClick={addProduct}
            className="
              mt-8
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-4
              rounded-2xl
              text-lg
              font-bold
              flex
              items-center
              gap-3
            "
          >

            <Plus size={24} />

            Add Product

          </button>

        </div>

        {/* SEARCH */}
        <div
          className="
            bg-white
            rounded-3xl
            shadow-lg
            p-5
            flex
            items-center
            gap-4
            mb-8
          "
        >

          <Search
            className="
              text-gray-500
            "
            size={24}
          />

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
              bg-transparent
              outline-none
              w-full
              text-xl
            "
          />

        </div>

        {/* TABLE */}
        <div
          className="
            bg-white
            rounded-3xl
            shadow-lg
            overflow-hidden
          "
        >

          <table className="w-full">

            {/* HEAD */}
            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="p-6 text-left">
                  Product
                </th>

                <th className="p-6 text-left">
                  Category
                </th>

                <th className="p-6 text-left">
                  Price
                </th>

                <th className="p-6 text-left">
                  Edit
                </th>

                <th className="p-6 text-left">
                  Remove
                </th>

              </tr>

            </thead>

            {/* BODY */}
            <tbody>

              {filteredProducts.map((product) => (

                <tr
                  key={product.id}
                  className="
                    border-b
                    hover:bg-[#f8fafc]
                  "
                >

                  {/* PRODUCT */}
                  <td className="p-6">

                    <div className="flex items-center gap-5">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                          w-20
                          h-20
                          rounded-2xl
                          object-cover
                        "
                      />

                      <div>

                        {editId ===
                        product.id ? (

                          <input
                            value={editName}
                            onChange={(e) =>
                              setEditName(
                                e.target
                                  .value
                              )
                            }
                            className="
                              bg-[#f1f3f6]
                              p-3
                              rounded-xl
                              outline-none
                            "
                          />

                        ) : (

                          <h2
                            className="
                              text-xl
                              font-bold
                              text-gray-800
                            "
                          >
                            {product.name}
                          </h2>

                        )}

                      </div>

                    </div>

                  </td>

                  {/* CATEGORY */}
                  <td className="p-6">

                    {editId ===
                    product.id ? (

                      <input
                        value={
                          editCategory
                        }
                        onChange={(e) =>
                          setEditCategory(
                            e.target
                              .value
                          )
                        }
                        className="
                          bg-[#f1f3f6]
                          p-3
                          rounded-xl
                          outline-none
                        "
                      />

                    ) : (

                      <span className="text-gray-600">
                        {product.category}
                      </span>

                    )}

                  </td>

                  {/* PRICE */}
                  <td className="p-6">

                    {editId ===
                    product.id ? (

                      <input
                        value={editPrice}
                        onChange={(e) =>
                          setEditPrice(
                            e.target
                              .value
                          )
                        }
                        className="
                          bg-[#f1f3f6]
                          p-3
                          rounded-xl
                          outline-none
                        "
                      />

                    ) : (

                      <span
                        className="
                          text-blue-600
                          font-bold
                          text-lg
                        "
                      >
                        {product.price}
                      </span>

                    )}

                  </td>

                  {/* EDIT */}
                  <td className="p-6">

                    {editId ===
                    product.id ? (

                      <button
                        onClick={() =>
                          saveEdit(
                            product.id
                          )
                        }
                        className="
                          bg-green-500
                          hover:bg-green-600
                          text-white
                          px-5
                          py-3
                          rounded-xl
                          flex
                          items-center
                          gap-2
                        "
                      >

                        <Save size={18} />

                        Save

                      </button>

                    ) : (

                      <button
                        onClick={() =>
                          startEdit(
                            product
                          )
                        }
                        className="
                          bg-yellow-400
                          hover:bg-yellow-500
                          text-black
                          px-5
                          py-3
                          rounded-xl
                          flex
                          items-center
                          gap-2
                          font-bold
                        "
                      >

                        <Pencil size={18} />

                        Edit

                      </button>

                    )}

                  </td>

                  {/* REMOVE */}
                  <td className="p-6">

                    <button
                      onClick={() =>
                        removeProduct(
                          product.id
                        )
                      }
                      className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-5
                        py-3
                        rounded-xl
                        flex
                        items-center
                        gap-2
                        font-bold
                      "
                    >

                      <Trash2 size={18} />

                      Remove

                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
};

export default AddProducts;