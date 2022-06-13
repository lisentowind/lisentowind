import axios from "../utils/axiosUtils";

// 查找所有角色
export const getAllRoles = () => axios.get("roles/findRoles")
// 添加角色
export const addRole = (data) => axios.post("/roles/addRoles", data)

// 授权
export const authoRization = (data) => axios.post("/roles/addAuth", data)

// 删除角色
export const deleteRoleById = (data) => axios.post("/roles/deleteRoles", data)