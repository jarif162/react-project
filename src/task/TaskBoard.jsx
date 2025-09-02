import React from "react";
import TaskHeader from "./TaskHeader";
import AddTask from "./AddTask";
import FilterTask from "./FilterTask";
import TaskList from "./TaskList";
import TaskFooter from "./TaskFooter";

export default function TaskBoard() {
  return (
    <>
      <div>
        <TaskHeader />
        <AddTask />
        <FilterTask />
        <TaskList />
        <TaskFooter />
      </div>
    </>
  );
}
