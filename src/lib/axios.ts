import axios from "axios";

export const api = axios.create({
    baseURL: 'https://estante-geek.azurewebsites.net/',
});
