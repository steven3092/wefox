import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './style.tsx';
import Modal from './modal';
import ModalAddUser from './modalAddUser'
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

const WefoxApp = () => {
  const [listOfCities, setListOfCities] = useState([{
    id: 0,
    content: '',
    lat: 0,
    long: 0,
    title: '',
    image_url: '',
    created_at: '',
    updated_at: '',
  }]);
  const [addName, setAddName] = useState(null);
  const [addLastName, setAddLastName] = useState(null);
  const [patchName, setPatchName] = useState('');
  const [patchLastName, setPatchLastName] = useState('');
  const [userId, setUserId] = useState(0);
  const [isShowing, setIsShowing] = useState(false);
  const [isShowingModalAddUser, setIsShowingModalAddUser] = useState(false);
  const [refreshing, setRefreshing] = useState(false)

  const fetchWefoxDataList = async () : Promise<any> => {
    try {
    const url = 'http://localhost:3000/api/v1/posts';
    const header = { headers: { Accept: 'application/json' } };
    const { data } = await Axios.get(url, header);
    console.log('data:', data);
    setListOfCities(data);
    return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const fetchWefoxDataShow = async () : Promise<any> => {
    try {
    const url = 'http://localhost:3000/api/v1/posts/1';
    const header = { headers: { Accept: 'application/json' } };
    const { data } = await Axios.get(url, header);
    console.log('dataShow:', data);  
    return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const createWefoxData = async () : Promise<any> => {
    try {
    const url = 'http://localhost:3000/api/v1/posts';
    const header = { headers: { Accept: 'application/json' } };
    const { data } = await Axios.post(url, header);
    console.log('data:', data);  
    return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

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

  const removeWefoxDataList = async (id: number) : Promise<any> => {
    try {
    const url = `http://localhost:3000/api/v1/posts/${id}`;
    const header = { headers: { Accept: 'application/json' } };
    const { data } = await Axios.delete(url, header);
    console.log('data:', data);  
    return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  useEffect(() => {
    fetchWefoxDataList();
    fetchWefoxDataShow();
  }, []);


  const handleClickDelete = (id: number) => {
    removeWefoxDataList(id);
  };
  
  const handleClickPatch = (id: number) => {
    updateWefoxData(id);
  };
  
  
  const handleClickModal = (name: string, lastName: string, id: number) => {
    setIsShowing(true);
    setPatchLastName(lastName);
    setPatchName(name);
    setUserId(id);
  };
  
  const handleClickModalAddUser = () => {
    setIsShowingModalAddUser(true);
  };

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
            <TableTh>Image url</TableTh>
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
            <TableTd>{el.image_url}</TableTd>
            <TableTd>{el.created_at}</TableTd>
            <TableTd>{el.updated_at}</TableTd>
            {/* <TableTd>{dayjs(el.create_date).format('YYYY-MM-DD HH:mm:ss')}</TableTd> */}
            <TableTd>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <DeleteButton type='button' onClick={() => handleClickDelete(el.id)}>Delete</DeleteButton>
              {/* <ModifyButton type='button' onClick={() => handleClickModal(el.name, el.lastName, el.id)}>Modify</ModifyButton> */}
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
          <TableTd>Image url example</TableTd>
          <TableTd>Creation date example</TableTd>
          <TableTd>Update date example</TableTd>
          {/* <TableTd>{CREATE_DATE}</TableTd> */}
          <TableTd>
            <AddButton type='button' onClick={() => handleClickModalAddUser()}>Add a new city</AddButton>
          </TableTd>
        </TableTr>
        </Table>
        {isShowingModalAddUser
        && (
          <ModalAddUser
            setIsShowingModalAddUser={setIsShowingModalAddUser}
            setAddName={setAddName}
            setAddLastName={setAddLastName}
            postUser={createWefoxData} 
          />
        )}

        {isShowing 
        && (
        <Modal 
          setIsShowing={setIsShowing} 
          patchName={patchName}
          setPatchName={setPatchName}
          patchLastName={patchLastName} 
          setPatchLastName={setPatchLastName} 
          userId={userId}
          handleClickPatch={handleClickPatch}
         />
        )}
    </div>
  );
}

export default WefoxApp;
