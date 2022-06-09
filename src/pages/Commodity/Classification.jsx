/* eslint-disable jsx-a11y/anchor-is-valid */
import { Breadcrumb, Card, Button, Space, Table, Pagination } from 'antd';
import React from 'react';
import ClassTabel from "../../assets/css/ClassTable.module.less"

export default function Classification() {
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
      render: () => {
        return (
          <Space>
            <Button type='primary'>查看子分类</Button>
            <Button type='danger'>删除</Button>
          </Space>
        )
      }

    },

  ];
  const data = [
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

  ];
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>商品管理</Breadcrumb.Item>
        <Breadcrumb.Item>商品分类</Breadcrumb.Item>
      </Breadcrumb>

      <Card
        className={ClassTabel.tablecard}
        title="商品分类"
        extra={<Button type='primary'>添加</Button>}

      >
        <Table
          columns={columns}
          pagination={false}
          scroll={{
            y: 350,
          }}
          dataSource={data} />


      </Card>
      <Pagination
        style={{ marginTop: "10px" }}
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
      />


    </div>
  )
}
