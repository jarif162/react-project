import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Task</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

const HeaderStyled = styled.header`
  background-color: black;
`;
