import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'Scratch-To-UMI',
      dll: true,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  chainWebpack(memo) {
    memo.plugin('copy-scratch-gui')
      .use(CopyWebpackPlugin, [[{
        from: path.resolve(__dirname, 'node_modules', 'scratch-gui', 'dist', 'static'),
        to: 'static',
      }]]);
  },
};
