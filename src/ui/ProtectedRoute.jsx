import react, { useEffect } from 'react';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1 Load the authenticated user
  const { isPending, isAuthenticated} = useUser();

  // 2 if there is Noautheticated User, redirect to the /login
  useEffect(function(){
    if (!isAuthenticated && !isPending) navigate("/login");
  }, [isAuthenticated, isPending, navigate]);

  // 3 wWhile loading, show a spinner
  if (isPending) 
    return ( 
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4 If there IS a user, render the app
  if (isAuthenticated) return children;
};

export default ProtectedRoute;