import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Logo>
        <img src="/images/logo.png" />
      </Logo>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="$">Shop</a>
        <a href="$">Account</a>
        <a href="$">Menu</a>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  min-height: 60px;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.div`
  img {
    width: 120px;
    background-size: contain;
  }
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-weight: 600;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  flex-wrap: nowrap;
  gap: 30px;
`;
