// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: {
          webpackChunkName: true,
        },
        title: 'umiProject',
        dll: true,
        locale: {
          enable: true,
          default: 'en-US',
        }, // routes: {
        //   exclude: [
        //     /models\//,
        //     /services\//,
        //     /model\.(t|j)sx?$/,
        //     /service\.(t|j)sx?$/,
        //     /components\//,
        //   ],
        // },
      },
    ],
  ],
  routes: [
    {
      path: '/login',
      component: './login/index',
    },
    {
      path: '/',
      component: '../layouts',
      routes: [
        { path: '/', component: './goods/index'},
        {
          path: '/goods',
          component: './goods/_layout',
          routes: [
            {
              path: '/goods/:Course',
              component: './goods/$Course',
            },
            {
              path: '/goods/:Course',
              component: './goods/$Course',
            },
            {
              path: '/goods/:Course',
              component: './goods/$Course',
            },
          ],
        },
        {
          path: '/user',
          component: './user/index',
          Routes: ["./routes/PrivateRoute.js"]
        },
        {
          path: '/login',
          component: './login/index',
        },
        {component: './404'}
      ],
    },
  ],
};
