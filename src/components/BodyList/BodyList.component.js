import React from "react";
import "./BodyList.styles.scss";
import TaskList from "../TaskList/TaskList.component";
import NewTaskButton from "../NewTaskButton/NewTaskButton.component";

function BodyList() {
  return (
    <div className="body-list">
      <TaskList />
      <NewTaskButton />
    </div>
  );
}

export default BodyList;
