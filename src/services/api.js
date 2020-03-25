import axios from 'axios';

const api = axios.create({
    baseURL: 'https://5e7b6c200e0463001633333c.mockapi.io/condominium',
})

export default api;