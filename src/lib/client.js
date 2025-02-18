import axios from "axios";

const client = axios.create({
    baseURL : "https://localhost:7050"
});

const setAuthHeader = token => {
    client.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthHeader = () => {
    client.defaults.headers.common.Authorization = ""
};

export { client, setAuthHeader, clearAuthHeader }