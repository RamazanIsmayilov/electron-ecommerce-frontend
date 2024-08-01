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
    const [loading, setLoading] = useState<boolean>(true);

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

    return (
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
    );
};
