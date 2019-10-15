
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umiProject',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      // routes: {
      //   exclude: [
      //     /models\//,
      //     /services\//,
      //     /model\.(t|j)sx?$/,
      //     /service\.(t|j)sx?$/,
      //     /components\//,
      //   ],
      // },
    }],
  ],
  routes: [
    { path: "/login", component: './login/index'},
    {
      path: "/",
      component: '../layouts',
      routes: [
        { path: "/", component: "./goods/index"},
        { path: "/user", component: "./user/index"},
        { path: "/login", component: './login/index'}
      ]
    }
  ]
}

