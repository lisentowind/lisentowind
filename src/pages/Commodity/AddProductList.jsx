
/* eslint-disable jsx-a11y/anchor-is-valid */


import ClassTabel from "../../assets/css/ClassTable.module.less"
import { Link, useHistory } from 'react-router-dom';
import {
    Breadcrumb,
    Card,
    Button,
    Form,
    InputNumber,
    Input,
    message,
    Cascader
} from 'antd';
import UploadImg from "../../components/UploadImg"

import React, { useEffect, useState } from 'react';
import { getProductTree, addProductClass } from "../../api/Commodity.js"

const { TextArea } = Input;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};




export default function AddProductList() {
    const [options, setOptions] = useState([])
    const [selectType, setSelectType] = useState([])
    const [fileNames, setFileNames] = useState("")


    useEffect(() => {
        getProductClass()
    }, [])

    const getProductClass = async () => {
        let res = await getProductTree()
        setOptions(res.data)
    }

    const onFinish = async (values) => {
        values.imgSrc = fileNames
        values.price = String(values.price)
        values.type = selectType
        let res = await addProductClass({ values })
        if (res.code) {
            message.success("添加成功")
            history.push("/home/commodity/list")
        } else {
            message.error("添加失败")
        }

    };
    const onChanges = (_, value2) => {
        setSelectType(value2[1].id)
    };
    const displayRender = (labels) => labels[labels.length - 1]
    const history = useHistory();

    const getFilenames = (name) => {
        setFileNames(name)
    }


    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item><Link to="/home">首页</Link></Breadcrumb.Item>
                <Breadcrumb.Item>商品管理</Breadcrumb.Item>
                <Breadcrumb.Item>商品添加</Breadcrumb.Item>
            </Breadcrumb>

            <Card
                className={ClassTabel.tablecard}
                title={"商品添加"}
                extra={<Button type='primary' onClick={() => history.push("/home/commodity/list")}>返回</Button>}
            >

                <Form
                    name="validate_other"
                    {...formItemLayout}
                    onFinish={onFinish}
                    initialValues={{
                        'input-number': 3,
                        'checkbox-group': ['A', 'B'],
                        rate: 3.5,
                    }}

                >
                    <Form.Item label="商品名字" name="name"
                        rules={[
                            {
                                required: true,
                                message: '输入商品名字 ',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="商品描述" name="title"
                        rules={[
                            {
                                required: true,
                                message: '输入商品描述 ',
                            },
                        ]}>
                        <TextArea />
                    </Form.Item>
                    <Form.Item label="商品价格" >
                        <Form.Item name="price" noStyle
                            rules={[
                                {
                                    required: true,
                                    message: '输入商品价格',
                                },
                            ]}>
                            <InputNumber min={1} max={100000} />
                        </Form.Item>
                        <span className="ant-form-text"> 元</span>
                    </Form.Item>

                    <Form.Item
                        name="type"
                        label="商品分类"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请选择分类',
                            },
                        ]}
                    >

                        <Cascader
                            options={options}
                            expandTrigger="hover"
                            displayRender={displayRender}
                            onChange={onChanges}
                        />
                    </Form.Item>


                    <Form.Item label="上传图片" name="imgSrc">
                        <UploadImg getFilenames={getFilenames}></UploadImg>




                    </Form.Item>

                    <Form.Item label="商品详情" name="msg"
                        rules={[
                            {
                                required: true,
                                message: '输入商品详情 ',
                            },
                        ]}>
                        <TextArea />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            span: 12,
                            offset: 6,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            添加
                        </Button>
                    </Form.Item>
                </Form>


            </Card>


        </div>
    )
}
