import axios from 'axios';

const BASE_URL = 'http://localhost:5001';
const token = localStorage.getItem('token');


export const searchCategories = async (query: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/categories/search`, {
            params: { query },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error while searching categories:', error);
    }
};
