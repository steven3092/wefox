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
} from '../styles';
import {
  patchWefoxDataList
} from '../helpers/api-requests';

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
}) => 
       <>
          <Container>
            <ModalBorder>
            <div className="modal">
              <ModalHeader>
              <CloseButton onClick={() => setIsShowingModalModifyCity(false)} >
                    X
                  </CloseButton>
                <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
                  <h4>Modify the current user</h4>
                </div>
              <Content>
              <form onSubmit={(e) => {
                e.preventDefault();
                patchWefoxDataList(patchCity);
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
              </ModalHeader>
            </div>
            </ModalBorder>
          </Container>
        </>
        
export default ModalModifyCity;
