import React from 'react';
import { menuItem } from '../../../data/category-menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import PriceFilter from '../../../components/common/Filters/PriceFilter/PriceFilter';
import CategoryFilter from '../../../components/common/Filters/CategoryFilter/CategoryFilter';
import BrandFilter from '../../../components/common/Filters/BrandFilter/BrandFilter';
import ColorFilter from '../../../components/common/Filters/ColorFilter/ColorFilter';
import ConnectivityFilter from '../../../components/common/Filters/ConnectivityFilter/ConnectivityFilter';
import SizeFilter from '../../../components/common/Filters/SizeFilter/SizeFilter';
import SingleCard from '../../../components/common/SingleCard/SingleCard';

const ProductList: React.FC = () => {
  return (
    <div className='product-list'>
      <div className="head text-center py-5">
        <h2 className='fw-bold'>All Products</h2>
        <div className="container mt-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={9}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            breakpoints={{
              360: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
              998: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 7,
              },
              1200: {
                slidesPerView: 9,
              }
            }}
          >
            {menuItem.map(item => (
              <SwiperSlide key={item.id}>
                <button className='rounded-3 p-2'>
                  <img src={item.image} alt={item.title} />
                  <span>{item.title}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="products mt-5">
        <div className="containers">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-3">
              <div className="left rounded-2">
                <div className="price-filter p-4">
                  <PriceFilter />
                </div>
                <div className="category-filter p-4">
                  <CategoryFilter />
                </div>
                <div className="brand-filter p-4">
                  <BrandFilter />
                </div>
                <div className="color-filter p-4">
                  <ColorFilter />
                </div>
                <div className="connectivity-filter p-4">
                  <ConnectivityFilter />
                </div>,
                <div className="size-filter p-4">
                  <SizeFilter />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-9">
              <div className="right">
                <SingleCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
