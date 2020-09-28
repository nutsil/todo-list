import React from "react";
import "./BodyList.styles.scss";
import TaskList from "../TaskList/TaskList.component";

function BodyList() {
  return (
    <div className="body-list">
      <TaskList />
    </div>
  );
}

export default BodyList;
