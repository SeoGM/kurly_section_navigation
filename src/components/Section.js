import React from "react";
import styled from "@emotion/styled";

export default function Section({ data }) {
  return (
    <StyledSection id={data.id}>
      <h2>{data.title}</h2>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 110vh;
  font-size: 22px;
  font-weight: bold;
  color: #fff;

  &:nth-of-type(1) {
    background-color: rgb(206, 17, 17);
  }
  &:nth-of-type(2) {
    background-color: rgb(0, 140, 255);
  }
  &:nth-of-type(3) {
    background-color: rgb(10, 184, 111);
  }
`;
