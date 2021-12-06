import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerState, setBurgerState] = useState(false);

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
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerState(true)}>
          <a href="#">Menu</a>
        </CustomMenu>
      </RightMenu>

      <BurgerMenu show={burgerState}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerState(false)} />
        </CloseWrapper>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Solar Roof</a>
        </li>
        <li>
          <a href="#">Solar Panels</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commertial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </BurgerMenu>
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
  z-index: 1;
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

const CustomMenu = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  flex-wrap: nowrap;
`;

const BurgerMenu = styled.div`
  overflow-y: scroll;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #fff;
  width: 270px;
  z-index: 3;
  list-style: none;
  text-align: left;
  padding: 30px 30px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.35s ease-in;
  li {
    padding: 8px;
  }
  a {
    font-weight: 600;
  }
`;

const CustomClose = styled(CloseIcon)`
  color: red;
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;
