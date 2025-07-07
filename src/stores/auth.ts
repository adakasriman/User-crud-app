import axios from 'axios';

export interface LoginPayload {
    gmail: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: { id: number; name: string };
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { data } = await axios.post<LoginResponse>(API_URL + '/api/login', payload,{
        withCredentials: true
    });
    return data;
};

export const logout = async (): Promise<any> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { data } = await axios.post<any>(API_URL + '/api/logout', {
        withCredentials: true
    });
    return data;
};


export const signup = async (payload: LoginPayload): Promise<LoginResponse> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { data } = await axios.post<LoginResponse>(API_URL + '/api/signup', payload,{
        withCredentials: true
    });
    return data;
};
export const userList = async (): Promise<any> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { data } = await axios.get<any>(API_URL + '/api/users',{
        withCredentials: true
    });   
    return data;
};

export const updatePassword = async (payload: any): Promise<any> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { data } = await axios.put<any>(API_URL + '/api/update-password', payload,{
        withCredentials: true
    });
    return data;
};

export const deleteUser = async (id: number): Promise<any> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { data } = await axios.delete<any>(API_URL + '/api/users/' + id,{
        withCredentials: true
    });
    return data;
};


