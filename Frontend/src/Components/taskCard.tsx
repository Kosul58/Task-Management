import React from "react";
import { Task } from "../types";

const taskCard = ({ task }: { task: Task }) => {
  return (
    <>
      <div className="w-[95%] h-[150px] min-h-[150px] bg-black flex items-start px-4 justify-center flex-col rounded-md">
        <h1>Title: {task.title}</h1>
        <p>Description: {task.description}</p>
        <h2>Status: {task.status}</h2>
      </div>
    </>
  );
};

export default taskCard;
