/**
 * 重要：请通过 utils/env访问环境变量，不要直接引入 window
 */

let config: IEnvConfig = {
  // 接口地址
  TEST_URL: '__TEST_URL__',
};

if (process.env.NODE_ENV === 'development') {
  config = {
    // 接口地址,统一不包含末尾斜杠
    TEST_URL: 'https://www.easy-mock.com/mock/5ba056d836c04d44efe6e539/next',
  };
}

window.PUBLIC_ENV_CONFIG = config;
