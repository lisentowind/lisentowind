/* eslint-disable jsx-a11y/anchor-is-valid */

import { Space, Layout, Menu, Dropdown } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DownOutlined
} from '@ant-design/icons';
import "../../assets/css/Box.less"
import React, { useState } from 'react';
import menulogo from "../../assets/images/logo-250px.png"
import HomeMenu from '../../components/HomeMenu';
import { Route, Redirect, Switch } from "react-router-dom"
import HomeIndex from "../HomeIndex/HomeIndex"
import User from "../User/User"
import Role from "../Role/Role"
import Shop from "../Shop/Shop"
import Classification from "../Commodity/Classification"
import List from "../Commodity/List"
import Wages from "../Finance/Wages"
import Achievemnt from "../Finance/Achievement"
import AddProductList from '../Commodity/AddProductList';


const { Header, Sider, Content, Footer } = Layout;
const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: "修改密码"
            }, {
                key: '2',
                label: "退出登录"
            }
        ]}
    />
);

export default function Home() {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <Layout style={{ height: "100vh" }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="Menulogo">
                        <img src={menulogo} width={collapsed ? "75px" : "150px"} alt="" />
                    </div>
                    <HomeMenu></HomeMenu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            backgroundColor: "rgb(0, 21, 41)",
                            color: "white",
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: 'space-between'

                        }}
                    >
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}

                        <div>
                            <Space>
                                <span>欢迎你,周晓东</span>

                                <Dropdown overlay={menu} placement="bottomRight" arrow={{
                                    pointAtCenter: true,
                                }}>

                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space style={{ color: 'white' }}>
                                            操作
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Space>


                        </div>

                    </Header>

                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px  0px',
                            padding: 24,
                            minHeight: 280,
                            overflowY: "scroll"
                        }}
                    >

                        <Switch>
                            <Redirect exact from='/home' to="/home/main"></Redirect>
                            <Route path="/home/main" component={HomeIndex} ></Route>
                            <Route path="/home/user" component={User} ></Route>
                            <Route path="/home/role" component={Role} ></Route>
                            <Route path="/home/shop" component={Shop} ></Route>
                            <Route path="/home/commodity/classification" component={Classification} ></Route>
                            <Route path="/home/commodity/list" component={List} ></Route>
                            <Route path="/home/commodity/AddProductList" component={AddProductList} ></Route>
                            <Route path="/home/finance/wages" component={Wages} ></Route>
                            <Route path="/home/finance/achievemet" component={Achievemnt} ></Route>
                        </Switch>
                    </Content>
                    <Footer style={{ boxSizing: 'border-box', padding: "10px 50px", textAlign: "center" }}>
                        shisanlailin@code builder@2022-6-9
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}
