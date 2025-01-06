import axios from "axios";

const client = axios.create({
    baseURL : "https://K2-api/"
});

const setAuthHeader = token => {
    client.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthHeader = () => {
    client.defaults.headers.common.Authorization = ""
};

export { client, setAuthHeader, clearAuthHeader }