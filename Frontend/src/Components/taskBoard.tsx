import React, { useEffect, useState } from "react";
import { setTask, Task } from "../types";
import { tasks } from "../data";
import AddTask from "./addTask";
import TaskCard from "./taskCard";
const TaskBoard = () => {
  const [taskPop, setTaskPop] = useState<boolean>(false);
  const [task, setTask] = useState<Task[]>([]);
  const gettasks = async () => {
    const respsone = await fetch("http://localhost:3000/tasks", {
      method: "GET",
    });
    const data = await respsone.json();
    setTask(data);
  };

  const taskAdder = (task: setTask) => {
    console.log(task);
  };
  useEffect(() => {
    gettasks();
  }, []);
  return (
    <section className="w-full h-screen bg-black flex items-center justify-center text-white">
      <main className="w-[600px] h-[800px] bg-indigo-200 rounded-xl flex items-center justify-center flex-col gap-4">
        <h1 className="p-4 text-black text-2xl">Task Management:</h1>
        <div className="w-[100%] h-[600px] flex flex-col gap-2 items-center overflow-y-scroll scrollbar-hide">
          {task.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
        <button
          className="p-4 bg-green-400 text-black rounded-md hover:scale-110 cursor-pointer"
          onClick={() => setTaskPop(true)}
        >
          Add Task
        </button>
      </main>
      {taskPop && <AddTask setTaskPop={setTaskPop} taskAdder={taskAdder} />}
    </section>
  );
};

export default TaskBoard;
