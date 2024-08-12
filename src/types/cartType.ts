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
  totalPrice: () => number;
  removeFromCart: (id: number) => void;
  removeAllCart: () => void;
}

export const defaultCartValue: CartContextType = {
  cart: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  totalQuantity: () => 0,
  totalPrice:() => 0,
  removeFromCart: () => {},
  removeAllCart: () => {},
}