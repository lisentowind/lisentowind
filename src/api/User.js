import axios from "../utils/axiosUtils";

// 获取所有用户
export const getAlluser = () => axios.post("/users/getAccountList")

//添加用户
export const addUser = (data) => axios.post("/users/accountadd", data)
// 删除用户
export const deleteUserById = (id) => axios.get(`/users/delAccount?id=${id}`)
// 登录账户
export const logins = (data) => axios.post("/users/login", data)