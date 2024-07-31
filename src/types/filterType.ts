export interface Filter {
    bestseller: boolean;
    new: boolean;
    sale: boolean;
    trending: boolean;
    categories: string[];
    brands: string[];
    colors: string[];
    sizes: string[];
    connectivity: string[];
    price: string; 
}

export interface FilterContextType {
    filter: Filter;
    setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}