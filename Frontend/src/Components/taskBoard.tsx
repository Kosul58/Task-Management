import React, { useEffect, useState } from "react";
import { Task } from "../types";
import AddTask from "./addTask";
import TaskCard from "./taskCard";
const TaskBoard = () => {
  const [taskPop, setTaskPop] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  //create task
  const taskAdder = async (task: Task) => {
    setTaskPop(false);
    const response = await fetch("http://localhost:3000/taskapi/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    //check if response from db is ok then add task to tasks array.
    setTasks([...tasks, task]);
  };

  //read tasks
  const gettasks = async () => {
    const respsone = await fetch("http://localhost:3000/taskapi/tasks", {
      method: "GET",
    });
    const data = await respsone.json();
    setTasks(data);
  };

  //update task
  const taskUpdater = async (taskid: string, field: string, update: string) => {
    console.log(taskid, field, update);
    const updateTask = await fetch("http://localhost:3000/taskapi/task", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskid: taskid, field: field, update: update }),
    });
    const data = await updateTask.json();
    console.log(data);
    //check if update is succesfull or not
  };

  //delete task
  const taskDeleter = async (taskid: string) => {
    console.log(taskid);
    const deleteop = await fetch("http://localhost:3000/taskapi/task", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskid }),
    });
    const data = await deleteop.json();
    console.log(data);
    setTasks(tasks.filter((task) => task.taskid !== taskid));
  };

  useEffect(() => {
    gettasks();
  }, []);

  return (
    <section className="w-full h-screen bg-black flex items-center justify-center text-white">
      <main className="w-[600px] h-[700px] bg-indigo-200 rounded-xl flex items-center justify-center flex-col gap-4 m-2">
        <h1 className="p-4 text-black text-2xl">Task Management:</h1>
        <div className="w-[100%] h-[600px] flex flex-col gap-2 items-center overflow-y-scroll scrollbar-hide">
          {tasks.map((task) => (
            <TaskCard
              key={task.taskid}
              task={task}
              taskUpdater={taskUpdater}
              taskDeleter={taskDeleter}
            />
          ))}
        </div>
        <button
          className="p-4 bg-green-400 text-black rounded-md hover:scale-110 cursor-pointer mb-2"
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
