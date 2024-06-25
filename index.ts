// Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds and
// then returns a string "Hello World".

function myFunc(delay: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

async function printMsg(): Promise<string> {
  await myFunc(2000);
  return "Hello World";
}

(async () => {
  let a = await printMsg();
  console.log(a);
})();

// Question 2: Create a TypeScript function that takes a callback function as an argument and
// uses setTimeout to call the callback after 1 second.

function run(callback: () => void): void {
  setTimeout(() => {
    callback();
  }, 1000);
}

run(() => {
  console.log("Hey I am Callback");
});

// Question 3: Write a TypeScript function that returns a Promise that resolves
// with the value "Resolved!" after 3 seconds.

async function promise(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved!");
    }, 3000);
  });
}

promise()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

// Question 4: Create a TypeScript function that uses async/await to wait for two Promises to resolve and
// then returns their results as an array.

async function allPromises() {
  let p1 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 Resolved!");
    }, 1000);
  });
  let p2 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 Resolved!");
    }, 2000);
  });
  let all = await Promise.all([p1, p2]);

  return all;
}

(async () => {
  console.log(await allPromises());
})();

// Question 5: Write a TypeScript function that uses async/await to wait for a Promise to resolve and
// then logs the result to the console.

async function logPromise(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise has Resolved!");
    }, 1000);
  });
}

(async () => {
console.log(await logPromise());
})();

// // Question 6: Write a TypeScript function that uses async/await to wait for a Promise to reject and
// // then logs the error to the console.

async function errPromise() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected");
    }, 2000);
  })
    .then((val) => console.log(val))
    .catch((err) => console.log(err));
}

errPromise();

// Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise
//  that resolves with the square of the number after a delay of 1 second.

async function sqr(num: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(num ** 2);
    }, 1000);
  });
}

sqr(3).then((val) => console.log(val));

// Question 8: Write a TypeScript function that uses async/await to wait for an array of Promises to
// resolve and then returns an array of their results.

function arrPromise(num: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    resolve(`Promise ${num} resolved!`);
  });
}

async function resolvesPromises(
  arrayOfPromise: Promise<string>[]
): Promise<string[]> {
  let all = await Promise.all(arrayOfPromise);
  return all;
}

(async () => {
  let res = await resolvesPromises([
    arrPromise(1),
    arrPromise(2),
    arrPromise(3),
    arrPromise(4),
  ]);

  console.log(res);
})();

// Question 9: Create a TypeScript function that uses setTimeout to call a function repeatedly every 2 seconds.

function task() {
  function repeat() {
    console.log("Hello TypeScript");
    setTimeout(repeat, 2000);
  }
  repeat();
}
task();

// Question 10: Write a TypeScript function that uses async/await to wait for a Promise to resolve and
// then returns a new Promise that resolves with the result multiplied by 2.

async function returnPromise() {
  let p = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 2000);
  });
  let res = await p;
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(res * 2);
    }, 3000);
  });
}

(async () => {
  const result = await returnPromise();
  console.log(result);
})();
