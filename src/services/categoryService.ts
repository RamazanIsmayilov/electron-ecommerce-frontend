import axios from "axios"

const BASE_URL = 'http://localhost:5001/categories'

export const addCategory = async (categoryName: string) => {
    try {
        const response = await axios.post(BASE_URL, { name: categoryName })
        return response.data
    } catch (error) {
        throw new Error('Failed to add category');
    }
}

export const getCategories = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch categories');
    }
};
