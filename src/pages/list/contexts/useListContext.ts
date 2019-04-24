import { useState } from 'react';
import createUseContext from 'constate';
import { demoService } from '../services';

interface IListItem {
  id: number;
  name: string;
}

function useList() {
  const [list, setList] = useState<IListItem[]>([]);

  const fetchList = async () => {
    const response = await demoService.queryList({});
    setList(response.body);
  };
  return { list, fetchList };
}

export default createUseContext(useList);
