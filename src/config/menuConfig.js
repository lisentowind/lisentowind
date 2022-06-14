// 当前这个系统的菜单，后端会提供一个接口。你访问接口获取
import {
    UserOutlined,
    HomeOutlined,
    UsergroupAddOutlined,
    ShopOutlined,
    ShoppingOutlined,
    PicLeftOutlined,
    UnorderedListOutlined,
    MoneyCollectOutlined,
    DatabaseOutlined,
    RiseOutlined

} from '@ant-design/icons';
const menuList = [
    {
        title: "首页",
        key: "/home/main",
        icon: <HomeOutlined />
    },
    {
        title: "用户管理",
        key: "/home/user",
        icon: <UserOutlined />
    },
    {
        title: "角色管理",
        key: "/home/role",
        icon: <UsergroupAddOutlined />
    },
    {
        title: "店铺管理",
        key: "/home/shop",
        icon: <ShopOutlined />
    },
    {
        title: "商品管理",
        key: "/home/commodity",
        icon: <ShoppingOutlined />,
        children: [
            {
                title: "商品分类",
                key: "/home/commodity/classification",
                icon: <PicLeftOutlined />
            },
            {
                title: "商品列表",
                key: "/home/commodity/list",
                icon: <UnorderedListOutlined />
            }
        ]
    },
    {
        title: "财务管理",
        key: "/home/finance",
        icon: <MoneyCollectOutlined />,
        children: [
            {
                title: "工资数据",
                key: "/home/finance/wages",
                icon: <DatabaseOutlined />,
            },
            {
                title: "销售业绩",
                key: "/home/finance/achievemet",
                icon: <RiseOutlined />
            }
        ]
    }
]

export default menuList