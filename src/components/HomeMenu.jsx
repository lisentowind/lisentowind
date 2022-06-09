import {
    UserOutlined,
    HomeOutlined,
    UsergroupAddOutlined,
    ShopOutlined,
    ShoppingOutlined,
    PicLeftOutlined,
    UnorderedListOutlined,
    MoneyCollectOutlined,
    DatabaseOutlined,
    RiseOutlined

} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link } from "react-router-dom"

export default function HomeMenu() {
    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
        >
            <Menu.Item icon={<HomeOutlined />} key="1">
                <Link to="/home">首页</Link>
            </Menu.Item>

            <Menu.Item icon={<UserOutlined />} key="2">
                <Link to="/home/user">用户管理</Link>
            </Menu.Item>

            <Menu.Item icon={<UsergroupAddOutlined />} key="3">
                <Link to="/home/role">角色管理</Link>
            </Menu.Item>

            <Menu.Item icon={<ShopOutlined />} key="4">
                <Link to="/home/shop">店铺管理</Link>
            </Menu.Item>

            <Menu.SubMenu key="5" icon={<ShoppingOutlined />} title="商品管理">
                <Menu.Item key="5-1" icon={<PicLeftOutlined />}>
                    <Link to="/home/commodity/classification">商品分类</Link>
                </Menu.Item>
                <Menu.Item key="5-2" icon={<UnorderedListOutlined />}>
                    <Link to="/home/commodity/list">商品列表</Link>
                </Menu.Item>
            </Menu.SubMenu>
            
            <Menu.SubMenu key="6" icon={<MoneyCollectOutlined />} title="财务管理">
                <Menu.Item key="6-1" icon={<DatabaseOutlined />}>
                    <Link to="/home/finance/wages">工资数据</Link>
                </Menu.Item>
                <Menu.Item key="6-2" icon={<RiseOutlined />} >
                    <Link to="/home/finance/achievemet">销售业绩</Link>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
}
