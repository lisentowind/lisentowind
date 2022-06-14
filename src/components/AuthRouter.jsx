import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import routeConfig from "../config/routeConfig"

export default class AuthRouter extends Component {
    render() {
        const { pathname } = this.props.location

        const token = localStorage.token
        const targetRoutePath = routeConfig.find(item => item.path.replace(/\s*/, "") === pathname)
        if (targetRoutePath) {
            if (targetRoutePath.auth) {
                if (token) {
                    return <Route path={pathname} component={targetRoutePath.component}></Route>
                } else {
                    return <Redirect to='/NotFound' ></Redirect>
                }
            } else {
                return <Route path={pathname} component={targetRoutePath.component}></Route>
            }
        } else {
            return <Redirect to='/NotFound' ></Redirect>
        }

    }
}
