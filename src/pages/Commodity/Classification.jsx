/* eslint-disable jsx-a11y/anchor-is-valid */
import { Breadcrumb, Card, Button, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import ClassTabel from "../../assets/css/ClassTable.module.less"
import { Link } from 'react-router-dom';
import { getCommodityClass } from "../../api/Commodity"


export default function Classification() {
  const [parentId, setParentId] = useState(0)
  const columns = [
    {
      title: '类型名字',
      dataIndex: 'name',
      key: 'name',
      render: (name) => <a>{name}</a>,
    },
    {
      title: '类别',
      dataIndex: 'type',
      key: 'type',
      render: (type) => <a>{type}</a>,
    },
    {
      title: '操作',
      key: 'type',
      render: (_, record) => {
        return (
          <Space>
            {parentId === 0 ? <Button type='primary' onClick={() => intoSubClass(record._id)} >查看子分类</Button> : null}
            <Button type='danger'>删除</Button>
          </Space>
        )
      }

    },

  ];

  const [data, setData] = useState([
    {
      key: '1',
      name: '家用电器',
      type: "一级分类",
    },
    {
      key: '2',
      name: '数码产品',
      type: "一级分类",
    },
    {
      key: '3',
      name: '鞋类箱包',
      type: "一级分类",
    },
    {
      key: '4',
      name: '汽车用品',
      type: "一级分类",
    },
    {
      key: '5',
      name: '母婴专柜',
      type: "一级分类",
    },
    {
      key: '6',
      name: '运动户外',
      type: "一级分类",
    },
    {
      key: '7',
      name: '珠宝首饰',
      type: "一级分类",
    },
    {
      key: '8',
      name: '礼品鲜花',
      type: "一级分类",
    },

  ])

  useEffect(() => {
    getDatas()
  }, [])

  const getDatas = async () => {
    let res = await getCommodityClass({ parentId })
    setData(res.data.data)
  }

  const intoSubClass = (id) => {
    setParentId(id)
  }

  useEffect(() => {
    getDatas()
  }, [parentId])

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item><Link to="/home">首页</Link></Breadcrumb.Item>
        <Breadcrumb.Item>商品管理</Breadcrumb.Item>
        <Breadcrumb.Item>商品分类</Breadcrumb.Item>
      </Breadcrumb>

      <Card
        className={ClassTabel.tablecard}
        title={parentId === 0 ? "商品分类" : <Button type='primary' onClick={() => { setParentId(0) }}>返回上一级</Button>}
        extra={<Button type='primary'>添加</Button>}

      >
        <Table
          bordered
          columns={columns}
          // rowKey={(record) => record._id}
          rowKey={(record) => record.name}
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
