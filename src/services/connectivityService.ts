import axios from "axios"

const BASE_URL = 'http://localhost:5001/connectivities'
const token = localStorage.getItem('token')

export const addConnectivity = async (brandName: string) => {
    try {
        const response = await axios.post(BASE_URL, { name: brandName }, { headers: { Authorization: `Bearer ${token}` } });
        return response.data
    } catch (error) {
        console.error(error)
    }
};

export const getConnectivities = async () => {
    try {
        const response = await axios.get(BASE_URL,
            { headers: { Authorization: `Bearer ${token}` } }
        )
        return response.data
    } catch (error) {
        console.error('Failed to fetch brands', error);
    }
}

export const deleteConnectivity = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error('Failed to delete brand', error);
    }
}

export const updateConnectivity = async (id: string, updatedName: string) => {
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