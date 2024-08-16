export interface Wishlist {
  id: number;
  image: string;
  title: string;
  price: number;
}

export interface WishlistContextType {
  wishlist: Wishlist[];
  addToWishlist: (item: Wishlist) => void;
  removeFromWishlist: (id: number) => void;
  removeAllWishlist: () => void
}


export const defaultWishlistValue: WishlistContextType = {
    wishlist: [],
    addToWishlist: () => {},
    removeFromWishlist: () => {},
    removeAllWishlist: () => {}
}