/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Button, Space, Table, message } from 'antd';
import React, { useEffect, useState } from 'react';
import ClassTabel from "../../assets/css/ClassTable.module.less"

import { getCommodityClass, deleteCommodityClass } from "../../api/Commodity"
import AddClass from '../../components/AddClass';


export default function Classification() {
  const [isVisible, setIsViible] = useState(false)
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
            <Button onClick={() => deleteById(record._id)} type='danger'>删除</Button>
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
    let res = await getCommodityClass({ parentId })
    setData(res.data.data)
  }
  // 点击查看子类
  const intoSubClass = (id) => {
    setParentId(id)
  }

  // 删除
  const deleteById = async (id) => {
    let res = await deleteCommodityClass({ id: id })
    if (res.code) {
      message.success("删除成功")
      getDatas()
    } else {
      message.error("删除失败")
    }
  }

  // 监听parentId的变化进行发请求
  useEffect(() => {
    getDatas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentId])

  return (
    <div style={{ height: "95%" }}>


      <Card
        style={{ height: "100%" }}
        className={ClassTabel.tablecard}
        title={parentId === 0 ? "商品分类" : <Button type='primary' onClick={() => { setParentId(0) }}>返回上一级</Button>}
        extra={<Button type='primary' onClick={() => setIsViible(true)}>添加</Button>}

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
            y: 400,
          }}
          dataSource={data} />

      </Card>

      {isVisible ? <AddClass getDatas={getDatas} isVisible={setIsViible}></AddClass> : null}

    </div>
  )
}
