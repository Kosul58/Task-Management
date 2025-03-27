import express from "express";
import cors from "cors";
import taskRouter from "./taskRoutes/taskrouter.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/taskapi", taskRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
