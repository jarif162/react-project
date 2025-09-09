import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <div>
        <HeaderStyled>
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
        </HeaderStyled>
      </div>
    </>
  );
}

const HeaderStyled = styled.header`
  background-color: black;

  nav ul {
    display: flex;
    gap: 20px;

    li {
      transition: 0.3s ease-in-out;
      a {
        color: #fff;
        padding: 20px 10px;
      }

      a:hover {
        background-color: orange;
      }
    }
  }
`;
