import axios from "axios";

export const apiHTTP = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api/`,
})

export const get = async (path, options = {}) => {
    const response = await apiHTTP.get(path, options)
    return response.data;
}

