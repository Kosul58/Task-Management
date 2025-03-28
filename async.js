const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve("A done"), 100)
);
const promiseB = new Promise((_, reject) =>
  setTimeout(() => reject("B failed"), 200)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("C done"), 150)
);

Promise.all([promiseA, promiseB, promiseC])
  .then((results) => console.log("Done:", results))
  .catch((error) => console.log("Error caught:", error));

Promise.allSettled([promiseA, promiseB, promiseC])
  .then((results) => console.log("result", results))
  .catch((err) => console.log("error", err));

Promise.race([promiseA, promiseB, promiseC]).then((result) =>
  console.log("race result", result)
);

Promise.any([promiseA, promiseB, promiseC]).then((result) =>
  console.log("any result", result)
);
