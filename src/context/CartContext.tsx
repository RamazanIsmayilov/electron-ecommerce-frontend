import React, { createContext, ReactNode, useState } from "react";
import { Cart, CartContextType } from "../types/cartType";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children}) => {
  const [cart, setCart] = useState<Cart[]>([]);

  const addToCart = (item: Cart) => {
    setCart((cart) => {
      const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex > -1) {
        const updateCart = [...cart];
        updateCart[itemIndex].quantity += item.quantity;
        return updateCart;
      } else {
        return [...cart, item];
      }
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((cart) => {
      const updateCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return updateCart;
    });
  };

  const decreaseQuantity = (id: number) => {
    setCart((cart) => {
      const updateCart = cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
      return updateCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((cart) => cart.filter((item) => item.id !== id));
  };

  const removeAllCart = () => {
    setCart([]);
  };

  const totalQuantity = (): number => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        totalQuantity,
        removeFromCart,
        removeAllCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
