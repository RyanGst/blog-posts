import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.0.0.39:3333',
    timeout: 10000
})

export default api;