import axios from "axios"

const BASE_URL = 'http://localhost:5001/sizes'
const token = localStorage.getItem('token')

export const addSize = async (sizeName: string) => {
    try {
        const response = await axios.post(BASE_URL, { name: sizeName }, { headers: { Authorization: `Bearer ${token}` } });
        return response.data
    } catch (error) {
        console.error(error)
    }
};

export const getSizes = async () => {
    try {
        const response = await axios.get(BASE_URL,
            { headers: { Authorization: `Bearer ${token}` } }
        )
        return response.data
    } catch (error) {
        console.error('Failed to fetch sizes', error);
    }
}

export const deleteSize = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error('Failed to delete size', error);
    }
}

export const updateSize = async (id: string, updatedName: string) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, { name: updatedName },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
        return response.data
    } catch (error) {
        console.error('Failed to update size', error);
    }
}
