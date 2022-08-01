import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`

export const ModalBorder = styled.div`
    z-index: 2;
    width: 40%;
    height: 40%;
    background-color: #ffffff;
`

export const ModalHeader = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0066ff;
`

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

export const InputSubmit = styled.input`
    width: 100%;
    background-color: #0066ff;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`
  
  /* Modal Content/Box */
  export const Content = styled.div`
    background-color: #fefefe;
    margin: 1% auto;
    padding: 20px;
    width: 80%;
  `

  export const Table = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
`
  export const TableTh = styled.th`
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #0066ff;
    color: white;
    border: 1px solid #ddd;
    padding: 8px;
`
  export const TableTd = styled.td`
    border: 1px solid #ddd;
    text-align: center;
    padding: 8px;
`
  export const TableTr = styled.tr`
    &:nth-child(even){
      background-color: #f2f2f2;
    }
`
export const DeleteButton = styled.button`
    margin: 0 auto;
    padding: 0.25rem 1.5rem;
    display: flex;
    background-color: #ff4d4d;
    border: 1px solid transparent;
    color: #ffffff;
    font-family: arial;
    font-weight: bold;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #ffffff;
        color: #ff4d4d;
        border-color: #ff4d4d;
    }
`

export const ModifyButton = styled.button`
    margin: 0 auto;
    padding: 0.25rem 1.5rem;
    display: flex;
    background-color: #6699ff;
    border: 1px solid transparent;
    color: #ffffff;
    font-family: arial;
    font-weight: bold;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #ffffff;
        color: #6699ff;
        border-color: #6699ff;
    }
`

export const AddButton = styled.button`
    margin: 0 auto;
    padding: 0.25rem 1.5rem;
    display: flex;
    background-color: #33cc33;
    border: 1px solid transparent;
    color: #ffffff;
    font-family: arial;
    font-weight: bold;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #ffffff;
        color: #33cc33;
        border-color: #33cc33;
    }
`