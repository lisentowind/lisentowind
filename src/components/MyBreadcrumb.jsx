import React, { useEffect, useState } from 'react'
import { Breadcrumb } from "antd"
import { useLocation } from 'react-router-dom'


const routerConfig = {
    "/home": "首页",
    "/home/main": "主页面",
    "/home/user": "用户管理",
    "/home/role": "角色管理",
    "/home/shop": "店铺管理",
    "/home/commodity": "商品管理",
    "/home/commodity/classification": "商品分类",
    "/home/commodity/list": "商品列表",
    "/home/commodity/AddProductList": "商品添加",
    "/home/finance": "财务管理",
    "/home/finance/wages": "工资数据",
    "/home/finance/achievemet": "销售业绩",
}

export default function MyBreadcrumb() {
    const location = useLocation()
    const [breadcrumb, setBreadcrumb] = useState([])
    useEffect(() => {
        let res = location.pathname.split("/").filter(item => item)
        const array = res.map((_, index) => {
            let url = `/${res.slice(0, index + 1).join("/")}`
            return (
                <Breadcrumb.Item key={url}>
                    {routerConfig[url]}
                </Breadcrumb.Item>
            )
        })
        setBreadcrumb(array)


    }, [location])



    return (
        <Breadcrumb>
            {breadcrumb}
        </Breadcrumb>
    )
}
