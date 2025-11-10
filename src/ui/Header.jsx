import react from 'react';
import Logout from '../features/authentication/Logout';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px sold var(--color-grey-100);
`;

function Header() {
  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  )
};

export default Header;