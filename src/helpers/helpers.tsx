import type { FC } from 'react';
import { isNil } from 'lodash';

interface Props {
    id?: number;
    content?: string;
    lat?: string;
    long?: string;
    title?: string;
    created_at?: string;
    updated_at?: string;
    data?: any,
}

export const datasetBuild: FC<Props> = (data: any) => (
    data.map((el: any) => ({
      id: !isNil(el.id) ? (el.id) : '',
      content: !isNil(el.content) ? (el.content) : '',
      color: '#1fdc84',
      lat: !isNil(el.lat) ? (parseInt(el.lat)) : '',
      lon: !isNil(el.long) ? (parseInt(el.long)) : '',
      title: !isNil(el.title) ? (el.title) : '',
      value: 0.3,
    }))
  );
