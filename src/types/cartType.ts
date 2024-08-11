export interface Cart {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export interface CartContextType {
  cart: Cart[];
  addToCart: (item: Cart) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalQuantity: () => number;
  removeFromCart: (id: number) => void;
  removeAllCart: () => void;
}
