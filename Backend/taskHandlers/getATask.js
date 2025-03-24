import Task from "../Database/Task.cjs";
import { connectDB, closeConn } from "../Database/dbHandler.js";

const getATask = async (title) => {
  await connectDB();
  try {
    // console.log(task);
    const task = await Task.findOne({ title: title });
    if (!task) {
      // console.log("no task found");
      return "no task found";
    }
    return task;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  } finally {
    await closeConn();
  }
};

export default getATask;
