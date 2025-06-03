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
      <Heading as='h1'>The Wald</Heading>
      <Heading as='h2'>Check In and Out</Heading>
      <Button onClick={() => alert("Are you sure?")}>Check In</Button>
      <Button onClick={() => alert("Are you sure?")}>Check Out</Button>
      
      <Heading as='h3'>The Wald</Heading>
      <Input type="number" placeholder='Number of guests'/>
      <Input type="number" placeholder='Number of guests'/>
    </StyledApp>
  )
}

export default App;