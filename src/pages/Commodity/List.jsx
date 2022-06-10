/* eslint-disable jsx-a11y/anchor-is-valid */
import { Breadcrumb, Card, Button, Space, Table, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import ClassTabel from "../../assets/css/ClassTable.module.less"
import { Link, useHistory } from 'react-router-dom';
import { getAllProductList, findProductByType } from "../../api/Commodity"

const { Option } = Select

export default function List() {
  const [searchType, setSearchType] = useState("")
  const [searchData, setSearchData] = useState("")

  const History = useHistory()
  const columns = [
    {
      title: '商品名字',
      dataIndex: 'name',
      key: 'name',
      render: (name) => <a>{name}</a>,
    },
    {
      title: '商品描述',
      dataIndex: 'title',
      key: 'title',
      render: (title) => <a>{title}</a>,
    },
    {
      title: '商品类型',
      dataIndex: 'type',
      key: 'type',
      render: (type) => type ? <a>{type.name}</a> : "暂无数据"
    },
    {
      title: '商品状态',
      dataIndex: 'state',
      key: 'state',
      render: (state) => state ? <Button type='danger'>点击下架</Button> : <Button type='primary'>点击上架</Button>
    },
    {
      title: '商品价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '操作',
      key: 'type',
      render: (_, record) => {
        return (
          <Space>
            <Button type='primary'>详情</Button>
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

  // 获取数据
  const getDatas = async () => {
    let res = await getAllProductList()
    console.log(res.data);
    setData(res.data)
  }

  // 搜索
  const toSearch = async () => {
    let res = await findProductByType({ searchType, searchData })
    setData(res.data)
  }

  const title = (
    <Space>
      <Select
        placeholder="选择类型搜索"
        onChange={v => setSearchType(v)}
        allowClear
      >
        <Option value="name">按照名字搜索</Option>
        <Option value="title">按照描述搜索</Option>
      </Select>
      <Input
        onChange={e => setSearchData(e.target.value)}
        style={{ width: "200px" }}
        placeholder="输入搜索关键字"
      />
      <Button onClick={toSearch} type='primary'>搜索</Button>
    </Space>
  )


  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item><Link to="/home">首页</Link></Breadcrumb.Item>
        <Breadcrumb.Item>商品管理</Breadcrumb.Item>
        <Breadcrumb.Item>商品列表</Breadcrumb.Item>
      </Breadcrumb>

      <Card
        className={ClassTabel.tablecard}
        title={title}
        extra={<Button type='primary' onClick={() => History.push('/home/commodity/AddProductList')}>添加</Button>}

      >
        <Table
          bordered
          columns={columns}
          rowKey={(record) => record._id}
          pagination={{
            defaultPageSize: 5,
            total: data.length,
            pageSizeOptions: [5, 10, 20, 30],
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
