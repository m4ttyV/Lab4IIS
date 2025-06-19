import axios from 'axios';

export type tGroup = {
    id: number;
    group: string;
    min_duration: number;
    avg_duration: number;
    max_duration: number;
}[];



const BASE_URL = 'http://127.0.0.1:5000/structures/api/v1';

export const getCountries = async (): Promise<tGroup> => {
    const res = await axios.get(`${BASE_URL}/api/top_countries`);
    return res.data;
};

export const getStates = async (): Promise<tGroup> => {
    const res = await axios.get(`${BASE_URL}/api/top_states`);
    return res.data;
};

export const getCities = async (): Promise<tGroup> => {
    const res = await axios.get(`${BASE_URL}/api/top_cities`);
    return res.data;
};