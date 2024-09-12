import axios from "axios";

const BASE_URL = 'http://localhost:5001/categories';
const token = localStorage.getItem('token');

export const addCategory = async (categoryName: string) => {
    try {
        const response = await axios.post(
            BASE_URL,
            { name: categoryName },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data;
    } catch (error) {
        console.log('Failed to add category');
    }
}

export const getCategories = async () => {
    try {
        const response = await axios.get(BASE_URL, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.log('Failed to fetch categories');
    }
};

export const updateCategory = async (id: string, updatedName: string) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, { name: updatedName },
            {
                headers: { Authorization: `Bearer ${token}` },
            })
        return response.data
    } catch (error) {
        console.log('Failed to update category');
    }
}

export const deleteCategory = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.log('Failed to delete categories');
    }
}
