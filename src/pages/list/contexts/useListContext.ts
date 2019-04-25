import { useState } from 'react';
import createUseContext from 'constate';
import { demoService } from '../services';

interface IListItem {
  id: number;
  name: string;
}

function useList() {
  const [list, setList] = useState<IListItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchList = async () => {
    setLoading(true);
    const response = await demoService.queryList({});
    setLoading(false);
    setList(response.body);
    return response.body;
  };
  return { list, fetchList, loading };
}

export default createUseContext(useList);
