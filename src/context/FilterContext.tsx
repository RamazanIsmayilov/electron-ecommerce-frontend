import React, { createContext, useState, ReactNode } from 'react';
import { Filter, FilterContextType } from '../types/filterType';

export const FilterContext = createContext<FilterContextType>({
    filter: {
        bestseller: false,
        new: false,
        sale: false,
        trending: false,
        categories: [],
        brands: [],
        colors: [],
        sizes: [],
        connectivity: [],
        price: ''
    },
    setFilter: () => {}
});

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [filter, setFilter] = useState<Filter>({
        bestseller: false,
        new: false,
        sale: false,
        trending: false,
        categories: [],
        brands: [],
        colors: [],
        sizes: [],
        connectivity: [],
        price: ''
    });

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};
