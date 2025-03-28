import Task from "../Database/Task.cjs";
import { connectDB, closeConn } from "../Database/dbHandler.js";

//function to update a task
const updateTask = async (taskid, field, update) => {
  await connectDB();
  try {
    let updateData = {};
    if (field === "title") updateData.title = update;
    if (field === "description") updateData.description = update;
    if (field === "status") updateData.status = update;
    const updatedTask = await Task.findOneAndUpdate(
      { taskid: taskid },
      updateData,
      { new: true }
    );
    if (!updatedTask) {
      return "Task not found";
    }
    return updatedTask;
  } catch (error) {
    console.error("Error updating task:", error.message);
    return null;
  } finally {
    await closeConn();
  }
};

export default updateTask;
