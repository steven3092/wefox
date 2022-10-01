import React, {useState} from "react";
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
} from '../styles'
import {
  createWefoxData
} from '../helpers/api-requests';


interface Props {
  setIsShowingModalAddCity: React.Dispatch<React.SetStateAction<boolean | null >>;
  setRefreshing: React.Dispatch<React.SetStateAction<boolean | null>>;
  refreshing: boolean | null;
}

const ModalAddCity: FC<Props> = ({
  setIsShowingModalAddCity,
  setRefreshing,
  refreshing,
}) => {
  const [addCity, setAddCity] = useState<object>({
    content: '',
    lat: '',
    long: '',
    title: '',
    image_url:'',
    created_at: '',
    updated_at: '',
  });

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    createWefoxData(addCity);
    setIsShowingModalAddCity(false);
    setRefreshing(!refreshing);
  };

  return (
        <>
          <Container>
            <ModalBorder>
            <div className="modal">
              <ModalHeader>
              <CloseButton type='button' onClick={() => setIsShowingModalAddCity(false)}>
                    X
                  </CloseButton>
                <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
                  <Title>Info : Add a new city</Title>
                </div>
              <Content>
              <Form onSubmit={(e) => handleSubmitForm(e)}>
                <div>
                  Title : <Input required onChange={(e) => {
                    setAddCity({...addCity, title: e.target.value});
                  }}/>
                </div>
                <div>
                  Content : <TextArea required onChange={(e) => {
                    setAddCity({...addCity, content: e.target.value});
                  }}/>
                </div>
                <div>
                  Lat : <Input required onChange={(e) => {
                    setAddCity({...addCity, lat: e.target.value});
                  }}/>
                </div>
                <div>
                  Long : <Input required onChange={(e) => {
                    setAddCity({...addCity, long: e.target.value});
                  }}/>
                </div>
                <div>
                  <InputSubmit type="submit" value={"Submit"}/>
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

export default ModalAddCity;
