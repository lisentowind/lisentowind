const CracoLessPlugin = require('craco-less');
module.exports = {
    babel: {
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],  //装饰器
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": true
                }
            ]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#5cdbd3' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};