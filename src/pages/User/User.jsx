/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Button, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import ClassTabel from "../../assets/css/ClassTable.module.less"

import { getAlluser } from "../../api/User.js"


export default function User() {

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
            <Button type='danger'>删除</Button>
          </Space>
        )
      }

    },

  ];


  const [data, setData] = useState([])
  // 初始化数据
  useEffect(() => {
    getDatas()
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
        title={<Button type='primary'>添加用户</Button>}

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

      </Card>


    </div>
  )
}