import React, { useState } from "react";
import { Task } from "../types";
import { MdCancel } from "react-icons/md";
interface TaskProps {
  setTaskPop: React.Dispatch<React.SetStateAction<boolean>>;
  taskAdder: (task: Task) => void;
}
const addTask: React.FC<TaskProps> = ({ setTaskPop, taskAdder }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const generateId = (): string => {
    // Timestamp component (13 digits)
    const timestamp = Date.now().toString(36);

    // Random component (11 characters)
    const randomPart = Math.random().toString(36).substring(2, 15);

    // Combine both parts to create a more unique ID
    return `${timestamp}-${randomPart}`;
  };

  const addtask = () => {
    let task: Task = {
      taskid: generateId(),
      title: title,
      description: description,
      status: status,
    };
    taskAdder(task);
  };

  return (
    <div className="w-[400px] h-[650px] absolute z-20 bg-red-200 text-black flex items-center justify-center flex-col gap-4 rounded-xl">
      <div
        className="w-6 h-6 absolute top-4 right-4 hover:text-red-600 cursor-pointer flex items-center justify-center "
        onClick={() => setTaskPop(false)}
      >
        <MdCancel size={30} />
      </div>
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
