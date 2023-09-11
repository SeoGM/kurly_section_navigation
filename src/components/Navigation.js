import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-scroll";

export default function Navigation({ items, bgColor }) {
  function renderItems() {
    return items.map((item) => {
      return (
        <Link
          key={item.id}
          activeClass="active"
          to={item.id}
          offset={-112}
          spy
          isDynamic
        >
          {item.title}
        </Link>
      );
    });
  }

  return (
    <StyledNavWrap bgColor={bgColor}>
      <StyledNavList>{renderItems()}</StyledNavList>
    </StyledNavWrap>
  );
}

const StyledNavWrap = styled.nav`
  position: sticky;
  top: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 1050px;
  width: 100%;

  a {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    padding: 15px 20px;
    font-size: 18px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    opacity: 0.3;

    &.active {
      opacity: 1;
    }
  }
`;
