/* eslint-disable react-hooks/exhaustive-deps */
import { message, Modal, Tree } from 'antd';
import { authoRization } from "../api/Role"
import React, { useEffect, useState } from 'react';

const treeData = [
    {
        title: '首页',
        key: '/home/main',
    },
    {
        title: '用户',
        key: '/home/user',

    },
    {
        title: '角色',
        key: '/home/role',
    },
    {
        title: '店铺',
        key: '/home/shop',
    },
    {
        title: '商品',
        key: '/home/commodity',
        children: [
            {
                title: '商品分类',
                key: '/home/commodity/classification',
            },
            {
                title: '商品列表',
                key: '/home/commodity/list'
            },
        ],
    },
    {
        title: '财务管理',
        key: '/home/finance',
        children: [
            {
                title: '工资流水',
                key: '/home/finance/wages',
            },
            {
                title: '销售管理',
                key: '/home/finance/achievemet',
            }
        ],
    },
];


const Auther = (props) => {

    const [checkedKeys, setCheckedKeys] = useState([]);

    useEffect(() => {
        console.log(props.rows);
        setCheckedKeys(props.rows.menus)
    }, [])

    const onCheck = (checkedKeysValue) => {
        console.log('onCheck', checkedKeysValue);
        setCheckedKeys(checkedKeysValue);
    };

    // 授权
    const handOk = async () => {
        let changeAuth = {
            id: props.rows._id,
            authTime: new Date().toLocaleDateString().split("/").join("-"),
            authUser: "xiaodong",
            menus: checkedKeys
        }
        let res = await authoRization(changeAuth)
        if (res.code) {
            message.success("授权成功")
            props.setHidens()

        } else {
            message.error("授权失败")
        }

    }

    return (
        <>

            <Modal
                title="授权"
                centered
                visible={true}
                onOk={() => handOk()}
                onCancel={() => props.setHidens()}
            >
                <Tree
                    checkable
                    defaultExpandedKeys={["/home/commodity", "/home/finance"]}
                    defaultCheckedKeys={props.rows.menus}
                    onCheck={onCheck}
                    treeData={treeData}
                />
            </Modal>

        </>
    );
};

export default Auther;