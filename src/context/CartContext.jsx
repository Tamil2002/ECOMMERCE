import React, {
  createContext,
  useState,
} from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  // Cart Items State
  const [cartItems, setCartItems] = useState([]);

  // Add To Cart
  const addToCart = (product) => {

    // Product already exists check
    const existingProduct = cartItems.find(
      (item) => item.id === product.id
    );

    // If already exists -> increase quantity
    if (existingProduct) {

      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCartItems(updatedCart);

    } else {

      // New Product Add
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // Remove From Cart
  const removeFromCart = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };

  // Increase Quantity
  const increaseQty = (id) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCartItems(updatedCart);
  };

  // Decrease Quantity
  const decreaseQty = (id) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    );

    setCartItems(updatedCart);
  };

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      parseInt(item.price.replace("$", "")) *
        item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;