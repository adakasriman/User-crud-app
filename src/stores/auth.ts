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
    const { data } = await axios.post<LoginResponse>(API_URL + '/login', payload);
    return data;
};

export const signup = async (payload: LoginPayload): Promise<LoginResponse> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { data } = await axios.post<LoginResponse>(API_URL + '/signup', payload);
    return data;
};
export const userList = async (): Promise<any> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { data } = await axios.get<any>(API_URL + '/users');
    return data;
};

export const updatePassword = async (payload: any): Promise<any> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { data } = await axios.put<any>(API_URL + '/update-password', payload);
    return data;
};

export const deleteUser = async (id: number): Promise<any> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { data } = await axios.delete<any>(API_URL + '/users/' + id);
    return data;
};


