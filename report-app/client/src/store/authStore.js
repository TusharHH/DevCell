import { create } from 'zustand';
import axios from 'axios';

const BACKEND_API = 'http://localhost:5000/api/v1/auth';

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,

    login: async (input, password) => {
        try {
            const res = await axios.post(`${BACKEND_API}/login`, { input, password });
            localStorage.setItem('user', JSON.stringify(res.data.data));
            set({ user: res.data.data });
        } catch (err) {
            console.error('Login failed:', err.response.data.message);
            throw err;
        }
    },

    signup: async (email, username, password) => {
        try {
            const res = await axios.post(`${BACKEND_API}/signup`, { email, username, password });
            localStorage.setItem('user', JSON.stringify(res.data.data));
            set({ user: res.data.data });
        } catch (err) {
            console.error('Signup failed:', err.response.data.message);
            throw err;
        }
    },

    logout: () => {
        localStorage.removeItem('user');
        set({ user: null });
    }
}));

export default useAuthStore;
