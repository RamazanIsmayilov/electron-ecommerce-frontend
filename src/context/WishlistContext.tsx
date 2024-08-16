import React, { createContext, ReactNode, useEffect, useState } from "react";
import {
  defaultWishlistValue,
  Wishlist,
  WishlistContextType,
} from "../types/wishlistType";

export const WishlistContext = createContext<WishlistContextType>(defaultWishlistValue);

const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Wishlist[]>(() =>
    JSON.parse(localStorage.getItem("wishlist") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item: Wishlist) => {
    setWishlist((prevWishlist) => {
      const addedWishlist = prevWishlist.some(
        (wishlistItem) => wishlistItem.id === item.id
      );

      if (addedWishlist) {
        return prevWishlist.filter(
          (wishlistItem) => wishlistItem.id !== item.id
        );
      } else {
        return [...prevWishlist, item];
      }
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  const removeAllWishlist = () => {
    setWishlist([]);
  };

  const isInWishlist = (id: number) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        removeAllWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
