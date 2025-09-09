import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  align-items: center;
  gap: 12px;
  background: #ffffff;
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  width: fit-content;
`;

const Select = styled.select`
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #4cafef;
    box-shadow: 0 0 5px rgba(76, 175, 239, 0.4);
  }
`;

//& is used to refer to the current component in styled-components

const Info = styled.span`
  font-size: 14px;
  color: #555;
`;

export default function FilterTask() {
  return (
    <Wrapper>
      <Select name="filterTask" id="filterTask">
        <option value="All Task">All Task</option>
        <option value="Completed Task">Completed Task</option>
        <option value="Active Task">Active Task</option>
      </Select>
      <Info>total 3 task</Info>
    </Wrapper>
  );
}
