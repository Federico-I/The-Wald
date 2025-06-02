import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
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