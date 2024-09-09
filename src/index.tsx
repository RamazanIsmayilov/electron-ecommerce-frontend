import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/sass/main.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
import WishlistProvider from "./context/WishlistContext";
import { ConfirmationProvider } from "./context/ConfirmationContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <NotificationProvider>
            <ConfirmationProvider>
              <App />
            </ConfirmationProvider>
          </NotificationProvider>
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </>
);
