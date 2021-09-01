import axios from "axios";
import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Modal from "../modal/Modal";
import Table from "../table/Table";


const MainTable: FC= () => {
  let history = useHistory();
  const firstData: any = history.location.state;

  const [modal, setModal] = useState(false);
  const [data, setData] = useState(firstData);

  const onDelete = () => {
    setData("");
    setModal(false);
  };

  const newAccountHandler = () => {
      history.push("/")
  }


  const fetchData = async () => {
    history.push("/content")
  }

  return (
    <Container>
      <ButtonContainer>
        <NewAccountButton onClick={newAccountHandler}>
          <Title>
            ساخت اکانت جدید
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 7.99999C14.6667 4.3181 11.6819 1.33333 8.00004 1.33333C4.31814 1.33333 1.33337 4.3181 1.33337 7.99999C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 5.33333V10.6667"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.33337 8H10.6667"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Title>
        </NewAccountButton>
        <FetchButton onClick={fetchData}>دریافت اطلاعات از سرور</FetchButton>
      </ButtonContainer>
      <Label>داده ها</Label>
    <Table firstData={data} setModal={setModal}/>
      {modal && <Modal open={setModal} deleteHandler={onDelete} />}
    </Container>
  );
}

export default MainTable;


const Container = styled.div`
  position: relative;
    display: flex;
    justify-content: center;
    width: 40%;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FetchButton = styled.div`
  border: 1px solid red;
  color: red;
  width: 159px;
  height: 39px;
  border-radius: 4px;
  margin-left: 10px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const NewAccountButton = styled.div`
  border: 1px solid red;
  cursor: pointer;
  color: white;
  width: 159px;
  height: 39px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #de2d26;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & svg{
      margin: 2px 0px 0px 5px;
  }
`;

const Label = styled.div`
  font-size: 20px;
  color: #1e1b1b;
  margin-bottom: 16px;
  position: absolute;
  width: fit-content;
  top: 42%;
  left: 100%;
`;

