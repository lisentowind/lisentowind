/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Button, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import ClassTabel from "../../assets/css/ClassTable.module.less"

import { getAllRoles } from "../../api/Role"

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
            <Button type='danger'>删除</Button>
            <Button type='primary'>授权</Button>
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
    let res = await getAllRoles()
    console.log(res.data);
    setData(res.data)
  }

  return (
    <div>
      

      <Card
        className={ClassTabel.tablecard}
        title={<Button type='primary'>添加角色</Button>}

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
