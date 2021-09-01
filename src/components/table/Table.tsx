import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface TableData {
    name: string;
    mobile: string;
    age: number;
    mail: string;
    date: string;
}
interface TableProps {
    firstData: TableData;
    setModal?: (i: boolean) => void;
    button?: boolean;
}

const Table: FC<TableProps>= (props) => {
    const {firstData, setModal, button} = props;
  let history = useHistory();


const editHandler = () => {
    history.push("/", firstData)
}

  return (
    <Container>
      <TableStyle>
        <tr>
          <THead>نام و نام خوانوادگی</THead>
          <THead>شماره موبایل</THead>
          <THead>سن</THead>
          <THead>ایمیل</THead>
          <THead>تاریخ ایجاد</THead>
          <THead></THead>
          <THead></THead>
        </tr>
        <tr>
          <TBody>{firstData?.name}</TBody>
          <TBody>{firstData?.mobile}</TBody>
          <TBody>{firstData?.age}</TBody>
          <TBody>{firstData?.mail}</TBody>
          <TBody>{firstData?.date}</TBody>
          <td>
            {button && (
              <Edit onClick={editHandler}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33325 2.66667H2.66659C2.31296 2.66667 1.97382 2.80715 1.72378 3.0572C1.47373 3.30724 1.33325 3.64638 1.33325 4.00001V13.3333C1.33325 13.687 1.47373 14.0261 1.72378 14.2761C1.97382 14.5262 2.31296 14.6667 2.66659 14.6667H11.9999C12.3535 14.6667 12.6927 14.5262 12.9427 14.2761C13.1928 14.0261 13.3333 13.687 13.3333 13.3333V8.66667"
                    stroke="#666464"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.3333 1.66667C12.5985 1.40145 12.9582 1.25246 13.3333 1.25246C13.7083 1.25246 14.068 1.40145 14.3332 1.66667C14.5985 1.93189 14.7475 2.2916 14.7475 2.66667C14.7475 3.04174 14.5985 3.40145 14.3332 3.66667L7.99992 10L5.33325 10.6667L5.99992 8L12.3333 1.66667Z"
                    stroke="#666464"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Edit>
            )}
          </td>
          <td>
            {button && (
              <Delete onClick={() => setModal!(true)}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4H3.33333H14"
                    stroke="#DE2D26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33337 4V2.66667C5.33337 2.31305 5.47385 1.97391 5.7239 1.72386C5.97395 1.47381 6.31309 1.33334 6.66671 1.33334H9.33337C9.687 1.33334 10.0261 1.47381 10.2762 1.72386C10.5262 1.97391 10.6667 2.31305 10.6667 2.66667V4M12.6667 4V13.3333C12.6667 13.687 12.5262 14.0261 12.2762 14.2761C12.0261 14.5262 11.687 14.6667 11.3334 14.6667H4.66671C4.31309 14.6667 3.97395 14.5262 3.7239 14.2761C3.47385 14.0261 3.33337 13.687 3.33337 13.3333V4H12.6667Z"
                    stroke="#DE2D26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66663 7.33334V11.3333"
                    stroke="#DE2D26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.33337 7.33334V11.3333"
                    stroke="#DE2D26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Delete>
            )}
          </td>
        </tr>
      </TableStyle>
    </Container>
  );
}

export default Table;


const Container = styled.div`
  position: relative;
`;


const TableStyle = styled.table`
  height: 112px;
  width: 840px;
  direction: rtl;
  background-color: white;
  border-radius: 6px;
`;

const THead = styled.th`
  background: rgba(219, 219, 219, 0.08);
  color: #666464;
  opacity: 68%;
  font-size: 12px;
  text-align: right;
  padding-right: 24px;
`;

const TBody = styled.td`
  color: #666464;
  direction: rtl;
  text-align: center;
`;

const Delete = styled.div`
  cursor: pointer;
`;

const Edit = styled.div`
  cursor: pointer;
`;
