import React from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

export default function Form() {
    const history = useHistory();
    
    const data = () =>{
        if(history.location.state){
            return history.location.state;
        }
     return null
    }

    const { register, handleSubmit } = useForm({
        defaultValues: data() as any
    });

    const onSubmit = (i: any) => {
        const date = new Date().toLocaleDateString('fa-IR');
        const state = { ...i, date }
        history.push("/table", state)
    }
    
    return (
        <Container>
            <MainLabel>فرم زیر را پر کنید.</MainLabel>
            <FormStyle >
                <Label>نام و نام خوانوادگی</Label>
                <Input {...register("name", { required: true, maxLength: 20 })} />
                <Label>شماره موبایل</Label>
                <Input {...register("mobile")} />
                <Label>سن</Label>
                <Input type="number" {...register("age", {  max: 99 })} />
                <Label>ایمیل</Label>
                <Input type="email" {...register("mail" )} />
                <Button onClick={handleSubmit(onSubmit)}>ساخت اکانت</Button>
            </FormStyle>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 480px;
width: 430px;
background: #ffff;
box-shadow: 0px 1px 2px 0px #00000014;
border-radius: 6px;
direction: rtl;
`

const FormStyle = styled.form`
display: flex;
flex-direction:column;
padding-bottom: 10px;

`

const Button = styled.div`
background: red;
margin: 16px;
border: none;
height: 48px;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
cursor: pointer;

`
const Input = styled.input`
height: 48px;
margin: 0px 16px;
border-radius: 4px;
`
const Label = styled.label`
margin: 5px 16px 8px 16px;
color: #666464;
`
const MainLabel = styled.div`
color: #1E1B1B;
font-size: 18px;
margin: 17px 16px 12px 16px;
`