import { createContext, useContext, useState } from "react";

// Нейрокод, пока не изучали контекст, но без него здесь прям плохо

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (qty) => {
    setCartCount((prevState) => prevState + qty);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
