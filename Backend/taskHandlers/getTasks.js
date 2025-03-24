import Task from "../Database/Task.cjs";
import { connectDB, closeConn } from "../Database/dbHandler.js";

//function to get all tasks
const getTasks = async () => {
  await connectDB();
  try {
    const tasks = await Task.find();
    if (!tasks) {
      // console.log("no task found");
      return "no tasks found";
    }
    return tasks;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  } finally {
    await closeConn();
  }
};

export default getTasks;
