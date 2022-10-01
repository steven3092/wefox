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
  setPatchCity: React.Dispatch<React.SetStateAction< {
    id: number;
    content: string;
    lat: string;
    long: string;
    title: string;
  }>>;
  patchCity: {
    id: number;
    content: string;
    lat: string;
    long: string;
    title: string;
  };
  setIsShowingModalModifyCity: React.Dispatch<React.SetStateAction<boolean | null>>;
  setRefreshing: React.Dispatch<React.SetStateAction<boolean | null>>;
  refreshing: boolean | null;
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
    setTimeout(() => {
      setRefreshing(!refreshing);
    }, 100)
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
                  Title : <Input required value={patchCity.title} onChange={(e) => {
                    setPatchCity({...patchCity, title: e.target.value});
                  }}/>
                </div>
                <div>
                  Content : <TextArea required value={patchCity.content} onChange={(e) => {
                    setPatchCity({...patchCity, content: e.target.value});
                  }}/>
                </div>
                <div>
                  Lat : <Input required value={patchCity.lat} onChange={(e) => {
                    setPatchCity({...patchCity, lat: e.target.value});
                  }}/>
                </div>
                <div>
                  Long : <Input required value={patchCity.long} onChange={(e) => {
                    setPatchCity({...patchCity, long: e.target.value});
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
