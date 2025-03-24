import express from "express";
import cors from "cors";
import addTask from "./taskHandlers/addTask.js";
import deleteTask from "./taskHandlers/deleteTask.js";
import getATask from "./taskHandlers/getATask.js";
import getTasks from "./taskHandlers/getTasks.js";
import updateTask from "./taskHandlers/updateTask.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Welcome To Task Management Website"));

app.get("/getatask", async (req, res) => {
  const title = req.body.title;
  const result = await getATask(title);
  // console.log(result)
  res.json(result);
});

app.get("/gettasks", async (req, res) => {
  const result = await getTasks();
  // console.log(result);
  res.json(result);
});

// fetch("http://localhost:3000/addtask" , {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(task)
// })
app.post("/addtask", async (req, res) => {
  const task = req.body;
  // console.log(task);
  const result = await addTask(task);
  res.json(result);
});

app.put("/updatetask", async (req, res) => {
  const { task, newTitle, newStatus } = req.body;
  const result = await updateTask(task, newTitle, newStatus);
  res.json(result);
});

app.delete("/deletetask", async (req, res) => {
  const task = req.body;
  const result = await deleteTask(task);
  res.json(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
