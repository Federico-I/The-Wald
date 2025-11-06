import react from 'react';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import styled from 'styled-components';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // 1 Load the authenticated user
  const { user, isPending} = useUser();

  // 2 wWhile loading, show a spinner
  if (isPending) return <FullPage>
    <Spinner />
  </FullPage>;

  // 3 if there is Noautheticated User, redirect to the /login
  
  
  return children;
};

export default ProtectedRoute;