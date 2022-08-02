import React, { useState } from "react";
import type { FC } from 'react';
import {
  Container,
  Content,
  ModalBorder,
  ModalHeader,
  Input,
  InputSubmit,
  TextArea,
  CloseButton,
} from './style';
import {
  patchWefoxDataList
} from './api-request';

interface Props {
  setPatchCity?: any;
  patchCity?: any;
  setIsShowingModalModifyCity?: any;
  setRefreshing?: any;
  refreshing?: any;
}


const ModalModifyCity: FC<Props> = ({
  setPatchCity,
  patchCity,
  setIsShowingModalModifyCity,
  setRefreshing,
  refreshing,
}) => {
  const [modifyCity, setModifyCity] = useState({
    content: '',
    lat: '',
    long: '',
    title: '',
    image_url:'',
    created_at: '',
    updated_at: '',
  });

  console.log('patchCity', patchCity);
  
  return (
        <>
          <Container>
            <ModalBorder>
            <div className="modal">
              <ModalHeader>
              <CloseButton type="button" onClick={() => setIsShowingModalModifyCity(false)} >
                    X
                  </CloseButton>
                <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
                  <h4>Modify the current user</h4>
                </div>
              </ModalHeader>
              <Content>
              <form onSubmit={(e) => {
                e.preventDefault();
                patchWefoxDataList(patchCity);
                // handleClickPatch(userId, patchName, patchLastName);
                setIsShowingModalModifyCity(false);
                setRefreshing(!refreshing);
              }}>
                <div>
                  Content : <TextArea value={patchCity.content} onChange={(e: any) => {
                    setPatchCity({...patchCity, content: e.target.value});
                  }}/>
                </div>
                <div>
                  Lat : <Input value={patchCity.lat} onChange={(e: any) => {
                    setPatchCity({...patchCity, lat: e.target.value});
                  }}/>
                </div>
                <div>
                  Long : <Input value={patchCity.long} onChange={(e: any) => {
                    setPatchCity({...patchCity, long: e.target.value});
                  }}/>
                </div>
                <div>
                  Title : <Input value={patchCity.title} onChange={(e: any) => {
                    setPatchCity({...patchCity, title: e.target.value});
                  }}/>
                </div>
                <div>
                  <InputSubmit type="submit" value={"Submit"}/>
                </div>
              </form>
              </Content>
            </div>
            </ModalBorder>
          </Container>
        </>
  );
}
export default ModalModifyCity;
