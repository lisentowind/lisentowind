import React from 'react'
import { Empty } from 'antd';

export default function NotFound() {
    return (
        <div style={{ width: "auto", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div>
                <h1 style={{ color: "red", fontWeight: 'bold', }}>404未找到该页面</h1>
                <Empty />
            </div>
        </div>
    )
}
