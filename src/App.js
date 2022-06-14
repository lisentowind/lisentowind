import React from 'react';

import Loading from './pages/Loading/Loading';
import { BrowserRouter, Switch } from "react-router-dom"

// 中文包
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';
import AuthRouter from './components/AuthRouter';

function App() {

  return (
    <div>
      <ConfigProvider locale={zh_CN}>

        <React.Suspense fallback={<Loading></Loading>}>
          <BrowserRouter>
            <Switch>
            
              <AuthRouter></AuthRouter>
            </Switch>
          </BrowserRouter>

        </React.Suspense>
      </ConfigProvider>


    </div>
  );
}

export default App;
