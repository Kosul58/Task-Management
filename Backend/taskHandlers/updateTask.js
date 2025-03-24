import Task from "../Database/Task.cjs";
import { connectDB, closeConn } from "../Database/dbHandler.js";

//function to update a task
const updateTask = async (task, newTitle, newStatus) => {
  await connectDB();
  try {
    let updateData = {};
    if (newTitle) updateData.title = newTitle;
    if (newStatus) updateData.status = newStatus;
    const updatedTask = await Task.findOneAndUpdate(
      { title: task.title },
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
