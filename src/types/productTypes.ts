export interface Product {
    id: number;
    title: string;
    images: string[];
    newPrice: number;
    oldPrice?: number;
    description: string[];
    bestseller?: boolean;   
    trending?: boolean;
    new?: boolean;
    sale?: boolean;
    stock: number;
    sku: string;
    tag: string;
    categories: string | string[];
    brand: string | string[];
    colors?: string[];
    storages?: string | string[];
    sizes?: string | string[];
    connectivity?: string | string[];
}

export interface ProductContextType {
    products: Product[];
    loading: boolean;
}
