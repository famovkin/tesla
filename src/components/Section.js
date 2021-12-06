import React from "react";
import styled, { keyframes } from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Toucless Delivery</p>
      </ItemText>
      <GroupButtons>
        <TextButtons>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </TextButtons>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </GroupButtons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("images/model-s.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const GroupButtons = styled.div``;

const TextButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size 12px;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0, 65;
  color: #000;
`;

const animateDown = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
      transform: translateY(0);
  }

  40% {  
      transform: translateY(5px);
  }

  60% {
    tranform: translateY(8px);
  }
}
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  transform: translateY(10px);
  animation: ${animateDown} infinite 1.5s;
`;
