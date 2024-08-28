import axios from "axios"

const API_BASE_URL = 'http://localhost:5000/auth/'

export const registerUser = async (name: string, surname: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, {
            name,
            surname,
            email,
            password
        })
        return response.data
    } catch (error) {
        console.error('Registration error:', error);
    }
}

export const loginUser = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Login failed');
    }
  };