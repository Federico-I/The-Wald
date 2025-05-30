import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: red;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: green;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Wald</H1>
      <Button onClick={() => alert("Are you sure?")}>Check In</Button>
      <Button onClick={() => alert("Are you sure?")}>Check Out</Button>
      <Input type="number" placeholder='Number of guests'/>
    </StyledApp>
  )
}

export default App;