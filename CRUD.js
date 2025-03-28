let tasks = []; // an array to store all tasks

//function to create a task
function createTask(taskid, title, description, status) {
  let task = {
    taskid: taskid,
    title: title,
    description: description,
    status: status,
  };
  // let task = {};
  // task.taskid = taskid;
  // task.title = title;
  // task.description = description;
  // task.status = status;

  // console.log(task);
  tasks.push(task);
}

createTask(
  "101",
  "Learn CRUD",
  "learning and documenting CRUD operations",
  "completed"
);

createTask(
  "102",
  "Learn ASYNC",
  "learning and documenting ASYNC operations",
  "pending"
);

createTask("103", "Learn OOP", "learning and documenting OOP in JS", "pending");

//function to read a certain task based on its taskid
function readATask(taskid) {
  let displaytask;
  for (let task of tasks) {
    if (task.taskid === taskid) {
      displaytask = task;
    }
  }
  if (displaytask) {
    console.log(displaytask);
  } else {
    console.log("task not found");
  }
  // const task = tasks.filter((task) => task.taskid === taskid);
  // if (task.taskid) {
  //   console.log(task);
  // } else {
  //   console.log("task not found");
  // }
}

// readATask("101");

//function to read all tasks
function readTasks() {
  tasks.length < 1 ? console.log("No tasks") : console.log(tasks);

  // for (let task of tasks) {
  //   if (task) {
  //     console.log(task);
  //   }
  // }
}
// readTasks();

//function to update a specific task based on its taskid , field , update
function updateTask(taskid, field, update) {
  // find the index of the task to update
  console.log(tasks);
  for (let task of tasks) {
    if (task.taskid === taskid) {
      task[field] = update;
    }
  }
  console.log(tasks);

  // const taskIndex = tasks.findIndex((task) => task.taskid === taskid);
  // if (taskIndex !== -1) {
  //   tasks[taskIndex][field] = update;
  // } else {
  //   console.log("no task found");
  // }
}

// updateTask("101", "status", "pending");
// readATask("101");

//function to delete a task based on its taskid
function deleteTask(taskid) {
  console.log(tasks);
  let newTasks = [];
  let newIndex = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskid !== taskid) {
      newTasks[newIndex] = tasks[i];
      newIndex++;
    }
  }
  tasks = newTasks;
  console.log(tasks);
  // tasks = tasks.filter((task) => task.taskid !== taskid);
  // console.log(tasks);
}

deleteTask("101");
