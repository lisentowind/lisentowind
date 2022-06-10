import { log } from '@craco/craco/lib/logger';
import { Button, Modal, Form, Input, Select, message } from 'antd';
import React, { useState } from 'react';
import { getCommodityClass, addCommodityClass } from "../api/Commodity"

const layout = {
    labelCol: {
        offset: 3,
        span: 5,
    },
    wrapperCol: {
        span: 12,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const { Option } = Select;


const AddClass = (props) => {
    const [hide, setHide] = useState(false)
    const [form] = Form.useForm();
    const [list, setList] = useState([])
    const onTypeChange = async (value) => {
        if (value === "二级分类") {
            setHide(true)
            let res = await getCommodityClass({ parentId: 0 })
            setList(res.data.data)

        } else {
            setHide(false)
        }

    };




    const onFinish = async (values) => {
        console.log(values);
        values.parentId = values.parentId ? values.parentId : 0
        let res = await addCommodityClass(values)
        console.log(res);
        if (res.code) {
            message.success('添加成功');
            props.getDatas()
            props.isVisible(false)
        } else {
            message.error('添加失败，请检查你的输入是否有误');

        }
    };


    return (
        <>
            <Modal
                title="添加商品分类"
                centered
                visible={true}
                onOk={() => props.isVisible(false)}
                onCancel={() => props.isVisible(false)}
            >

                <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        label="分类名字"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="type"
                        label="分类级别"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="请选择分类级别"
                            onChange={onTypeChange}
                            allowClear
                        >
                            <Option value="一级分类">一级分类</Option>
                            <Option value="二级分类">二级分类</Option>
                        </Select>
                    </Form.Item>
                    {hide ? <Form.Item
                        name="parentId"
                        label="父级分类"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="请选择父级分类级别"

                            allowClear
                        >
                            {
                                list.map(item => <Option key={item._id} value={item._id}>{item.name}</Option>)
                            }


                        </Select>
                    </Form.Item> : null}


                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>

                    </Form.Item>
                </Form>

            </Modal>
        </>
    );
};

export default AddClass;