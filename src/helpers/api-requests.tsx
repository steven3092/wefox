import Axios from 'axios';

export const fetchWefoxDataList = async (setListOfCities: any) : Promise<any> => {
    try {
    const url = 'http://localhost:3000/api/v1/posts';
    const header = { headers: { Accept: 'application/json' } };
    const { data } = await Axios.get(url, header);
    setListOfCities(data);
    return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

export const createWefoxData = async (formData: any) : Promise<any> => {
    try {
    const data = await Axios({
        method: 'post',
        headers: { Accept: 'application/json' },
        url: 'http://localhost:3000/api/v1/posts',
        data: formData,
      })
    return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

export const removeWefoxDataList = async (id: number) : Promise<any> => {
    try {
    const url = `http://localhost:3000/api/v1/posts/${id}`;
    const header = { headers: { Accept: 'application/json' } };
    const { data } = await Axios.delete(url, header);
    return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };


export const patchWefoxDataList = async (formData: any) : Promise<any> => {
    try {
    const { data } = await Axios({
        method: 'put',
        headers: { Accept: 'application/json' },
        url: `http://localhost:3000/api/v1/posts/${formData.id}`,
        data: formData,
      })
    return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
