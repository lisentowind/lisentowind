/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Button, Space, Table, Modal, Input, Form, message } from 'antd';
import React, { useEffect, useState } from 'react';
import ClassTabel from "../../assets/css/ClassTable.module.less"
import { getAllRoles, addRole, deleteRoleById } from "../../api/Role"
import Auther from '../../components/Auther';

export default function Role() {

  const columns = [
    {
      title: '角色名字',
      dataIndex: 'name',
      key: 'name',
      render: (name) => <a>{name}</a>,
    },
    {
      title: '创建日期',
      dataIndex: 'createTime',
      key: 'createTime',
      render: (createTime) => <a>{createTime}</a>,
    },
    {
      title: '授权人',
      dataIndex: 'authUser',
      key: 'authUser',
      render: (authUser) => authUser ? <a>{authUser}</a> : null
    },
    {
      title: '授权日期',
      dataIndex: 'authTime',
      key: 'authTime',
      render: (authTime) => authTime ? <a>{authTime}</a> : null
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => {
        return (
          <Space>
            <Button type='danger' onClick={() => deleteRole(record._id)}>删除</Button>
            <Button type='primary' onClick={() => authoRization(record)}>授权</Button>
          </Space>
        )
      }

    },

  ];
  const [hiden, setHiden] = useState(false)
  const [rows, setRows] = useState({})


  // 添加角色
  const [modalVisible, setModalVisible] = useState(false);

  const onFinish = async (values) => {
    let cTime = new Date().toLocaleDateString().split("/").join("-")
    values.createTime = cTime
    console.log(values);
    let res = await addRole(values)
    if (res.code) {
      getDatas()
      message.success("添加成功")
      setModalVisible(false)
    } else {
      message.error("添加失败")
    }

  };



  const [data, setData] = useState([])
  // 初始化数据
  useEffect(() => {
    getDatas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 获取数据的方法
  const getDatas = async () => {
    let res = await getAllRoles()
    setData(res.data)
  }

  // 授权
  const authoRization = (record) => {
    setHiden(true)
    setRows(record)

  }

  const setHidens = () => {
    setHiden(false)
    getDatas()

  }

  // 删除角色
  const deleteRole = async (id) => {
    let res = await deleteRoleById({id:id})
    if(res.code){
      message.success("删除成功")
      getDatas()
    }else{
      message.success("删除失败")
    }
  }




  return (
    <div>


      <Card
        className={ClassTabel.tablecard}
        title={<Button onClick={() => setModalVisible(true)} type='primary'>添加角色</Button>}

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
              label="角色名"
              name="name"
              rules={[
                {
                  required: true,
                  message: '输入角色名',
                },
              ]}
            >
              <Input />
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

        {/*授权  */}
        {hiden ? <Auther rows={rows} setHidens={setHidens}></Auther> : ""}



      </Card>
    </div>
  )
}
