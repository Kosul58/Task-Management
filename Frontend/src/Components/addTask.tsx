import React, { useState } from "react";
import { setTask, Task } from "../types";
interface TaskProps {
  setTaskPop: React.Dispatch<React.SetStateAction<boolean>>;
  taskAdder: (tasj: setTask) => void;
}
const addTask: React.FC<TaskProps> = ({ setTaskPop, taskAdder }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const addtask = () => {
    let task: setTask = {
      title: title,
      description: description,
      status: status,
    };
    taskAdder(task);
  };

  return (
    <div className="w-[400px] h-[650px] absolute z-20 bg-red-200 text-black flex items-center justify-center flex-col gap-4">
      <div
        className="w-6 h-6 absolute top-4 right-4 bg-red-500 rounded-full hover:scale-110 cursor-pointer hover:bg-red-800"
        onClick={() => setTaskPop(false)}
      ></div>
      <input
        type="text"
        placeholder="task title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-[300px] h-[60px] bg-white p-4 rounded-md"
      />
      <textarea
        placeholder="task description"
        onChange={(e) => setDescription(e.target.value)}
        className="w-[300px] h-[300px] bg-white p-4 rounded-md"
      />
      <input
        type="text"
        placeholder="status"
        onChange={(e) => setStatus(e.target.value)}
        className="w-[300px] h-[60px] bg-white p-4 rounded-md"
      />
      <button
        className="p-4 rounded-md bg-green-400 cursor-pointer"
        onClick={() => addtask()}
      >
        Add
      </button>
    </div>
  );
};

export default addTask;
