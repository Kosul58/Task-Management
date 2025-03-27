import Task from "../Database/Task.cjs";
import { connectDB, closeConn } from "../Database/dbHandler.js";

//function to delete a task
const deleteTask = async (taskid) => {
  await connectDB();
  try {
    //search and delete tasks based on task title
    // console.log(task.title);
    const deletedTask = await Task.findOneAndDelete({ _id: taskid });
    if (!deletedTask) {
      // console.log("no task found");
      return "no task found";
    }
    return "Task deleted";
  } catch (error) {
    console.error("Error deleting task:", error.message);
    return null;
  } finally {
    await closeConn();
  }
};

export default deleteTask;
