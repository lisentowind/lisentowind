import React, { useEffect, useState } from 'react'
import ReactEcharts from "echarts-for-react"
import { Card } from "antd"
import "../../assets/css/WagesEcharts.less"
import { getAllProductList } from "../../api/Commodity"

export default function Achievement() {
  const getOptions = () => {
    return {
      title: {
        text: '每种产品占有率',
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
    let res = await getAllProductList()
    let all = res.data
    let className = new Map()
    // 筛选数据
    all.forEach(item => {
      if (!className.has(item.type.name)) {
        className.set(item.type.name, 1)
      } else {
        let num = className.get(item.type.name) + 1
        className.set(item.type.name, num)
      }
    });
    let arr = [...className]
    // 转换数据格式
    let newArr = arr.map(item => {
      return { value: item[1], name: item[0] }
    })


    setDataList(newArr)

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
