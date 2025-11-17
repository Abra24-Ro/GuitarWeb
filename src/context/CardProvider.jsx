import React, { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === product.id);

      if (itemIndex >= 0) {
        return prevCart.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
