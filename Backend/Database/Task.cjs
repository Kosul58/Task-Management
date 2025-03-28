const mongoose = require("mongoose");
const Tasks = new mongoose.Schema({
  taskid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("Tasks", Tasks);
module.exports = Task;
