import axios from "axios"

const BASE_URL = 'http://localhost:5001/colors'
const token = localStorage.getItem('token')

export const addColor = async (colorName: string) => {
    try {
        const response = await axios.post(BASE_URL,
            { name: colorName },
            {
                headers: { Authorization: `Bearer ${token}` }
            })
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const getColors = async () => {
    try {
        const response = await axios.get(BASE_URL,
            { headers: { Authorization: `Bearer ${token}` } }
        )
        return response.data
    } catch (error) {
        console.error('Failed to fetch colors', error);
    }
}

export const deleteColor = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error('Failed to delete color', error);
    }
}

export const updateColor = async (id: string, updatedName: string) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`,
            { name: updatedName },
            {
                headers: { Authorization: `Bearer ${token}` }
            })
        return response.data
    } catch (error) {
        console.error('Failed to update color', error);
    }
}