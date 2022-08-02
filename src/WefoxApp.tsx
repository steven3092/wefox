import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './style.tsx';
import ModalModifyCity from './modalModifyCity';
import ModalAddCity from './modalAddCity'
import Axios from 'axios';
import {
  Table,
  TableTh,
  TableTd,
  TableTr,
  DeleteButton,
  ModifyButton,
  AddButton,
} from './style';
import {
  fetchWefoxDataList,
  removeWefoxDataList
} from './api-request';

const WefoxApp = () => {
  const [listOfCities, setListOfCities] = useState([{
    id: 0,
    content: '',
    lat: '',
    long: '',
    title: '',
    created_at: '',
    updated_at: '',
  }]);
  const [patchCity, setPatchCity] = useState({
    id: 0,
    content: '',
    lat: '',
    long: '',
    title: '',
  });
  const [patchName, setPatchName] = useState('');
  const [patchLastName, setPatchLastName] = useState('');
  const [userId, setUserId] = useState(0);
  const [isShowing, setIsShowing] = useState(false);
  const [isShowingModalAddCity, setIsShowingModalAddCity] = useState<boolean>(false);
  const [isShowingModalModifyCity, setIsShowingModalModifyCity] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false)


  // const fetchWefoxDataShow = async () : Promise<any> => {
  //   try {
  //   const url = 'http://localhost:3000/api/v1/posts/1';
  //   const header = { headers: { Accept: 'application/json' } };
  //   const { data } = await Axios.get(url, header);
  //   console.log('dataShow:', data);  
  //   return data;
  //   } catch (err) {
  //     console.log(err);
  //     return err;
  //   }
  // };



  const updateWefoxData = async (id: number) : Promise<any> => {
    try {
    const url = `http://localhost:3000/api/v1/posts/${id}`;
    const header = { headers: { Accept: 'application/json' } };
    const { data } = await Axios.put(url, header);
    console.log('data:', data);  
    return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };


  useEffect(() => {
    fetchWefoxDataList(setListOfCities);
    // fetchWefoxDataShow();
  }, [refreshing]);


  const handleClickDelete = (id: number) => {
    removeWefoxDataList(id);
    setRefreshing(!refreshing);
  };
  
  const handleClickPatch = (id: number) => {
    updateWefoxData(id);
  };
  
  
  // const handleClickModal = (content: string, lat: string, long: string, title: string, id: number) => {
  //   setIsShowing(true);
  //   setPatchLastName(lastName);
  //   setPatchName(name);
  //   setUserId(id);
  // };
  const handleClickModalModifyCity = (id: number, content: string, lat: string, long: string, title: string) => {
    setPatchCity({
      id: id,
      content: content,
      lat: lat,
      long: long,
      title: title,
    })
    setIsShowingModalModifyCity(true);
  };
  
  const handleClickModalAddUser = () => {
    setIsShowingModalAddCity(true);
  };
console.log('listOfCities', listOfCities);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
        <Table>
          <tr>
            <TableTh>Id</TableTh>
            <TableTh>Content</TableTh>
            <TableTh>Lat</TableTh>
            <TableTh>Long</TableTh>
            <TableTh>Title</TableTh>
            <TableTh>Created At</TableTh>
            <TableTh>Updated At</TableTh>
            <TableTh>Action</TableTh>
          </tr>
      {listOfCities.map(el =>
          <TableTr>
            <TableTd>{el.id}</TableTd>
            <TableTd>{el.content}</TableTd>
            <TableTd>{el.lat}</TableTd>
            <TableTd>{el.long}</TableTd>
            <TableTd>{el.title}</TableTd>
            <TableTd>{el.created_at}</TableTd>
            <TableTd>{el.updated_at}</TableTd>
            {/* <TableTd>{dayjs(el.create_date).format('YYYY-MM-DD HH:mm:ss')}</TableTd> */}
            <TableTd>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <DeleteButton type='button' onClick={() => handleClickDelete(el.id)}>Delete</DeleteButton>
              <ModifyButton type='button' onClick={() => handleClickModalModifyCity(el.id, el.content, el.lat, el.long, el.title)}>Modify</ModifyButton>
            </div>
            </TableTd>
          </TableTr>
        )}
        
        <TableTr>
          <TableTd>Id example</TableTd>
          <TableTd>Content example</TableTd>
          <TableTd>Lat example</TableTd>
          <TableTd>Long example</TableTd>
          <TableTd>Title example</TableTd>
          <TableTd>Creation date example</TableTd>
          <TableTd>Update date example</TableTd>
          {/* <TableTd>{CREATE_DATE}</TableTd> */}
          <TableTd>
            <AddButton type='button' onClick={() => handleClickModalAddUser()}>Add a new city</AddButton>
          </TableTd>
        </TableTr>
        </Table>
        {isShowingModalAddCity
        && (
          <ModalAddCity
          setIsShowingModalAddCity={setIsShowingModalAddCity}
          setRefreshing={setRefreshing}
          refreshing={refreshing}
            // setAddCity={setAddCity}
            // addCity={addCity}
            // setAddName={setAddName}
            // setAddLastName={setAddLastName}
            // createWefoxData={createWefoxData} 
          />
        )}

        {isShowingModalModifyCity 
        && (
        <ModalModifyCity 
        setPatchCity={setPatchCity}
        patchCity={patchCity}
        setIsShowingModalModifyCity={setIsShowingModalModifyCity}
        setRefreshing={setRefreshing}
        refreshing={refreshing}
         />
        )}
    </div>
  );
}

export default WefoxApp;
