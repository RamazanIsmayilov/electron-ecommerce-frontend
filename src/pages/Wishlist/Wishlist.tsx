import React, { useContext } from "react";
import { BsTrash3 } from "react-icons/bs";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

const Cart: React.FC = () => {
  const { wishlist, removeFromWishlist, removeAllWishlist } =
    useContext(WishlistContext);

  const { addToCart, cart } = useContext(CartContext);

  const isInCart = (id: number) => {
    return cart.some((cartItem) => cartItem.id === id);
  };

  return (
    <div className="wishlist-page mt-5">
      <div className="containers">
        {wishlist.length === 0 ? (
          <div className="img d-flex justify-content-center">
            <img
              width={400}
              src="https://cdn.dribbble.com/users/1514097/screenshots/3550111/wishlist-icon.gif"
              alt="wishlist_image"
            />
          </div>
        ) : (
          <table className="table">
            {wishlist.map((item) => (
              <tr
                key={item.id}
                className="border-bottom border-top d-flex align-items-center justify-content-between px-3"
              >
                <td className="text-center">
                  <img width={80} src={item.image} alt={item.title} />
                </td>
                <td>
                  <span className="title fw-bold">{item.title}</span>
                </td>
                <td className="price fw-bold">${item.price.toFixed(2)}</td>
                <td>
                  <button className="add-btn"
                    onClick={() => addToCart({ ...item, quantity: 1 })}
                    disabled={isInCart(item.id)}
                    style={{opacity: isInCart(item.id) ? "0.5" : "1"}}
                  >
                    {isInCart(item.id) ? "Already in Cart" : "Add to Cart"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="bg-transparent border-0"
                  >
                    <BsTrash3 />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        )}
        {wishlist.length > 0 && (
          <button className="remove-all" onClick={removeAllWishlist}>
            Remove All Items
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
