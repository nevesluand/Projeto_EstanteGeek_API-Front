import axios from "axios";

export const api = axios.create({
    baseURL: 'http://estante-geek-db.mysql.database.azure.com:3306/estante-geek-db',
});