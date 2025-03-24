import Task from "../Database/Task.cjs";
import { connectDB, closeConn } from "../Database/dbHandler.js";

//function to add a task
const addTask = async (task) => {
  try {
    await connectDB();
    //create new task
    const newTask = new Task(task);
    //save that task
    await newTask.save();
    //return success
    return "Task addition completed";
  } catch (error) {
    console.error("Error adding task:", error.message);
    return null;
  } finally {
    closeConn();
  }
};

export default addTask;
