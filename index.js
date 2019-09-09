const _ = require("lodash");

// creating an array that will be used for testing
const data = [];
for (let i = 0; i < 16000000; i++) {
  data.push(i * Math.random());
}

// "for" loop benchmarking
{
  console.time("for");

  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i] * data[i];
  }

  console.timeEnd("for");
}

// "for of" loop benchmarking
{
  console.time("for of");

  let total = 0;
  for (let datum of data) {
    total += datum * datum;
  }

  console.timeEnd("for of");
}

// "forEach" loop benchmarking
{
  console.time("forEach");

  let total = 0;
  data.forEach(i => {
    total += i * i;
  });

  console.timeEnd("forEach");
}

// "reduce" loop benchmarking
{
  console.time("reduce");

  let total = data.reduce((acc, curr) => {
    return acc + curr * curr;
  });

  console.timeEnd("reduce");
}

// "reduce" loop benchmarking + arr reference
{
  console.time("reduce + arr ref");

  let total = data.reduce((acc, curr, i, arr) => {
    return acc + curr * curr;
  });

  console.timeEnd("reduce + arr ref");
}

{
  console.time("forEach lodash");

  let total = 0;
  _.forEach(data, i => (total += i * i));

  console.timeEnd("forEach lodash");
}

// Bound var
{
  console.time("for 1");
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i] * data[i];
  }
  console.timeEnd("for 1");
}
{
  console.time("for 2");
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i] * data[i];
  }
  console.timeEnd("for 2");

  // create a closure bound to sum; note we never even call this
  function foo() {
    sum = 1;
  }
}

/** 
 * More results:
Node

Test1: 
    for 1: 27.865ms
    for 2: 12925.653ms

Test2:
    for 1: 29.894ms
    for 2: 12791.408ms

Test3:
    for 1: 24.330ms
    for 2: 12794.630ms
 * 
 */
