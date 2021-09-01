import React from 'react';
import styled from 'styled-components'
import Form from './components/form/Form';
import {
  Switch,
  Route
} from "react-router-dom";
import MainTable from './components/mainTable/MainTable';

function App() {
  return (
    <Container >
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/table">
          <MainTable />
        </Route>
        <Route path="/content">
          <Form />
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
`
