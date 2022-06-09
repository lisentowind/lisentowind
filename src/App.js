import React from 'react';
import Home from './pages/Home/Home';
import Loading from './pages/Loading/Loading';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
function App() {

  return (
    <div>
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

    </div>
  );
}

export default App;
