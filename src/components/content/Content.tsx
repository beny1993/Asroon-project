import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Table from '../table/Table'
import { useHistory } from "react-router-dom";

let url = "data.json"

export default function Content() {
const [data, setData] = useState<any>()
let history = useHistory();

useEffect(() => {
  axios(url).then(res => setData(res.data) )
}, [])
const buttonHandler = () => {
  history.push("/")
}

    return  (
      <>
        <Table firstData={data}/> 
        <Button onClick={buttonHandler}>بازگشت به صفحه قبل </Button>
        </>
      ) 
}
const Button = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 14px;
  color: #666464;
  cursor: pointer;
`