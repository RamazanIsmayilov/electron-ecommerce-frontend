import axios from 'axios';

const BASE_URL = 'http://localhost:5001';
const token = localStorage.getItem('token');

export const searchCategories = async (query: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/categories/search`, {
            params: { query },
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error while searching categories:', error);
    }
};

export const searchBrands = async (query: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/brands/search`, {
            params: { query },
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error('Error while searching brands:', error);
    }
}

export const searchColors = async (query: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/colors/search`, {
            params: { query },
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error('Error while searching colors:', error);
    }
}

export const searchConnectivities = async (query: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/connectivities/search`, {
            params: { query },
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error('Error while searching connectivities:', error);
    }
}

export const searchSizes = async (query: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/sizes/search`, {
            params: { query },
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error('Error while searching sizes:', error);
    }
}