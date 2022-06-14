import React, { useEffect, useState } from 'react'
import ReactEcharts from "echarts-for-react"
import { Card } from "antd"
import "../../assets/css/WagesEcharts.less"
import { getTbaleInfo } from "../../api/Commodity"

export default function Wages() {
  const getOptions = () => {
    return {
      title: {
        text: '产品分类包含子分类',
        subtext: '为零的数据默不显示',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '分类',
          type: 'pie',
          radius: '50%',
          data: dataList,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

  }

  useEffect(() => {
    getAllClass()
  }, [])
  const [dataList, setDataList] = useState([])


  // 获取所有分类
  const getAllClass = async () => {
    // 获取一级分类
    let res = await getTbaleInfo({ parentId: 0 })
    let arr = res.data
    let array = arr.filter(item => item.children.length !== 0).map(item => { return { value: item.children.length, name: item.value } })
    setDataList(array)
  }
  return (
    <>
      <Card
        hoverable
        style={{
          width: 700,
        }}
      >

        <div className="top">
          <ReactEcharts
            option={getOptions()}
            style={{ height: "100%", width: "100%" }}
            className="react_for_echarts"
          >

          </ReactEcharts>
        </div>

      </Card>

    </>
  )
}
