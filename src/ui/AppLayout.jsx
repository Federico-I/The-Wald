import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header';
import styled from 'styled-components';

const main = styled.main`
  background-color: greenyellow;
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;