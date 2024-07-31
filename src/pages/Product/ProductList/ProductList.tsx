import React, { useContext } from 'react';
import { menuItem } from '../../../data/category-menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ProductContext } from '../../../context/ProductContext';
import SingleCard from '../../../components/common/SingleCard/SingleCard';
import Spinner from '../../../components/common/Spinner/Spinner';
import { BestsellerFilter, BrandFilter, CategoryFilter, ColorFilter, ConnectivityFilter, NewFilter, PriceFilter, SaleFilter, SizeFilter, Sorting, TrendingFilter } from '../../../components/common/FilterComponent/FilterComponent';

const ProductList: React.FC = () => {
  const { products, loading } = useContext(ProductContext)

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
                <PriceFilter />
                <CategoryFilter />
                <BrandFilter />
                <ColorFilter />
                <ConnectivityFilter />
                <SizeFilter />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-9">
              <div className="right">
                <div className="filters d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center gap-3'>
                    <BestsellerFilter />
                    <TrendingFilter />
                    <SaleFilter />
                    <NewFilter />
                  </div>
                  <div><Sorting /></div>
                </div>
                <div className="row g-3 mt-2">
                  {loading ? <Spinner /> : products.map(item => (
                    <SingleCard key={item.id} product={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;