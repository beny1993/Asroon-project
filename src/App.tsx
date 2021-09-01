import React from 'react';
import styled from 'styled-components'
import Form from './components/form/Form';
import {
  Switch,
  Route
} from "react-router-dom";
import MainTable from './components/mainTable/MainTable';
import Content from './components/content/Content';

function App() {
  return (
    <Container >
      <Logo />
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/table">
          <MainTable />
        </Route>
        <Route path="/content">
          <Content />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;

const Container = styled.div`
background-color: #E5E5E5;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Logo = styled.div`
width: 140px;
height: 132px;
margin-bottom: 80px;
background-image: url("/logo.png");
background-size: cover;
align-self: center;
`