import axios from "../utils/axiosUtils";

export const getAllRoles = () => axios.get("roles/findRoles")