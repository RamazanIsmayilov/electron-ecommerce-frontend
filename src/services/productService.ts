import axios from "axios";

const BASE_URL = 'http://localhost:5001/products';
const token = localStorage.getItem('token');

// Məhsulu əlavə etmək üçün funksiya
export const addProduct = async (formData: FormData) => {
    try {
        const response = await axios.post(BASE_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add product', error);
        throw error;
    }
};

// Məhsulları əldə etmək üçün funksiya
export const getProducts = async () => {
    try {
        const response = await axios.get(BASE_URL, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch products', error);
        throw error; 
    }
};
