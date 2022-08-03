import {useState} from "react";
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
} from '../styles'
import {
  createWefoxData
} from '../helpers/api-requests';


interface Props {
  setIsShowingModalAddCity?: any;
  setRefreshing?: any;
  refreshing?: any;
}

const ModalAddCity: FC<Props> = ({
  setIsShowingModalAddCity,
  setRefreshing,
  refreshing,
}) => {
  const [addCity, setAddCity] = useState({
    content: '',
    lat: '',
    long: '',
    title: '',
    image_url:'',
    created_at: '',
    updated_at: '',
  });
  return (
        <>
          <Container>
            <ModalBorder>
            <div className="modal">
              <ModalHeader>
              <CloseButton onClick={() => setIsShowingModalAddCity(false)}>
                    X
                  </CloseButton>
                <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
                  <h4>Add a new city</h4>
                </div>
              <Content>
              <form onSubmit={(e) => {
                e.preventDefault();
                createWefoxData(addCity);
                setIsShowingModalAddCity(false);
                setRefreshing(!refreshing);
              }}>
                <div>
                  Content : <TextArea onChange={(e: any) => {
                    setAddCity({...addCity, content: e.target.value});
                  }}/>
                </div>
                <div>
                  Lat : <Input onChange={(e: any) => {
                    setAddCity({...addCity, lat: e.target.value});
                  }}/>
                </div>
                <div>
                  Long : <Input onChange={(e: any) => {
                    setAddCity({...addCity, long: e.target.value});
                  }}/>
                </div>
                <div>
                  Title : <Input onChange={(e: any) => {
                    setAddCity({...addCity, title: e.target.value});
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
  );
}

export default ModalAddCity;
