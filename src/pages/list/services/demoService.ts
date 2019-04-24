import request from 'src/utils/request';
import env from 'src/utils/env';

const testUrl = env.TEST_URL;

function queryList(params: any) {
  return request({
    url: `${testUrl}/list`,
    params,
  });
}

export default {
  queryList,
};
