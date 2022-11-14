import axios from "axios";

export const accountHTTP = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api/`,
})

export const get = async (path, options = {}) => {
    const response = await accountHTTP.get(path, options)
    return response.data;
}