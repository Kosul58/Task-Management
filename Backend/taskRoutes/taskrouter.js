import express from "express";
import addTask from "../taskHandlers/addTask.js";
import deleteTask from "../taskHandlers/deleteTask.js";
import getATask from "../taskHandlers/getATask.js";
import getTasks from "../taskHandlers/getTasks.js";
import updateTask from "../taskHandlers/updateTask.js";

const router = express.Router();

router.get("/", (req, res) => res.send("Welcome To Task Management Website"));

router.get("/task", async (req, res) => {
  const taskid = req.body.taskid;
  const result = await getATask(taskid);
  res.json(result);
});

router.get("/tasks", async (req, res) => {
  const result = await getTasks();
  res.json(result);
});

router.post("/task", async (req, res) => {
  const task = req.body;
  const result = await addTask(task);
  res.json(result);
});

router.put("/task", async (req, res) => {
  const { taskid, newTitle, newStatus } = req.body;
  const result = await updateTask(taskid, newTitle, newStatus);
  res.json(result);
});

router.delete("/task", async (req, res) => {
  const taskid = req.body.taskid;
  const result = await deleteTask(taskid);
  res.json(result);
});

export default router;
