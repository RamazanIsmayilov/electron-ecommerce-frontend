import React, { createContext, useState, ReactNode } from 'react';
import { Filter, FilterContextType } from '../types/filterType';

const defaultFilter: Filter = {
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
};

export const FilterContext = createContext<FilterContextType>({
    filter: defaultFilter,
    setFilter: () => {}
});

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [filter, setFilter] = useState<Filter>(defaultFilter);

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};
