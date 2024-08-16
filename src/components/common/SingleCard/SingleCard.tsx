import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { Product } from "../../../types/productTypes";
import { Popover } from "antd";
import { HiOutlineRefresh } from "react-icons/hi";
import { LuEye } from "react-icons/lu";
import slugify from "react-slugify";
import { CartContext } from "../../../context/CartContext";
import { NotificationContext } from "../../../context/NotificationContext";
import Notification from "../Notification/Notification";
import { WishlistContext } from "../../../context/WishlistContext";
import { FaHeart } from "react-icons/fa";

interface SingleCardProps {
  product: Product;
}

const SingleCard: React.FC<SingleCardProps> = ({ product }) => {
  const { successNotification } = useContext(NotificationContext);
  const { addToWishlist, isInWishlist } = useContext(WishlistContext);
  const { addToCart, isInCart } = useContext(CartContext);
  const [isItemInWishlist, setIsItemInWishlist] = useState<boolean>(false);
  const [isItemInCart, setIsItemInCart] = useState<boolean>(false);

  useEffect(() => {
    setIsItemInWishlist(isInWishlist(product.id));
  }, [product.id, isInWishlist]);

  useEffect(() => {
    setIsItemInCart(isInCart(product.id));
  }, [product.id, isInCart]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      image: product.images[0],
      title: product.title,
      price: product.newPrice,
      quantity: 1,
    })
    successNotification(`"${product.title}" added to your cart.`);
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      image: product.images[0],
      title: product.title,
      price: product.newPrice,
    });
    isItemInWishlist ? successNotification(`"${product.title}" removed to your wishlist.`) : successNotification(`"${product.title}" added to your wishlist.`);
  };

  return (
    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
      <div className="single-card p-3 rounded-2">
        <div className="badge">
          <span className="text-uppercase">
            {product.bestseller && "Bestseller"}
            {product.trending && "Trending"}
            {product.new && "New"}
            {product.sale && "Sale"}
          </span>
        </div>
        <div className="images border-bottom">
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="swiper-container"
          >
            {product.images.map((item, index) => (
              <SwiperSlide key={index} className="slide">
                <Link to={`/shop/${slugify(product.title)}`}>
                  <img width={220} src={item} alt={product.title} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="content d-flex align-items-center justify-content-center rounded-2 gap-3">
          <Popover content="Add to Wishlist">
            <button
              onClick={handleAddToWishlist}
              className="bg-transparent border-0"
            >
              <FaHeart style={{ fill: isItemInWishlist ? "red" : "black" }} />
            </button>
          </Popover>
          <Popover content="Compare">
            <button className="bg-transparent border-0">
              <HiOutlineRefresh />
            </button>
          </Popover>
          <Popover content="Quick View">
            <button className="bg-transparent border-0">
              <LuEye />
            </button>
          </Popover>
        </div>
        <div className="title">
          <p className="fw-bold">{product.title}</p>
        </div>
        <div className="price d-flex align-items-center gap-3 mt-2 fw-bold">
          <span
            className={`old-price text-decoration-line-through ${product.oldPrice ? "d-block" : "d-none"
              }`}
          >
            ${product.oldPrice}
          </span>
          <span className="new-price">${product.newPrice}</span>
        </div>
        <div className="stock mt-2">
          <span className="text-uppercase fw-semibold">
            In stock: {product.stock}
          </span>
        </div>
        <div className="description mt-3">
          <p>
            ✓{" "}
            <span className="text-uppercase text-dark">
              {product.description[0]}
            </span>
          </p>
          <p>
            ✓{" "}
            <span className="text-uppercase text-dark">
              {product.description[1]}
            </span>
          </p>
          <p>
            ✓{" "}
            <span className="text-uppercase text-dark">
              {product.description[2]}
            </span>
          </p>
        </div>
        <div className="add-btn mt-3">
          <button
            className="text-light rounded-1 border-0"
            style={{ backgroundColor: isItemInCart ? "#019267" : "#2252d1" }}
            onClick={handleAddToCart}
          >
            <span>Add to cart</span>
            <MdOutlineShoppingBag className="icon text-center w-100" />
          </button>
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
