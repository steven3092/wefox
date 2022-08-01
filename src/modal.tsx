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
  setIsShowing: any, 
  patchName: any, 
  setPatchName: any, 
  patchLastName: any, 
  setPatchLastName: any, 
  userId: any, 
  handleClickPatch: any 
) =>
        <>
          <Container>
            <ModalBorder>
            <div className="modal">
              <ModalHeader>
              <button type="button" onClick={() => setIsShowing(false)} style={{display: 'flex', justifyContent: 'right', color: 'white', marginRight: '8px', cursor: 'pointer'}}>
                    X
                  </button>
                <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
                  <h4>Modify the current user</h4>
                </div>
              </ModalHeader>
              <Content>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleClickPatch(userId, patchName, patchLastName);
                setIsShowing(false);
              }}>
                <div>
                  Name : <Input value={patchName} onChange={(e: any) => {
                    setPatchName(e.target.value);
                  }}/>
                </div>
                <div>
                  Last name : <Input value={patchLastName} onChange={(e: any) => {
                    setPatchLastName(e.target.value);
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
