import React from 'react';
import styled from 'styled-components';
import Input from './ui/Input';
import Button from './ui/Button';
import Heading from './ui/Heading';

const StyledApp = styled.div`
  background-color: green;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <Heading>The Wald</Heading>
      <Button onClick={() => alert("Are you sure?")}>Check Out</Button>
      <Input type="number" placeholder='Number of guests'/>
    </StyledApp>
  )
}

export default App;