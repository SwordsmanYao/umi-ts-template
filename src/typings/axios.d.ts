import axios from 'axios';

declare module 'axios' {
  // tslint:disable-next-line:interface-name
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
