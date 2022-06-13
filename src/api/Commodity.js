import axios from "../utils/axiosUtils";

// 获取所有分类
export const getCommodityClass = (id) => axios.get("/categroy/findCategroy", { params: id })
// 添加分类
export const addCommodityClass = (data) => axios.post("/categroy/addCategroy", data)
// 删除分类
export const deleteCommodityClass = (data) => axios.post("/categroy/deleteCateGroy", data)
// 获取所有商品列表
export const getAllProductList = () => axios.get("/goods/findGoods")
// 按照条件搜索
export const findProductByType = (data) => axios.post("/goods/findGoodsByName", data)
// 添加商品
export const addProductClass = (data) => axios.post("/goods/addGoods", data.values)
// 获取树形结构产品数据
export const getProductTree = () => axios.get("/categroy/findAllCategroy")
// 删除商品
export const deleteProductById = (data)=>axios.post("/goods/deleteGoods",data)

