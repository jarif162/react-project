import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  background: #ffffff;
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #4cafef;
    box-shadow: 0 0 5px rgba(76, 175, 239, 0.4);
  }
`;

const Button = styled.button`
  padding: 10px 18px;
  font-size: 16px;
  font-weight: 500;
  background: #4cafef;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #3a9bdc;
  }
`;

export default function AddTask({ onAddToTask }) {
  const [newtask, setNewTask] = useState("");

  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddToTask(newtask);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name="task"
          type="text"
          value={newtask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <Button type="submit" onClick={onAddToTask}>
          Add Task
        </Button>
      </Form>
    </Container>
  );
}
