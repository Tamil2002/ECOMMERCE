import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoriesPage from "./pages/CategoriesPage";

import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AddProducts from "./pages/AddProducts";

import Cart from "./pages/Cart";

// Admin Pages
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Payments from "./pages/Payments";
import Coupons from "./pages/Coupons";
import Reviews from "./pages/Reviews";
import Settings from "./pages/Settings";

const App = () => {

  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        {/* PRODUCTS */}
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Products />
              <Footer />
            </>
          }
        />

        {/* CATEGORIES */}
        <Route
          path="/categories"
          element={
            <>
              <Navbar />
              <CategoriesPage />
              <Footer />
            </>
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
              <Footer />
            </>
          }
        />

        {/* ADMIN LOGIN */}
        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={<Admin />}
        />

        {/* ADD PRODUCTS */}
        <Route
          path="/admin-products"
          element={<AddProducts />}
        />

        {/* ORDERS */}
        <Route
          path="/orders"
          element={<Orders />}
        />

        {/* USERS */}
        <Route
          path="/users"
          element={<Users />}
        />

        {/* PAYMENTS */}
        <Route
          path="/payments"
          element={<Payments />}
        />

        {/* COUPONS */}
        <Route
          path="/coupons"
          element={<Coupons />}
        />

        {/* REVIEWS */}
        <Route
          path="/reviews"
          element={<Reviews />}
        />

        {/* SETTINGS */}
        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;