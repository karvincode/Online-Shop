import { default as Axios, AxiosError, AxiosRequestConfig } from 'axios';

export interface Credentials {
    username: string;
    password: string;
    email: string;
}
const REACT_API_BASE_URL = "http://localhost:8080/"
export const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: REACT_API_BASE_URL + 'api/auth/signin',
        data
    }
        const response = await Axios.request(requestConfig);
        console.log(response,response.data.message)
        return response;

    } 
    
export const onRegister = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: REACT_API_BASE_URL + 'api/auth/signup',
        data
    }
    try {
        const {data} = await Axios.request(requestConfig);
        console.log(data)
    } catch (e) {
        if (e instanceof AxiosError) {
            // 
            console.log(e,  e?.response?.data.message)
            return e?.response?.data.message;
       }
    }
    

}
export const passwordChange = async (data: Credentials)=> {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: REACT_API_BASE_URL + 'api/auth/password/initiate',
        data
    }
    try {
        const {data} = await Axios.request(requestConfig);
        console.log(data)
    }catch (e) {
        if (e instanceof AxiosError) {
            // 
            console.log(e,  e?.response?.data.message)
            return e?.response?.data.message;
       }
    }
}