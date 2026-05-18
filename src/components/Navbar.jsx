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
  Search,
  Shield,
} from "lucide-react";

const Navbar = () => {

  const navigate =
    useNavigate();

  // Search
  const [search, setSearch] =
    useState("");

  // Cart
  const [cart, setCart] =
    useState([]);

  // Load Cart
  useEffect(() => {

    const loadCart = () => {

      const savedCart =
        JSON.parse(
          localStorage.getItem(
            "cart"
          )
        ) || [];

      setCart(savedCart);
    };

    // First Load
    loadCart();

    // Realtime Update
    const handleStorage = () => {

      loadCart();
    };

    // Multi Tab
    window.addEventListener(
      "storage",
      handleStorage
    );

    // Same Tab
    window.addEventListener(
      "cartUpdated",
      handleStorage
    );

    return () => {

      window.removeEventListener(
        "storage",
        handleStorage
      );

      window.removeEventListener(
        "cartUpdated",
        handleStorage
      );
    };

  }, []);

  // Search Product
  const handleSearch = (
    e
  ) => {

    if (
      e.key === "Enter"
    ) {

      navigate(
        `/products?search=${search}`
      );
    }
  };

  return (
    <nav
      className="
        bg-[#020617]
        text-white
        px-8
        py-5
        flex
        items-center
        justify-between
        border-b
        border-white/10
      "
    >

      {/* Logo */}
      <Link
        to="/"
        className="
          text-3xl
          font-extrabold
          text-cyan-400
        "
      >
        E-Commerce
      </Link>

      {/* Search */}
      <div
        className="
          flex
          items-center
          bg-[#111827]
          px-4
          py-3
          rounded-2xl
          w-[400px]
          gap-3
        "
      >

        <Search size={20} />

        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          onKeyDown={handleSearch}
          className="
            bg-transparent
            outline-none
            w-full
          "
        />

      </div>

      {/* Links */}
      <div className="flex items-center gap-8">

        <Link
          to="/"
          className="hover:text-cyan-400"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="hover:text-cyan-400"
        >
          Products
        </Link>

        <Link
          to="/categories"
          className="hover:text-cyan-400"
        >
          Categories
        </Link>

        {/* Admin */}
        <Link
          to="/dashboard"
          className="
            flex
            items-center
            gap-2
            hover:text-cyan-400
          "
        >

          <Shield size={20} />

          Admin

        </Link>

        {/* Cart */}
        <button
          onClick={() =>
            navigate("/cart")
          }
          className="
            relative
            bg-cyan-500
            text-black
            p-3
            rounded-full
          "
        >

          <ShoppingCart size={24} />

          {/* Cart Count */}
          {cart.length > 0 && (

            <span
              className="
                absolute
                -top-2
                -right-2
                bg-red-500
                text-white
                w-6
                h-6
                rounded-full
                flex
                items-center
                justify-center
                text-sm
                font-bold
              "
            >
              {cart.length}
            </span>
          )}

        </button>

      </div>

    </nav>
  );
};

export default Navbar;