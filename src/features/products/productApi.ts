import axios from 'axios';
import { Product } from './types';

const API_URL = 'http://127.0.0.1:5500/src/data/product.json';

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(API_URL);
    return response.data;
};
