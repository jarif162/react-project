import React from "react";
import styled from "styled-components";

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px auto;
  max-width: 400px;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 10px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  transform: scale(1.2);
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
`;

const DeleteButton = styled.button`
  background: #ff5c5c;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #e04a4a;
  }
`;

export default function TaskList({ tasks }) {
  return (
    <ListWrapper>
      {tasks.map(
        (task, index) => (
          console.log(task),
          (
            <TaskItem key={index}>
              <CheckboxWrapper>
                {/* readOnly = avoid warning */}
                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  readOnly
                />
                <Label htmlFor={`task-${task.id}`}>{task.text}</Label>
              </CheckboxWrapper>
              <DeleteButton>Delete</DeleteButton>
            </TaskItem>
          )
        )
      )}
    </ListWrapper>
  );
}
