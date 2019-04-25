import {
  resolve
} from 'path';

export default {
  hash: true, // 打包时文件是否带hash值
  targets: {
    ie: 9,
  },
  plugins: [
    ['umi-plugin-react', {
      // antd: true,
      routes: {
        exclude: [/contexts\//, /services\//, /components\//, /typings\//, /utils\//, /interfaces\//],
      },
      locale: {
        default: 'zh-CN',
        // antd: true,
      },
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/Loading',
      },
      title: {
        defaultTitle: 'umi-ts-template',
      },
      chunks: ['config', 'umi'],
    }],
  ],
  alias: {
    src: resolve(__dirname, './src'),
  },
  // 配置less变量
  theme: {
    // "@primary-color": "#1DA57A",
  },
  // theme: "./theme-config.js"，
  // 单纯做复制的文件列表
  // copy: [
  //   {
  //     from: 'path/to/file.txt',
  //     to: 'file/without/extension',
  //   },
  // ],
  chainWebpack(config, {
    webpack
  }) {
    // config.merge({
    //   plugin: {
    //     install: {
    //       plugin: require('uglifyjs-webpack-plugin'),
    //       args: [{
    //         sourceMap: false,
    //         uglifyOptions: {
    //           compress: {
    //             // 删除所有的 `console` 语句
    //             drop_console: true,
    //           },
    //           output: {
    //             // 最紧凑的输出
    //             beautify: false,
    //             // 删除所有的注释
    //             comments: false,
    //           },
    //         },
    //       }],
    //     },
    //   },
    // });

    config
      .entry('config').add('src/config.ts').end()
      .output.filename((chunkData) => {
        return chunkData.chunk.name === 'config' ? '[name].js': '[name].[hash].chunk.js';
      }).path(__dirname + '/dist').end();
  },
};
