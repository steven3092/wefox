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
  const [listOfCities, setListOfCities] = useState<[{
    id: number, 
    content: string, 
    lat: string, 
    long: string,
    title: string,
    image_url: string,
    created_at: string,
    updated_at: string,
  }]>([{
    id: 0,
    content: '',
    lat: '',
    long: '',
    title: '',
    image_url: '',
    created_at: '',
    updated_at: '',
  }]);
  const [patchCity, setPatchCity] = useState<{
    id: number,
    content: string,
    lat: string,
    long: string,
    title: string,
  }>({
    id: 0,
    content: '',
    lat: '',
    long: '',
    title: '',
  });
  const [isShowingModalAddCity, setIsShowingModalAddCity] = useState<boolean | null>(false);
  const [isShowingModalModifyCity, setIsShowingModalModifyCity] = useState<boolean | null>(false);
  const [isShowingGlobe, setIsShowingGlobe] = useState<boolean | null>(false);
  const [refreshing, setRefreshing] = useState<boolean | null>(false)
  
  useEffect(() => {
    fetchWefoxDataList(setListOfCities);
  }, [refreshing]);

  const handleClickDelete = (id: number) => {
    removeWefoxDataList(id);    
    setTimeout(() => {
      setRefreshing(!refreshing);
    }, 100)
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
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>  
        <ModifyButton onClick={() => handleClickGlobe()}>
          Show the globe
        </ModifyButton>
        <Table data-testid="table-element">
          <thead>
            <tr>
              <TableTh>Id</TableTh>
              <TableTh>Title</TableTh>
              <TableTh>Content</TableTh>
              <TableTh>Lat</TableTh>
              <TableTh>Long</TableTh>
              <TableTh>Created At</TableTh>
              <TableTh>Updated At</TableTh>
              <TableTh>Actions</TableTh>
            </tr>
          </thead>
          <tbody>
          {listOfCities.map((el) =>
              <TableTr key={el.title}>
                <TableTd>{el.id}</TableTd>
                <TableTd>{el.title}</TableTd>
                <TableTd>{el.content}</TableTd>
                <TableTd>{el.lat}</TableTd>
                <TableTd>{el.long}</TableTd>
                <TableTd>{el.created_at}</TableTd>
                <TableTd>{el.updated_at}</TableTd>
                <TableTd>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <DeleteButton onClick={() => handleClickDelete(el.id)}>Delete</DeleteButton>
                  <ModifyButton data-testid="button-modify-city" onClick={() => handleClickModalModifyCity(el.id, el.content, el.lat, el.long, el.title)}>Modify</ModifyButton>
                </div>
                </TableTd>
              </TableTr>
            )}
          </tbody>
          <tfoot>
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
          </tfoot>
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

        {/* Comment the following block of code for running tests, 
        I have an issue with globe library for running test.
        See the Readme on my github: https://github.com/steven3092/wefox */}
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
