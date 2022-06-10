import axios from "../utils/axiosUtils";

// 获取所有分类
export const getCommodityClass = (id) => axios.get("/categroy/findCategroy", { params: id })
// 添加分类
export const addCommodityClass = (data)=> axios.post("/categroy/addCategroy",data)