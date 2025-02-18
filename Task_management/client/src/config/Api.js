import axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get('token');
export const API = axios.create({
    baseURL: "http://localhost:8090/api/v1",
    headers: {
        Authorization: ` Bearer ${token}`,
    }
})