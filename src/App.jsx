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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 70 * 1000,
      staleTime: 0,
    }
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>

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
      <Toaster position='top-center' gutter={12} containerStyle={{ margin: "8px" }} toastOptions={{ success: { duration: 3000 }, error: { duration: 5000, }, style: { fontSize: "16px", maxWidth: "500px", padding: "16px 24px", backgroundColor: "var(--color-grey-0)", color: "var(--color-grey-700)"
      }, }}/>
    </QueryClientProvider>
)
};

export default App;