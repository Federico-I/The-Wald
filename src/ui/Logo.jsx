import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src="" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
