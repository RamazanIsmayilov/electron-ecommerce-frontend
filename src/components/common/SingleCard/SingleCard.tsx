    import React from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Pagination } from 'swiper/modules';

    const SingleCard: React.FC = () => {
        const images = [
            { src: 'https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/product1-17-300x225.png', alt: 'First Slide' },
            { src: 'https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/product2-12-300x225.png', alt: 'Second Slide' },
            { src: 'https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/product3-13-300x225.png', alt: 'Third Slide' },
            { src: 'https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/product4-10-300x225.png', alt: 'Fourth Slide' },
        ];

        return (
            <div className='single-card p-3 rounded-2 w-25'>
                <div className="badge">
                    <span className='text-uppercase'>New</span>
                </div>
                <div className="images">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className="swiper-container"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} className="slide">
                                <img width={220} src={img.src} alt={img.alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="title mt-2">
                    <p className='fw-bold'>13-inch MacBook Air</p>
                </div>
            </div>
        );
    };

    export default SingleCard;
