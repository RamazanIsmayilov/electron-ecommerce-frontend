import React, { createContext, ReactNode, useEffect, useState, useContext } from 'react';
import { Product, ProductContextType } from '../types/productTypes';
import { getProducts } from '../api/productApi';
import { FilterContext } from './FilterContext'; // FilterContext'i içe aktarın

export const ProductContext = createContext<ProductContextType>({
    products: [],
    loading: true
});

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { filter } = useContext(FilterContext); // FilterContext'ten filtreleri alın

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                throw new Error('Something went wrong');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const applyFilters = () => {
            let filtered = products;

            if (filter.categories.length > 0) {
                filtered = filtered.filter(product =>
                    (Array.isArray(product.categories) ? product.categories : [product.categories]).some(c => filter.categories.includes(c))
                );
            }

            if (filter.brands.length > 0) {
                filtered = filtered.filter(product =>
                    (Array.isArray(product.brand) ? product.brand : [product.brand]).some(b => filter.brands.includes(b))
                );
            }

            if (filter.colors.length > 0) {
                filtered = filtered.filter(product =>
                    product.colors && product.colors.some(c => filter.colors.includes(c))
                );
            }

            if (filter.connectivity.length > 0) {
                filtered = filtered.filter(product => {
                    const connectivity = Array.isArray(product.connectivity) ? product.connectivity : [product.connectivity || ''];
                    return connectivity.some(c => filter.connectivity.includes(c));
                });
            }

            if (filter.sizes.length > 0) {
                filtered = filtered.filter(product => {
                    const sizes = Array.isArray(product.sizes) ? product.sizes : [product.sizes || ''];
                    return sizes.some(s => filter.sizes.includes(s));
                });
            }

            if (filter.price) {
                const [minPrice, maxPrice] = filter.price.split('-').map(Number);
                filtered = filtered.filter(product =>
                    product.newPrice >= minPrice && product.newPrice <= maxPrice
                );
            }

            if (filter.bestseller) {
                filtered = filtered.filter(product => product.bestseller);
            }

            if (filter.new) {
                filtered = filtered.filter(product => product.new);
            }

            if (filter.sale) {
                filtered = filtered.filter(product => product.sale);
            }

            if (filter.trending) {
                filtered = filtered.filter(product => product.trending);
            }

            setFilteredProducts(filtered);
        };

        applyFilters();
    }, [filter, products]);

    return (
        <ProductContext.Provider value={{ products: filteredProducts, loading }}>
            {children}
        </ProductContext.Provider>
    );
};
