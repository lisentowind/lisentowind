import React from 'react';
import Home from './pages/Home/Home';
import Loading from './pages/Loading/Loading';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
// 中文包
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';

function App() {

  return (
    <div>
      <ConfigProvider locale={zh_CN}>

        <React.Suspense fallback={<Loading></Loading>}>
          <BrowserRouter>
            <Switch>
              <Redirect exact from='/' to="/login"></Redirect>
              <Route path="/login" component={React.lazy(() => import('./pages/Login/Login'))}></Route>
              <Route path="/register" component={React.lazy(() => import('./pages/Register/Register'))}></Route>
              <Route path="/home" component={Home}></Route>
            </Switch>
          </BrowserRouter>

        </React.Suspense>
      </ConfigProvider>


    </div>
  );
}

export default App;
