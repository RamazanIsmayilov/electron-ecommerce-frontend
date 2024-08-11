import React, { useContext } from "react";
import { Table } from "antd";

import { CartContext } from "../../context/CartContext";
import { SlRefresh } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Cart context is not available.</div>;
  }

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    removeAllCart,
  } = cartContext;
  return (
    <div className="cart-page mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <div className="left">
              {cart.length === 0 ? (
                <div className="img d-flex justify-content-center">
                  <img
                    width={400}
                    src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif"
                    alt="cart_image"
                  />
                </div>
              ) : (
                <table className="table">
                  {cart.map((item) => (
                    <tr
                      key={item.id}
                      className="border-bottom border-top d-flex align-items-center justify-content-between px-3"
                    >
                      <td className="text-center">
                        <img width={80} src={item.image} alt={item.title} />
                      </td>
                      <td className="d-flex flex-column">
                        <span className="title fw-bold">{item.title}</span>
                        <span className="price fw-bold">
                          ${item.price} x {item.quantity}
                        </span>
                      </td>
                      <td>
                        <div className="counter d-flex align-items-center gap-2">
                          <button onClick={() => decreaseQuantity(item.id)}>
                            <FaMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => increaseQuantity(item.id)}>
                            <FaPlus />
                          </button>
                        </div>
                      </td>
                      <td className="price fw-bold">${`${item.price * item.quantity}`}</td>
                      <td>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-transparent border-0"
                        >
                          <BsTrash3 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              )}
              {cart.length > 0 && (
                <button className="remove-all" onClick={removeAllCart}>Remove All Items</button>
              )}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
