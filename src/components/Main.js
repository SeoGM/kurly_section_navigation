import React from "react";
import styled from "@emotion/styled";

export default function Main({ image, alt }) {
  return <StyledImg src={image} alt={alt} />;
}

const StyledImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 540px;
  border: 1px solid;
`;
