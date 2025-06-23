import React from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Settings from './pages/Settings';
import NewUsers from './pages/Users';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from '../styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 70 * 1000,
    }
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles/> 
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route index element={<Navigate replace="dashoboard"/>} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="booking" element={<Bookings/>} />
            <Route path="cabin" element={<Cabins/>} />
            <Route path="newUsers" element={<NewUsers/>} />
            <Route path="settings" element={<Settings/>} />
            <Route path="account" element={<Account/>} />
            <Route path="login" element={<Login/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
)
};

export default App;