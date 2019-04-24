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

function queryList(params): Promise<IResponse<IListItem[]>> {
  return request({
    url: `${testUrl}/list`,
    params,
  }) as any;
}

export default {
  queryList,
};
