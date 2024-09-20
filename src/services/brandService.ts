import axios from "axios"

const BASE_URL = 'http://localhost:5001/brands'
const token = localStorage.getItem('token')

export const addBrand = async (brandName: string) => {
    try {
        const response = await axios.post(BASE_URL, { name: brandName }, { headers: { Authorization: `Bearer ${token}` } });
        return { status: response.status, data: response.data };
    } catch (error: any) {
        if (error.response) {
            return { status: error.response.status, data: error.response.data };
        } else {
            return { status: 500, data: 'An unknown error occurred' };
        }
    }
};

export const getBrands = async () => {
    try {
        const response = await axios.get(BASE_URL,
            { headers: { Authorization: `Bearer ${token}` } }
        )
        return response.data
    } catch (error) {
        console.error('Failed to fetch brands', error);
    }
}

export const deleteBrand = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error('Failed to delete brand', error);
    }
}

export const updateBrand = async (id: string, updatedName: string) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, { name: updatedName },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
        return response.data
    } catch (error) {
        console.error('Failed to update brand', error);
    }
}