import React from "react";
import styled from "styled-components";

export default function TaskHeader() {
  return (
    <>
      <StyledTaskHeader>
        <h1>TaskHeader</h1>
      </StyledTaskHeader>
    </>
  );
}

const StyledTaskHeader = styled.div`
  background-color: #3881f5;
  padding: 20px 0;

  h1 {
    font-weight: bold;
    color: white;
    text-align: center;
  }
`;
