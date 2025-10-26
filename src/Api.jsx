import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => axios.get(API_URL);
export const fetchUserById = (id) => axios.get(`${API_URL}/${id}`);