import axios from "../utils/axiosUtils";

export const getAlluser = () => axios.post("/users/getAccountList")