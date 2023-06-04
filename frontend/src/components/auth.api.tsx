import { default as Axios, AxiosRequestConfig } from 'axios';

export interface Credentials {
    username: string;
    password: string;
}
const REACT_API_BASE_URL = "http://localhost:8080/"
export const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: REACT_API_BASE_URL + 'api/auth/signin',
        data
    }
    try {
        const {data} = await Axios.request(requestConfig);
        console.log(data)
    } catch (e) {
        console.error(e);
        // return {error: e.response.data.message}
    }
    

}
export const onRegister = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: REACT_API_BASE_URL + 'api/auth/signin',
        data
    }
    try {
        const {data} = await Axios.request(requestConfig);
        console.log(data)
    } catch (e) {
        console.error(e);
        // return {error: e.response.data.message}
    }
    

}