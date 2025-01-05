import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { Popover } from "antd";
import { HiOutlineRefresh } from "react-icons/hi";
import { LuEye } from "react-icons/lu";
import Notification from "../Notification/Notification";
import { FaHeart } from "react-icons/fa";
import { getProducts } from "../../../services/productService";

const SingleCard: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="row">
      {products && products.map((item) => (
        <div key={item._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="single-card p-3 rounded-2">
            <div className="images border-bottom">
              <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="swiper-container"
              >
                {item.images.map((image: string, index: number) => (
                  <SwiperSlide key={index} className="slide">
                    <Link to="#">
                      <img width={220} src={image} alt={item.title} />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="content d-flex align-items-center justify-content-center rounded-2 gap-3">
              <Popover content="Add to Wishlist">
                <button className="bg-transparent border-0">
                  <FaHeart />
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
              <p className="fw-bold">{item.name}</p>
            </div>
            <div className="price mt-2 fw-bold">
              <span className="new-price">${item.price}</span>
            </div>
            <div className="color d-flex gap-1 mt-2">
              {item.color.map((color: { name: string }, index: number) => (
                <button
                  key={index}
                  className="rounded-circle p-2 border-0"
                  style={{
                    backgroundColor: color.name,
                    width: "8px",
                    height: "8px",
                  }}
                ></button>
              ))}
            </div>
            <div className="description mt-3">
              <p>
                ✓{" "}
                <span className="text-uppercase text-dark">
                  5 Years Guarantee
                </span>
              </p>
              <p>
                ✓{" "}
                <span className="text-uppercase text-dark">
                  free shipping returns
                </span>
              </p>
              <p>
                ✓{" "}
                <span className="text-uppercase text-dark">
                  Installment up to 9 months
                </span>
              </p>
            </div>
            <div className="add-btn mt-3">
              <button className="text-light rounded-1 border-0">
                <span>Add to cart</span>
                <MdOutlineShoppingBag className="icon text-center w-100" />
              </button>
              <Notification />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCard;
