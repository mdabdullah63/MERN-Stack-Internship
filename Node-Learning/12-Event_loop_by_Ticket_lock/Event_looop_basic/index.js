console.log("Code Start\n");

// Ye callback ko current synchronous code khatam hote hi execute kar deta hai.
// Event Loop ke next phase me jaane se pehle run hota hai.
process.nextTick(() => {
  console.log("FirstTask process.nextTick function executed\n");
});

Promise.resolve()
// Ye internally aisa hota hai:
// const promise = new Promise((resolve) => {
//   resolve();
// });
// nextTick ke baad execute hota hai.
.then(() => {
  console.log("SecondTask Promise.then function executed\n");
});

// setTimeout(() => {
//   console.log("FourthTask setTimeout");
// }, 0);
// output order fixed nahi hota.
// setImmediate(() => {
//   console.log("FifthTask setImmediate()");
// }, 0);

let count = 0;
const interval = setInterval(() => {
  count++;
  console.log(`SixthTask setInterval ${count}\n`);

  if (count === 3) {
    clearInterval(interval);
    console.log("SixthTask Interval Stop\n");
  }
}, 0);

// Microtask Queue me add hota ha
queueMicrotask(() => {
  console.log("ThirdTask queueMicrotask function executed\n");
});

async function test() {
  console.log("TaskSeven Async Function Start\n");

  // Promise resolve hone ke baad function yahin se continue hota hai.
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Receive");
    }, 2000);
  });

  console.log("TaskSeven await result is\n", data);
}

test();
console.log("Code End\n");
