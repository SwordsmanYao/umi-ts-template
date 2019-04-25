import request from 'src/utils/request';
import env from 'src/utils/env';

const testUrl = env.TEST_URL;

interface IListItem {
  id: number;
  name: string;
}

interface IResponse<T> {
  code: number;
  body: T;
}

function queryList(params) {
  return request<IResponse<IListItem[]>>({
    url: `${testUrl}/list`,
    params,
  });
}

export default {
  queryList,
};
