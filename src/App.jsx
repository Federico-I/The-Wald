import React from 'react';
import styled from 'styled-components';
import Input from './ui/Input';
import Button from './ui/Button';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const StyledApp = styled.div`
  background-color: green;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Wald</H1>
      <Button onClick={() => alert("Are you sure?")}>Check Out</Button>
      <Input type="number" placeholder='Number of guests'/>
    </StyledApp>
  )
}

export default App;