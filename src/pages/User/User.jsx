/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Button, Space, Input, Table, Modal, Form, Select, message } from 'antd';
import React, { useEffect, useState } from 'react';
import ClassTabel from "../../assets/css/ClassTable.module.less"
import { getAllRoles } from "../../api/Role.js"

import { getAlluser, addUser, deleteUserById } from "../../api/User.js"
const { Option } = Select;

export default function User() {
  const [roles, setRoles] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const handleChange = (value) => {

  };
  // 添加用户
  const onFinish = async (values) => {
    console.log(values);
    let res = await addUser(values)
    if (res.code) {
      message.success("添加成功")
      setModalVisible(false)
      getDatas()
    } else {
      message.error("添加失败")
    }

  };

  const getAllrole = async () => {
    let res = await getAllRoles()
    setRoles(res.data)
  }

  // 删除用户
  const deleteUser = async (id) => {
    let res = await deleteUserById(id)
    if (res.code) {
      message.success("删除成功")
      getDatas()
    } else {
      message.error("删除失败")
    }
  }
  const columns = [
    {
      title: '用户名字',
      dataIndex: 'account',
      key: 'account',
      render: (account) => <a>{account}</a>,
    },
    {
      title: '邮箱地址',
      dataIndex: 'email',
      key: 'email',
      render: (email) => <a>{email}</a>,
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: (role) => role ? <a>{role.name}</a> : null
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => {
        return (
          <Space>
            <Button onClick={() => deleteUser(record._id)} type='danger'>删除</Button>
          </Space>
        )
      }

    },

  ];


  const [data, setData] = useState([])
  // 初始化数据
  useEffect(() => {
    getDatas()
    getAllrole()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 获取数据的方法
  const getDatas = async () => {
    let res = await getAlluser()
    setData(res.data)
  }

  return (
    <div>

      <Card
        className={ClassTabel.tablecard}
        title={<Button onClick={() => setModalVisible(true)} type='primary'>添加用户</Button>}

      >
        <Table
          bordered
          columns={columns}
          rowKey={(record) => record._id}
          pagination={{
            defaultPageSize: 4,
            total: data.length,
            pageSizeOptions: [4, 10, 20, 30],
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `总条数 ${total} 条`,
          }}
          scroll={{
            y: 350,
          }}
          dataSource={data} />

        <Modal
          title="添加角色"
          centered
          visible={modalVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
        >

          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 12,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="account"
              rules={[
                {
                  required: true,
                  message: '输入用户名',
                },
                {
                  pattern: /^[0-9A-Za-z]{6,10}$/,
                  message: '用户名由6到10位的数字字母组成！！',
              },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: '输入密码',
                },
                {
                  pattern: /^\d{6,10}$/,
                  message: '密码由6到10位数字组成',
              },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="邮箱"
              name="email"
              rules={[
                {
                  required: true,
                  message: '输入邮箱',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="角色类型"
              name="role"
            >
              <Select

                style={{
                  width: 120,
                }}
                onChange={handleChange}
              >
                {roles.map(item => {
                  return (
                    <Option key={item._id}>{item.name}</Option>
                  )
                })}

              </Select>
            </Form.Item>



            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                添加角色
              </Button>
            </Form.Item>
          </Form>
        </Modal>


      </Card>


    </div>
  )
}