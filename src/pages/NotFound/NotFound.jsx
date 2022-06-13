import { Button, Result } from 'antd';
import React from 'react';

const NotFound = (props) => {
    const gohome = () => {
        props.history.push({
            pathname: "/home",
        })
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="很抱歉，你访问的页面不存在"
            extra={< Button onClick={() => gohome()} type="primary" > 返回首页</ Button>}
        />

    )
}

export default NotFound;