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
  Title,
  Form,
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
}) => {

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    patchWefoxDataList(patchCity);
    setIsShowingModalModifyCity(false);
    setRefreshing(!refreshing);
  };

  return (  
       <>
          <Container>
            <ModalBorder>
            <div className="modal">
              <ModalHeader>
              <CloseButton type='button' onClick={() => setIsShowingModalModifyCity(false)} >
                    X
                  </CloseButton>
                <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
                  <Title>Info : Modify the current city</Title>
                </div>
              <Content>
              <Form onSubmit={(e) => handleSubmitForm(e)}>
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
                  <InputSubmit type="submit" value={"Modify"}/>
                </div>
              </Form>
              </Content>
              </ModalHeader>
            </div>
            </ModalBorder>
          </Container>
        </>
  );
}
        
export default ModalModifyCity;
