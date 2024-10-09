import React, { useEffect, useState } from 'react';
import { menuItem } from '../../../data/category-menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Checkbox, Slider } from 'antd';
import { getCategories } from '../../../services/categoryService';
import { getBrands } from '../../../services/brandService';
import { getColors } from '../../../services/colorService';
import { getConnectivities } from '../../../services/connectivityService';
import { getSizes } from '../../../services/sizeService';
import { getStorages } from '../../../services/storageService';
import { getProducts } from '../../../services/productService';
import SingleCard from '../../../components/common/SingleCard/SingleCard';

const ProductList: React.FC = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [brands, setBrands] = useState<string[]>([])
    const [colors, setColors] = useState<string[]>([])
    const [connectivity, setConnectivity] = useState<string[]>([])
    const [size, setSize] = useState<string[]>([])
    const [storage, setStorage] = useState<string[]>([])

    const fetchData = async () => {
        try {
            const [categoriesData, brandsData, colorsData, connectivityData, sizesData, storageData] = await Promise.all([
                getCategories(),
                getBrands(),
                getColors(),
                getConnectivities(),
                getSizes(),
                getStorages(),
                getProducts()
            ]);

            setCategories(categoriesData);
            setBrands(brandsData);
            setColors(colorsData);
            setConnectivity(connectivityData);
            setSize(sizesData);
            setStorage(storageData);
        } catch (error) {
            console.log('Failed to fetch data', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <div className='product-list'>
            <div className="head text-center py-5">
                <h2 className='fw-bold'>All Products</h2>
                <div className="container mt-4">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={9}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        loop={true}
                        breakpoints={{
                            360: { slidesPerView: 2 },
                            480: { slidesPerView: 3 },
                            768: { slidesPerView: 5 },
                            998: { slidesPerView: 6 },
                            1024: { slidesPerView: 7 },
                            1200: { slidesPerView: 9 }
                        }}
                    >
                        {menuItem.map(item => (
                            <SwiperSlide key={item.id}>
                                <button
                                    className='rounded-3 p-2'
                                >
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
                                <div className="price-filter px-4 py-3">
                                    <h6 className='fw-bold'>Filter by price</h6>
                                    <Slider className='mt-4' range defaultValue={[20, 50]} />
                                    <span className='d-flex justify-content-end fw-bold mt-4'>Price: $10 - $1400</span>
                                </div>
                                <div className="category-filter px-4 py-3">
                                    <h6 className='fw-bold mb-3'>Product Categories</h6>
                                    {categories && categories.map((item: any) => (
                                        <div className='d-flex align-items-center gap-2 mt-2' key={item._id}>
                                            <Checkbox />
                                            <span>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="brand-filter px-4 py-3">
                                    <h6 className='fw-bold mb-3'>Product Brands</h6>
                                    {brands && brands.map((item: any) => (
                                        <div className='d-flex align-items-center gap-2 mt-2' key={item._id}>
                                            <Checkbox />
                                            <span>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="color-filter px-4 py-3">
                                    <h6 className='fw-bold mb-3'>Filter by Color</h6>
                                    {colors && colors.map((item: any) => (
                                        <div className='d-flex align-items-center gap-2 mt-2' key={item._id}>
                                            <button style={{ backgroundColor: `${item.name}`, width: "15px", height: "15px" }} className='p-2 border-0 rounded'></button>
                                            <span>{capitalize(item.name)}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="connectivity-filter px-4 py-3">
                                    <h6 className='fw-bold mb-3'>Filter by Connectivity</h6>
                                    {connectivity && connectivity.map((item: any) => (
                                        <div className='d-flex align-items-center gap-2 mt-2' key={item._id}>
                                            <Checkbox />
                                            <span>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="size-filter px-4 py-3">
                                    <h6 className='fw-bold mb-3'>Filter by Size</h6>
                                    {size && size.map((item: any) => (
                                        <div className='d-flex align-items-center gap-2 mt-2' key={item._id}>
                                            <Checkbox />
                                            <span>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="storage-filter px-4 py-3">
                                    <h6 className='fw-bold mb-3'>Filter by Storage</h6>
                                    {storage && storage.map((item: any) => (
                                        <div className='d-flex align-items-center gap-2 mt-2' key={item._id}>
                                            <Checkbox />
                                            <span>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                            <div className="right">
                                <div className="filters d-flex align-items-center justify-content-between">
                                </div>
                                <div className="products">
                                    <SingleCard />
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