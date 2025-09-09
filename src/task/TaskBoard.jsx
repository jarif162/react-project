import React, { useState } from "react";
import TaskHeader from "./TaskHeader";
import AddTask from "./AddTask";
import FilterTask from "./FilterTask";
import TaskList from "./TaskList";
import TaskFooter from "./TaskFooter";
import styled from "styled-components";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Sample Task 1", completed: false },
    { id: 2, text: "Sample Task 2", completed: true },
    { id: 3, text: "Sample Task 3", completed: false },
  ]);

  const handleAddtoTask = (task) => {
    // if (!task.text.trim()) {
    //   return;
    // }
    const newTask = {
      id: crypto.randomUUID(), // generates a unique id- crypto is a built-in module in js
      task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <StyledTaskBoard>
        <div>
          <TaskHeader />
          <AddTask onAddToTask={handleAddtoTask} />
          <FilterTask />
          <TaskList tasks={tasks} />
          <TaskFooter />
        </div>
      </StyledTaskBoard>
    </>
  );
}

const StyledTaskBoard = styled.div`
  background-color: #fff;
  width: 60%;
  margin: 0 auto;
  padding: 30px;
`;
