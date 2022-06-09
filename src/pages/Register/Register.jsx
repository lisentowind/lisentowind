/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Space, Form, Input } from 'antd';
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo-250px.png"
import register from "../../assets/css/Register.module.less"
import "../../assets/css/HomeAntd.less"

export default function Register() {
  const onFinish = (values) => {
    console.log('表单信息', values);
  };
  return (
    <div>
      <div className={register.main}>
        <div className={register.pain}>
          <div className={register.logo}>
            <img width="150px" src={logo} alt="" />
          </div>
          <div className={register.form}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              {/* 用户名 */}
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '用户名不可以为空',
                  },
                  {
                    pattern: /^[0-9A-Za-z]{6,10}$/,
                    message: '用户名由6到10位的数字字母组成！！',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>

              {/* 密码  */}
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '密码不可以为空',
                  },
                  {
                    pattern: /^[a-zA-Z]\d{5,10}$/,
                    message: '密码由6到10位字母开头和数字组成',
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item
                name="repassword"
                rules={[
                  {
                    required: true,
                    message: '确认密码不可以为空',
                  },
                  {
                    pattern: /^[a-zA-Z]\d{5,10}$/,
                    message: '密码由6到10位字母开头和数字组成',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error('两次密码不一致'));
                    },
                  }),

                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="repassword"
                />
              </Form.Item>


              {/* 登录 */}
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    注册
                  </Button>
                  <Link to="/">返回登录</Link>
                </Space>
              </Form.Item>
            </Form>
          </div>

        </div>


      </div>

    </div>
  )
}
