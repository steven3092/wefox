import React from "react";
import {
  Container,
  Content,
  ModalBorder,
  ModalHeader,
  Input,
  InputSubmit,
} from './style'

const Modal = (
  setIsShowingModalAddUser: any, 
  setAddName: any, 
  setAddLastName: any, 
  postUser: any 
) =>
        <>
          <Container>
            <ModalBorder>
            <div className="modal">
              <ModalHeader>
              <button type="button" onClick={() => setIsShowingModalAddUser(false)} style={{display: 'flex', justifyContent: 'right', color: 'white', marginRight: '8px', cursor: 'pointer'}}>
                    X
                  </button>
                <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
                  <h4>Add a new user</h4>
                </div>
              </ModalHeader>
              <Content>
              <form onSubmit={(e) => {
                e.preventDefault();
                postUser();
                setIsShowingModalAddUser(false);
              }}>
                <div>
                  Name : <Input onChange={(e: any) => {
                    setAddName(e.target.value);
                  }}/>
                </div>
                <div>
                  Last name : <Input onChange={(e: any) => {
                    setAddLastName(e.target.value);
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

export default Modal;
