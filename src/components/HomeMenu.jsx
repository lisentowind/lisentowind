/* eslint-disable array-callback-return */
import menuConfig from "../config/menuConfig"
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

export default function HomeMenu() {
    const [mayMneus, setMymenus] = useState([])
    useEffect(() => {
        let res = localStorage.getItem("userInfo") || "{}"
        const userInfo = JSON.parse(res)
        setMymenus(userInfo?.role?.menus)
    }, [])

    // 旧方法
    // const menus = (lists) => {
    //     return lists.map(item => {
    //         if (mayMneus && mayMneus.indexOf(item.key) !== -1) {
    //             if (!item.children) {
    //                 return (
    //                     <Menu.Item icon={item.icon} key={item.key}>
    //                         <Link to={item.key}>{item.title}</Link>
    //                     </Menu.Item>
    //                 )
    //             } else {
    //                 return (
    //                     <Menu.SubMenu key={item.key} icon={item.icon} title={item.title}>
    //                         {menus(item.children)}
    //                     </Menu.SubMenu>
    //                 )
    //             }
    //         }
    //     })
    // }
    // 新方法
    const items = (lists) => {
        return lists.map((item, index) => {
            if (mayMneus && mayMneus.indexOf(item.key) !== -1) {
                if (!item.children) {
                    return (
                        {
                            key: item.key + index,
                            icon: item.icon,
                            label: <Link to={item.key}>{item.title}</Link>
                        }
                    )
                } else {
                    return (
                        {
                            key: item.key + index,
                            icon: item.icon,
                            label: item.title,
                            children: items(item.children)
                        }
                    )
                }
            }
        })
    }



    return (
        <Menu
            theme="dark"
            mode="inline"
            items={items(menuConfig)}
            defaultSelectedKeys={["/home/main"]}
        >
            {/* {menus(menuConfig)} */}
        </Menu>
    )
}
