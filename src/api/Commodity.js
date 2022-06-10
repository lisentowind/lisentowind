import axios from "../utils/axiosUtils";

export const getCommodityClass = (id) => axios.get("/categroy/findCategroy", { params: id })