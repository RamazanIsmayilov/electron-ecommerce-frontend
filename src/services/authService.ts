import axios from 'axios'
const BASE_URL = 'https://coppola-movie.vercel.app/api/auth'

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw new Error('An error occurred during login');
    }
}

export const register = async (name: string, surname: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, {
            name,
            surname,
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw new Error('An error occurred during registration');
    }
};

export const isAdmin = (): boolean => {
    const token = localStorage.getItem('token');
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.role === 'admin';
    } else {
        return false;
    }
};
