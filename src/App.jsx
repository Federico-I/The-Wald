import React from 'react';
import styled from 'styled-components';
import Input from './ui/Input';
import Button from './ui/Button';
import Heading from './ui/Heading';
import createGlobalStyle from 'styled-components';
import Row from './ui/Row';

const StyledApp = styled.div`
  background-color: green;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row typeof='horizontal'>
          <Heading as='h1'>The Wald</Heading>
        
          <div>
            <Heading as='h2'>Check In and Out</Heading>
            <Button onClick={() => alert("Are you sure?")}>Check In</Button>
            <Button onClick={() => alert("Are you sure?")}>Check Out</Button>
          </div>
        </Row>

        <Row typeof='vertical'>
          <Heading as='h3'>Form</Heading>
          <Input type="number" placeholder='Number of guests'/>
          <Input type="number" placeholder='Number of guests'/>
        </Row>
      </StyledApp>
    </>
    
  )
}

export default App;