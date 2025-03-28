import React, { useState } from "react";
import { Task } from "../types";
import { MdDeleteOutline } from "react-icons/md";

interface TaskCardprop {
  task: Task;
  taskUpdater: (taskid: string, field: string, update: string) => void;
  taskDeleter: (taskid: string) => void;
}
const TaskCard: React.FC<TaskCardprop> = ({
  task,
  taskUpdater,
  taskDeleter,
}) => {
  const [updateDesc, setUpdateDesc] = useState<string>(task.description);
  const [updateTitle, setUpdateTitle] = useState<string>(task.title);
  const [updateStatus, setUpdateStatus] = useState<string>(task.status);

  // State for edit modes
  const [editTitle, setEditTitle] = useState<boolean>(false);
  const [editDesc, setEditDesc] = useState<boolean>(false);
  const [editStatus, setEditStatus] = useState<boolean>(false);

  const updateTask = (taskid: string, field: string, update: string) => {
    taskUpdater(taskid, field, update);
  };

  const deleteTask = (taskid: string) => {
    taskDeleter(taskid);
  };
  return (
    <div className="w-[95%] h-[300px] min-h-[300px] bg-black flex items-start px-4 justify-between flex-col rounded-md relative">
      <MdDeleteOutline
        className="size-6 opacity-20 hover:opacity-100 hover:text-red-600 absolute right-2 top-2 cursor-pointer"
        onClick={() => deleteTask(task.taskid)}
      />

      {!editTitle ? (
        <h1
          className="mt-1 p-2 hover:bg-red-200 cursor-text hover:text-black rounded-md"
          onClick={() => setEditTitle(true)}
        >
          Title: {updateTitle}
        </h1>
      ) : (
        <input
          type="text"
          className="mt-1 w-[150px] h-[40px] bg-red-200 px-4 text-black rounded-md"
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setEditTitle(false);
              updateTask(task.taskid, "title", updateTitle);
            }
          }}
          onBlur={() => {
            setEditTitle(false);
            updateTask(task.taskid, "title", updateTitle);
          }}
          autoFocus
        />
      )}

      {!editDesc ? (
        <p
          className="w-[100%] h-[200px] overflow-y-scroll p-2 hover:bg-red-200 cursor-text hover:text-black rounded-md"
          onClick={() => setEditDesc(true)}
        >
          Description: {updateDesc}
        </p>
      ) : (
        <textarea
          className="w-[100%] h-[200px] bg-red-200 p-4 text-black rounded-md"
          value={updateDesc}
          onChange={(e) => setUpdateDesc(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setEditDesc(false);
              updateTask(task.taskid, "description", updateDesc);
            }
          }}
          onBlur={() => {
            setEditDesc(false);
            updateTask(task.taskid, "description", updateDesc);
          }}
          autoFocus
        />
      )}

      {!editStatus ? (
        <h2
          className="mb-1 p-2 hover:bg-red-200 cursor-text hover:text-black rounded-md"
          onClick={() => setEditStatus(true)}
        >
          Status: {updateStatus}
        </h2>
      ) : (
        <select
          className="mb-1 p-2 bg-red-200 text-black rounded-md"
          onChange={(e) => {
            const newStatus = e.target.value;
            if (newStatus !== updateStatus) {
              setUpdateStatus(newStatus);
              updateTask(task.taskid, "status", newStatus);
            }
            setEditStatus(false);
          }}
          onBlur={() => {
            setEditStatus(false);
          }}
          autoFocus
        >
          <option>Select Status</option>
          <option value="To Do">To Do</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      )}
    </div>
  );
};

export default TaskCard;
