import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className='home mt-4'>
      <div className="containers">
        {/* <div className="hero">
          <div className="row g-3">
            <div className="col-12 col-sm-6 col-md-3 col-lg-3">
              <div className="left">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><img height={550} style={{ width: "100%" }} className='rounded-3' src="https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/1-50.png" alt="Slide 1" /></SwiperSlide>
                  <SwiperSlide><img height={550} style={{ width: "100%" }} className='rounded-3' src="https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/7-3.png" alt="Slide 2" /></SwiperSlide>
                  <SwiperSlide><img height={550} style={{ width: "100%" }} className='rounded-3' src="https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/3-44.png" alt="Slide 2" /></SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3">
              <div className="center">
                <div className="card">
                  <h6>Product of The Day</h6>
                  <p>Special price only valid today!</p>
                  <p>Galaxy A54 5G 128GB</p>
                  <span>$ 1,150.99</span>
                  <div className="stock">
                    <span>In stock: 43</span>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="right">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="slide first d-flex align-items-center px-5 rounded-3">
                      <div>
                        <div className="from bg-danger px-4 py-2 rounded-3 d-inline-block">
                          <p className='text-uppercase text-light'>From $320</p>
                        </div>
                        <h3 className='text-uppercase fw-bold fs-2 mt-3'>Harman Cardon Sl2300</h3>
                        <p className='w-75 lh-lg mt-4'>Headphones are a type of audio equipment that are worn on or over the ears to listen to music, podcasts, audiobooks, and other forms of audio content privately.</p>
                        <div className="buttons d-flex gap-3 mt-5">
                          <Link to='/shop'>Buy Sl300</Link>
                          <Link to='/shop'>All Products</Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide second d-flex align-items-center px-5 rounded-3">
                      <div>
                        <div className="from bg-danger px-4 py-2 rounded-3 d-inline-block">
                          <p className='text-uppercase text-light'>From $320</p>
                        </div>
                        <h3 className='text-uppercase text-light fw-bold lh-sm fs-2 mt-3'>Samsung smart new <br /> headphone sm900</h3>
                        <p className='w-75 text-light lh-lg mt-4'>Headphones are a type of audio equipment that are worn on or over the ears to listen to music, podcasts, audiobooks, and other forms of audio content privately.</p>
                        <div className="buttons d-flex gap-3 mt-5">
                          <Link to='/shop'>Buy Sl300</Link>
                          <Link to='/shop'>All Products</Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Home