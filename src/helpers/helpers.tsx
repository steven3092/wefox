import { isNil } from 'lodash';


export const datasetBuild = (data : [{
  id: number;
  content: string; 
  lat: string;
  long: string;
  title: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}]) => (
    data.map((el) => ({
      id: !isNil(el.id) ? (el.id) : '',
      content: !isNil(el.content) ? (el.content) : '',
      color: '#1fdc84',
      lat: !isNil(el.lat) ? (parseInt(el.lat)) : '',
      lon: !isNil(el.long) ? (parseInt(el.long)) : '',
      title: !isNil(el.title) ? (el.title) : '',
      value: 0.3,
    }))
  );
