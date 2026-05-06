import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoriesPage from "./pages/CategoriesPage";
import Cart from "./pages/Cart";
import Account from "./pages/Account";

const App = () => {

  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Products */}
        <Route
          path="/products"
          element={<Products />}
        />

        {/* Categories */}
        <Route
          path="/categories"
          element={<CategoriesPage />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Account />}
        />

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
};

export default App;