import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterStyled>
        <div>
          <h4>
            <span>Created By</span> Jarif foysal
          </h4>
        </div>
      </FooterStyled>
    </>
  );
}

const FooterStyled = styled.footer`
  background-color: orange;
  padding: 20px 0;
  color: white;

  h4 {
    text-align: center;
  }
`;
