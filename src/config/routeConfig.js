import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import Register from "../pages/Register/Register"
import NotFound from "../pages/NotFound/NotFound"
let routes = [
    { path: "/", name: "Login", component: Login },
    { path: "/login", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register },
    { path: "/home", name: "Home", component: Home, auth: true },
    { path: "/home/main", name: "Home", component: Home, auth: true },
    { path: "/home/user", name: "Home", component: Home, auth: true },
    { path: "/home/role", name: "Home", component: Home, auth: true },
    { path: "/home/shop", name: "Home", component: Home, auth: true },
    { path: "/home/commodity", name: "Home", component: Home, auth: true },
    { path: "/home/commodity/classification", name: "Home", component: Home, auth: true },
    { path: "/home/commodity/list", name: "Home", component: Home, auth: true },
    { path: "/home/commodity/AddProductList", name: "Home", component: Home, auth: true },
    { path: "/home/finance", name: "Home", component: Home, auth: true },
    { path: "/home/finance/wages", name: "Home", component: Home, auth: true },
    { path: "/home/finance/achievemet", name: "Home", component: Home, auth: true },
    { path: "/NotFound", name: "NotFound", component: NotFound },

]
export default routes