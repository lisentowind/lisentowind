
/* eslint-disable jsx-a11y/anchor-is-valid */


import ClassTabel from "../../assets/css/ClassTable.module.less"
import { Link, useHistory } from 'react-router-dom';
import {
    Breadcrumb,
    Card,
    Button,
    Form,
    InputNumber,
    Select,
    Upload,
    Input,
} from 'antd';
import ImgCrop from 'antd-img-crop';

import React, { useState } from 'react';
const { TextArea } = Input;
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};





export default function AddProductList() {
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file) => {
        let src = file.url;

        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = () => resolve(reader.result);
            });
        }

        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const history = useHistory()

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
                    <Form.Item label="商品名字" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="商品描述" name="title">
                        <TextArea />
                    </Form.Item>
                    <Form.Item label="商品价格">
                        <Form.Item name="price" noStyle>
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
                        <Select placeholder="请选择分类">
                            <Option value="1">已</Option>
                            <Option value="2">二</Option>
                        </Select>
                    </Form.Item>


                    <Form.Item label="上传图片">
                        <ImgCrop rotate>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                            >
                                {fileList.length < 5 && '+ Upload'}
                            </Upload>
                        </ImgCrop>
                    </Form.Item>

                    <Form.Item label="商品详情" name="msg">
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
