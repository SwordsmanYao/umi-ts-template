import request from 'src/utils/request';
import env from 'src/utils/env';

const testUrl = env.TEST_URL;

function queryUserinfo(params) {
  return request({
    url: `${testUrl}/userinfo`,
    params,
  });
}

export default {
  queryUserinfo,
};
