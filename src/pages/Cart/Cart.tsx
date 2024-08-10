import React, { useContext } from "react";
import { Table } from "antd";

import { CartContext } from "../../context/CartContext";
import { SlRefresh } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";

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
                    <tr key={item.id} className="border">
                      <td className="text-center">
                        <img width={80} src={item.image} alt={item.title} />
                      </td>
                      <td className="d-flex flex-column text-center">
                        <span className="title">{item.title}</span>
                        <span>${item.price}</span>
                      </td>
                      <td>
                        <div className="counter d-flex align-items-center gap-2 rounded">
                          <button>
                            <FaMinus />
                          </button>
                          <span>1</span>
                          <button>
                            <FaPlus />
                          </button>
                        </div>
                      </td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </table>
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
