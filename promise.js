const myPromise = new Promise((resolve, reject) => {
  const x = 2 + 3;
  if (x === 5) {
    resolve("Executed and resolved successfully");
  } else {
    reject("Rejected");
  }
});

myPromise
  .then((fromResolve) => {
    console.log("Promise is", fromResolve);
  })
  .catch((fromReject) => {
    console.log("Promise is", fromReject);
  });
