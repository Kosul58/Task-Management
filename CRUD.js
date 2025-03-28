let tasks = []; // an array to store all tasks

//function to create a task
function createTask(taskid, title, description, status) {
  if (!taskid || !title || !description || !status) {
    console.log("Please Enter all fields");
  }

  //if we want it so that we can have some fields empty (example status) then we can use
  //   if (!taskid || !title || !description) {                 //don't check for status
  //     console.log("Please Enter all fields");
  //   }

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
  console.log(`Task created succesfully with taskid: ${task.taskid}`);
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
  if (!taskid) {
    console.log("Please Enter the taskid");
    return;
  }

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
function updateTask(taskid, update) {
  const { newtaskid, newtitle, newdescription, newstatus } = update;
  if (!taskid || !update) {
    console.log("Please Enter all information");
    return;
  }

  console.log(tasks);
  for (let task of tasks) {
    if (task.taskid === taskid) {
      if (newtitle) task.title = newtitle;
      if (newdescription) task.description = newdescription;
      if (newstatus) task.status = newstatus;
      if (newtaskid) task.taskid = newtaskid;
      console.log("Updated task is:", task);
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

updateTask("101", { newstatus: "pending" });
updateTask("102", {
  newtitle: "update2",
  newdescription: "update2",
  newstatus: "update2",
});

//function to delete a task based on its taskid
function deleteTask(taskid) {
  if (!taskid) {
    console.log("Please Enter the taskid");
    return;
  }
  console.log(tasks);
  let newTasks = [];
  let newIndex = 0;
  let isThereTask;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskid === taskid) {
      isThereTask = true;
    } else if (tasks[i].taskid !== taskid) {
      newTasks[newIndex] = tasks[i];
      newIndex++;
    }
  }

  if (!isThereTask) {
    console.log("No TaskFound");
    return;
  }

  tasks = newTasks;
  console.log("task deleted successfully");
  console.log(tasks);
  // tasks = tasks.filter((task) => task.taskid !== taskid);
  // console.log(tasks);
}

// deleteTask("101");
