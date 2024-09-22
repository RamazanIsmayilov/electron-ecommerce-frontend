import axios from "axios"

const BASE_URL = 'http://localhost:5001/storages'
const token = localStorage.getItem('token')

export const addStorage = async (storageName: string) => {
    try {
        const response = await axios.post(BASE_URL, { name: storageName }, { headers: { Authorization: `Bearer ${token}` } });
        return response.data
    } catch (error) {
        console.error(error)
    }
};

export const getStorages = async () => {
    try {
        const response = await axios.get(BASE_URL,
            { headers: { Authorization: `Bearer ${token}` } }
        )
        return response.data
    } catch (error) {
        console.error('Failed to fetch storages', error);
    }
}

export const deleteStorage = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error('Failed to delete storage', error);
    }
}

export const updateStorage = async (id: string, updatedName: string) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, { name: updatedName },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
        return response.data
    } catch (error) {
        console.error('Failed to update storage', error);
    }
}
