import axios from "axios";

const BASE_URL = 'http://localhost:5001/products';
const token = localStorage.getItem('token');

export const addProduct = async (productData: {
    name: string,
    price: number,
    description: string,
    category: string,
    brand: string,
    color: string,
    storage: string,
    size: string,
    connectivity: string
}) => {
    try {
        const response = await axios.post(BASE_URL, productData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response.data
    } catch (error) {
        console.error('Failed to add product', error);
    }
}

export const getProducts = async () => {
    try {
        const response = await axios.get(BASE_URL,
            { headers: { Authorization: `Bearer ${token}` } }
        )
        return response.data
    } catch (error) {
        console.error('Failed to fetch brands', error);
    }
}