import React, { FC } from 'react'
import styled from 'styled-components'

interface ModalProps {
    open: (i: boolean) => void
    deleteHandler: () => void
}

const Modal:FC<ModalProps> = (props) => {
    const {open, deleteHandler} = props
    return (
        <Container>
            <Box>
                <CloseSvg onClick={() => open(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="#666464" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="#666464" stroke-linecap="round" stroke-linejoin="round"/>
</svg></CloseSvg>
                <Title>حذف ردیف</Title>
                <Text>آیا از حذف این ردیف مطمعن هستید؟</Text>
                <Button onClick={deleteHandler}>حذف</Button>
            </Box>
        </Container>
    )
}
export default Modal;

const Container = styled.div`
background-color: rgb(30 27 27 / 52%);
width: 100vw;
height: 100vh;
position: absolute;
left: -75%;
display: flex;
justify-content: center;
align-items: center;
`
const Box = styled.div`
width: 360px;
height: 185px;
background-color: white;
margin-top: 25rem;
display: flex;
flex-direction: column;
direction: rtl;
position: relative;
border-radius: 4px;
`

const Title = styled.div`
font-size: 18px;
color: #666464;
position: absolute;
width: 83px;
height: 16px;
right: 16px;
top: 16px;
`
const Text = styled.div`
font-size: 16px;
color: #666464;
position: absolute;
width: 254px;
height: 16px;
right: 16px;
top: 56px;

`

const Button = styled.div`
color: white;
background: #DE2D26;
border-radius: 4px;
font-size: 14px;
width: 80px;
height: 32px;
position: absolute;
width: 80px;
height: 32px;
left: 16px;
bottom: 16px;
display: flex;
align-items: center;
letter-spacing: -0.05em;
justify-content: center;
cursor: pointer;
`

const CloseSvg = styled.div`
position: absolute;
width: 24px;
height: 24px;
right: 320px;
top: 16px;
cursor: pointer;
`