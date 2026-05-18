import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ProductContext =
  createContext();

export const ProductProvider = ({
  children,
}) => {

  const [products, setProducts] =
    useState(() => {

      const savedProducts =
        localStorage.getItem(
          "products"
        );

      return savedProducts
        ? JSON.parse(savedProducts)
        : [
            {
              id: 1,
              name: "iPhone 15",
              category: "Mobile",
              stock: 12,
              price: "₹89,999",
              image:
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
            },
            {
              id: 2,
              name: "Smart Watch",
              category: "Watch",
              stock: 8,
              price: "₹9,999",
              image:
                "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
            },
            {
              id: 3,
              name: "Gaming Mouse",
              category: "Accessories",
              stock: 20,
              price: "₹2,999",
              image:
                "https://images.unsplash.com/photo-1527814050087-3793815479db",
            },
            {
              id: 4,
              name: "Wireless Headphone",
              category: "Audio",
              stock: 15,
              price: "₹7,499",
              image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
            },
          ];
    });

  // Save Products
  useEffect(() => {

    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );

  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom Hook
export const useProducts = () => {

  return useContext(
    ProductContext
  );
};