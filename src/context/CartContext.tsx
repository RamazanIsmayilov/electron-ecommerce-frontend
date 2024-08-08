import React, { createContext, ReactNode, useState } from "react";
import { Cart, CartContextType } from "../types/cartType";

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  const addToCart = (item: Cart) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (itemIndex > -1) {
        const updateCart = [...prevCart];
        updateCart[itemIndex].quantity += item.quantity;
        return updateCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prevCart) => {
      const updateCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return updateCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
