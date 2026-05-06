import React, { useState } from "react";

import {
  Search,
  ShoppingCart,
  Menu,
  X,
  User,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

const Navbar = () => {

  const [openMenu, setOpenMenu] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const navigate = useNavigate();

  // Search Product
  const handleSearch = (e) => {

    if (e.key === "Enter") {

      navigate(
        `/products?search=${search}`
      );
    }
  };

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-gradient-to-r
        from-indigo-600
        via-purple-600
        to-pink-500
        shadow-lg
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          py-4
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}
        <Link to="/">

          <h1
            className="
              text-3xl
              sm:text-5xl
              font-extrabold
              text-white
              tracking-wide
            "
          >
            ShopKart
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul
          className="
            hidden
            lg:flex
            items-center
            gap-10
            text-white
            font-semibold
            text-lg
          "
        >

          <Link to="/">
            <li className="hover:text-cyan-200">
              Home
            </li>
          </Link>

          <Link to="/categories">
            <li className="hover:text-cyan-200">
              Categories
            </li>
          </Link>

          <Link to="/products">
            <li className="hover:text-cyan-200">
              Products
            </li>
          </Link>
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* Search */}
          <div
            className="
              hidden
              md:flex
              items-center
              bg-white/20
              px-4
              py-2
              rounded-full
              backdrop-blur-xl
              w-60
            "
          >

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              onKeyDown={handleSearch}
              className="
                bg-transparent
                outline-none
                text-white
                placeholder:text-white/70
                w-full
                text-sm
              "
            />

            <Search
              size={18}
              className="text-white"
            />
          </div>

          {/* Account */}
          <Link to="/login">

            <button
              className="
                text-white
                hover:text-cyan-200
                transition-all
              "
            >
              <User
                size={24}
                className="sm:w-7 sm:h-7"
              />
            </button>
          </Link>

          {/* Cart */}
          <Link to="/cart">

            <button
              className="
                text-white
                hover:text-cyan-200
                transition-all
              "
            >
              <ShoppingCart
                size={24}
                className="sm:w-7 sm:h-7"
              />
            </button>
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() =>
              setOpenMenu(!openMenu)
            }
            className="
              lg:hidden
              text-white
            "
          >

            {openMenu ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (

        <div
          className="
            lg:hidden
            bg-[#111827]
            text-white
            px-6
            py-6
            space-y-5
            text-lg
            font-semibold
          "
        >

          {/* Mobile Search */}
          <div
            className="
              flex
              items-center
              bg-white/10
              px-4
              py-3
              rounded-2xl
            "
          >

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              onKeyDown={handleSearch}
              className="
                bg-transparent
                outline-none
                text-white
                placeholder:text-gray-300
                flex-1
              "
            />

            <Search size={18} />
          </div>

          <Link
            to="/"
            onClick={() =>
              setOpenMenu(false)
            }
          >
            <p className="hover:text-cyan-400">
              Home
            </p>
          </Link>

          <Link
            to="/categories"
            onClick={() =>
              setOpenMenu(false)
            }
          >
            <p className="hover:text-cyan-400">
              Categories
            </p>
          </Link>

          <Link
            to="/products"
            onClick={() =>
              setOpenMenu(false)
            }
          >
            <p className="hover:text-cyan-400">
              Products
            </p>
          </Link>

          <Link
            to="/login"
            onClick={() =>
              setOpenMenu(false)
            }
          >
            <p className="hover:text-cyan-400">
              Account
            </p>
          </Link>

          <Link
            to="/cart"
            onClick={() =>
              setOpenMenu(false)
            }
          >
            <p className="hover:text-cyan-400">
              Cart
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;