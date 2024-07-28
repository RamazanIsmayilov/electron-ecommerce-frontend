import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Product } from '../../../features/products/types';

interface ProductProps {
    product: Product
}

const SingleCard: React.FC<ProductProps> = ({ product }) => {

    return (
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div className='single-card p-3 rounded-2'>
                <div className="badge">
                    <span className='text-uppercase'>
                        {product.bestseller && "bestseller"}
                        {product.new && "new"}
                        {product.trending && "trending"}
                        {product.sale && "sale"}
                    </span>
                </div>
                <div className="images">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className="swiper-container"
                    >
                        {product.images.map((item, index) => (
                            <SwiperSlide key={index} className="slide">
                                <Link to='/'>
                                    <img width={220} src={item} alt={product.title} /></Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="title mt-2">
                    <p className='fw-bold'>{product.title}</p>
                </div>
                <div className="price d-flex align-items-center gap-3 mt-2 fw-bold">
                    <span className={`old-price text-decoration-line-through ${product.oldPrice ? 'd-block' : 'd-none'}`}>${product.oldPrice}</span>
                    <span className='new-price'>${product.newPrice}</span>
                </div>
                <div className="stock mt-2">
                    <span className='text-uppercase fw-semibold'>In stock: {product.stock}</span>
                </div>
                <div className="description mt-3">
                    <p>✓ <span className='text-uppercase text-dark'>{product.description[0]}</span></p>
                    <p>✓ <span className='text-uppercase text-dark'>{product.description[1]}</span></p>
                    <p>✓ <span className='text-uppercase text-dark'>{product.description[2]}</span></p>
                </div>
                <div className="add-btn mt-3">
                    <button className='text-light rounded-1 border-0'>
                        <span>Add to cart</span>
                        <MdOutlineShoppingBag className='icon text-center w-100' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;
