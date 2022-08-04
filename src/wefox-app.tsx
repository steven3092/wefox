import { useEffect, useState } from 'react';
import ModalModifyCity from './modals/modal-modify-city';
import ModalAddCity from './modals/modal-add-city'
import Globe from './globe';
import {
  Table,
  TableTh,
  TableTd,
  TableTr,
  DeleteButton,
  ModifyButton,
  AddButton,
} from './styles';
import {
  fetchWefoxDataList,
  removeWefoxDataList
} from './helpers/api-requests';

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
  const [patchCity, setPatchCity] = useState<object>({
    id: 0,
    content: '',
    lat: '',
    long: '',
    title: '',
  });
  const [isShowingModalAddCity, setIsShowingModalAddCity] = useState<boolean>(false);
  const [isShowingModalModifyCity, setIsShowingModalModifyCity] = useState<boolean>(false);
  const [isShowingGlobe, setIsShowingGlobe] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false)
  
  useEffect(() => {
    fetchWefoxDataList(setListOfCities);
  }, [refreshing]);

  const handleClickDelete = (id: number) => {
    removeWefoxDataList(id);
    setRefreshing(!refreshing);
  };
  
  const handleClickModalModifyCity = (
    id: number, 
    content: string, 
    lat: string, 
    long: string, 
    title: string
    ) => {
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

  const handleClickGlobe = () => {
    setIsShowingGlobe(true);
  };

  return (
    <div>
      <ModifyButton onClick={() => handleClickGlobe()}>
      Show the globe
      </ModifyButton>
        <Table data-testid="table-element">
          <tr>
            <TableTh>Id</TableTh>
            <TableTh>Content</TableTh>
            <TableTh>Lat</TableTh>
            <TableTh>Long</TableTh>
            <TableTh>Title</TableTh>
            <TableTh>Created At</TableTh>
            <TableTh>Updated At</TableTh>
            <TableTh>Actions</TableTh>
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
            <TableTd>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <DeleteButton onClick={() => handleClickDelete(el.id)}>Delete</DeleteButton>
              <ModifyButton data-testid="button-modify-city" onClick={() => handleClickModalModifyCity(el.id, el.content, el.lat, el.long, el.title)}>Modify</ModifyButton>
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
          <TableTd>
            <AddButton data-testid="button-add-city" onClick={() => handleClickModalAddUser()}>Add a new city</AddButton>
          </TableTd>
        </TableTr>
        </Table>
        {isShowingModalAddCity
        && (
          <ModalAddCity
          setIsShowingModalAddCity={setIsShowingModalAddCity}
          setRefreshing={setRefreshing}
          refreshing={refreshing} 
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
        {isShowingGlobe
        && (
        <Globe
        setIsShowingGlobe={setIsShowingGlobe}
        listOfCities={listOfCities}
        />
        )}
    </div>
  );
}

export default WefoxApp;
