export interface Cart {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartContextType {
  cart: Cart[];
  addToCart: (item: Cart) => void;
  increaseQuantity: (id: number) => void;
//   decreaseQuantity: (id: number) => void;
//   removeFromCart: (id: number) => void;
}
