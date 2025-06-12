import React from 'react';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px sold var(--color-grey-100);
`;

function Header() {
  return (
    <StyledHeader>Header</StyledHeader>
  )
};

export default Header;