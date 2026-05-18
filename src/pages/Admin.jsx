import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  LayoutDashboard,
  Plus,
  Package,
  Users,
  CreditCard,
  Ticket,
  Star,
  Settings,
  LogOut,
  IndianRupee,
  ShoppingBag,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";

const Admin = () => {

  const navigate =
    useNavigate();

  // Products
  const [products, setProducts] =
    useState([]);

  // ADMIN AUTH CHECK
  useEffect(() => {

    const isAdmin =
      localStorage.getItem(
        "adminAuth"
      );

    // Not Login
    if (!isAdmin) {

      navigate(
        "/admin-login"
      );
    }

    // Load Products
    const savedProducts =
      JSON.parse(
        localStorage.getItem(
          "products"
        )
      ) || [];

    setProducts(
      savedProducts
    );

  }, []);

  // Logout
  const logout = () => {

    localStorage.removeItem(
      "adminAuth"
    );

    navigate(
      "/admin-login"
    );
  };

  return (
    <section
      className="
        h-screen
        bg-[#f1f3f6]
        flex
        overflow-hidden
      "
    >

      {/* SIDEBAR */}
      <div
        className="
          w-[300px]
          bg-white
          shadow-xl
          p-6
          border-r
          flex
          flex-col
          justify-between
          flex-shrink-0
          h-screen
          overflow-y-auto
        "
      >

        <div>

          {/* LOGO */}
          <div className="mb-10">

            <h1
              className="
                text-4xl
                font-extrabold
                text-blue-600
              "
            >
              Shopkart Admin
            </h1>

          </div>

          {/* MENU */}
          <div className="space-y-4">

            {/* Dashboard */}
            <button
              onClick={() =>
                navigate("/dashboard")
              }
              className="
                w-full
                flex
                items-center
                gap-4
                bg-blue-600
                text-white
                px-6
                py-5
                rounded-2xl
                text-lg
                font-bold
              "
            >

              <LayoutDashboard size={24} />

              Dashboard

            </button>

            {/* Add Products */}
            <button
              onClick={() =>
                navigate("/admin-products")
              }
              className="
                w-full
                flex
                items-center
                gap-4
                bg-green-500
                text-white
                px-6
                py-5
                rounded-2xl
                text-lg
                font-bold
              "
            >

              <Plus size={24} />

              Add Products

            </button>

            {/* Orders */}
            <button
              onClick={() =>
                navigate("/orders")
              }
              className="
                w-full
                flex
                items-center
                gap-4
                bg-gray-100
                hover:bg-gray-200
                px-6
                py-5
                rounded-2xl
                text-lg
                font-semibold
              "
            >

              <Package size={24} />

              Orders

            </button>

            {/* Users */}
            <button
              onClick={() =>
                navigate("/users")
              }
              className="
                w-full
                flex
                items-center
                gap-4
                bg-gray-100
                hover:bg-gray-200
                px-6
                py-5
                rounded-2xl
                text-lg
                font-semibold
              "
            >

              <Users size={24} />

              Users

            </button>

            {/* Payments */}
            <button
              onClick={() =>
                navigate("/payments")
              }
              className="
                w-full
                flex
                items-center
                gap-4
                bg-gray-100
                hover:bg-gray-200
                px-6
                py-5
                rounded-2xl
                text-lg
                font-semibold
              "
            >

              <CreditCard size={24} />

              Payments

            </button>

            {/* Coupons */}
            <button
              onClick={() =>
                navigate("/coupons")
              }
              className="
                w-full
                flex
                items-center
                gap-4
                bg-gray-100
                hover:bg-gray-200
                px-6
                py-5
                rounded-2xl
                text-lg
                font-semibold
              "
            >

              <Ticket size={24} />

              Coupons

            </button>

            {/* Reviews */}
            <button
              onClick={() =>
                navigate("/reviews")
              }
              className="
                w-full
                flex
                items-center
                gap-4
                bg-gray-100
                hover:bg-gray-200
                px-6
                py-5
                rounded-2xl
                text-lg
                font-semibold
              "
            >

              <Star size={24} />

              Reviews

            </button>

            {/* Settings */}
            <button
              onClick={() =>
                navigate("/settings")
              }
              className="
                w-full
                flex
                items-center
                gap-4
                bg-gray-100
                hover:bg-gray-200
                px-6
                py-5
                rounded-2xl
                text-lg
                font-semibold
              "
            >

              <Settings size={24} />

              Settings

            </button>

          </div>

        </div>

        {/* LOGOUT */}
        <button
          onClick={logout}
          className="
            w-full
            bg-red-500
            hover:bg-red-600
            text-white
            py-5
            rounded-2xl
            text-lg
            font-bold
            flex
            items-center
            justify-center
            gap-3
            mt-10
          "
        >

          <LogOut size={24} />

          Logout

        </button>

      </div>

      {/* RIGHT CONTENT */}
      <div
        className="
          flex-1
          p-10
          h-screen
          overflow-y-auto
        "
      >

        {/* TOP */}
        <div className="flex items-center gap-5">

          {/* BACK */}
          <button
            onClick={() =>
              navigate(-1)
            }
            className="
              w-16
              h-16
              rounded-2xl
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
              hover:bg-blue-50
            "
          >

            <ArrowLeft
              size={28}
              className="text-blue-600"
            />

          </button>

          {/* HEADING */}
          <div>

            <h1
              className="
                text-6xl
                font-extrabold
                text-gray-800
              "
            >
              Dashboard
            </h1>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">

          {/* Products */}
          <div
            className="
              bg-white
              shadow-lg
              rounded-3xl
              p-8
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-blue-100
                flex
                items-center
                justify-center
              "
            >

              <ShoppingBag
                size={32}
                className="text-blue-600"
              />

            </div>

            <h2
              className="
                text-5xl
                font-extrabold
                text-gray-800
                mt-8
              "
            >
              {products.length}
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Total Products
            </p>

          </div>

          {/* Orders */}
          <div
            className="
              bg-white
              shadow-lg
              rounded-3xl
              p-8
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-pink-100
                flex
                items-center
                justify-center
              "
            >

              <Package
                size={32}
                className="text-pink-600"
              />

            </div>

            <h2
              className="
                text-5xl
                font-extrabold
                text-gray-800
                mt-8
              "
            >
              120
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Orders
            </p>

          </div>

          {/* Revenue */}
          <div
            className="
              bg-white
              shadow-lg
              rounded-3xl
              p-8
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-green-100
                flex
                items-center
                justify-center
              "
            >

              <IndianRupee
                size={32}
                className="text-green-600"
              />

            </div>

            <h2
              className="
                text-5xl
                font-extrabold
                text-gray-800
                mt-8
              "
            >
              ₹5L
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Revenue
            </p>

          </div>

          {/* Growth */}
          <div
            className="
              bg-white
              shadow-lg
              rounded-3xl
              p-8
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-orange-100
                flex
                items-center
                justify-center
              "
            >

              <TrendingUp
                size={32}
                className="text-orange-600"
              />

            </div>

            <h2
              className="
                text-5xl
                font-extrabold
                text-gray-800
                mt-8
              "
            >
              +32%
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Growth
            </p>

          </div>

        </div>

        {/* RECENT PRODUCTS */}
        <div
          className="
            bg-white
            shadow-lg
            rounded-3xl
            p-8
            mt-14
          "
        >

          <div className="flex items-center justify-between">

            <h2
              className="
                text-3xl
                font-extrabold
                text-gray-800
              "
            >
              Recent Products
            </h2>

            <button
              onClick={() =>
                navigate("/admin-products")
              }
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-6
                py-3
                rounded-2xl
                font-bold
              "
            >
              View All
            </button>

          </div>

          {/* TABLE */}
          <div className="mt-10 overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-5 text-gray-500">
                    Product
                  </th>

                  <th className="text-left py-5 text-gray-500">
                    Category
                  </th>

                  <th className="text-left py-5 text-gray-500">
                    Price
                  </th>

                </tr>

              </thead>

              <tbody>

                {products
                  .slice(0, 5)
                  .map((product) => (

                    <tr
                      key={product.id}
                      className="border-b"
                    >

                      <td className="py-5">

                        <div className="flex items-center gap-4">

                          <img
                            src={product.image}
                            alt={product.name}
                            className="
                              w-16
                              h-16
                              rounded-2xl
                              object-cover
                            "
                          />

                          <h2
                            className="
                              font-bold
                              text-lg
                              text-gray-800
                            "
                          >
                            {product.name}
                          </h2>

                        </div>

                      </td>

                      <td className="py-5 text-gray-600">
                        {product.category}
                      </td>

                      <td
                        className="
                          py-5
                          font-bold
                          text-blue-600
                        "
                      >
                        {product.price}
                      </td>

                    </tr>
                  ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Admin;