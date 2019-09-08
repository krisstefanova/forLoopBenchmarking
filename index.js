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

/**
Results:

*********************************************************************

Node v10.16.3

Test 1
for: 31.765ms
for of: 303.988ms
forEach: 12998.894ms
reduce: 410.226ms
reduce + arr ref: 297.576ms
forEach lodash: 13480.863ms

Test 2:
for: 31.053ms
for of: 299.082ms
forEach: 12759.283ms
reduce: 358.045ms
reduce + arr ref: 257.287ms
forEach lodash:  13108.260ms

Test 3:
for: 23.253ms
for of: 291.254ms
forEach: 12647.014ms
reduce: 376.554ms
reduce + arr ref: 266.013ms
forEach lodash: 13163.742ms

*********************************************************************

Chrome:
Version 76.0.3809.100 (Official Build) (64-bit)

Test 1:
for: 195.675048828125ms
for of: 323.68798828125ms
forEach: 580.538818359375ms
reduce: 434.26220703125ms
reduce + arr ref: 358.973876953125ms

Test2:
for: 201.243896484375ms
for of: 424.65283203125ms
forEach: 597.3603515625ms
reduce: 471.970947265625ms
reduce + arr ref: 413.5419921875ms

Test3:
for: 199.651123046875ms
for of: 438.458984375ms
forEach: 642.85009765625ms
reduce: 522.477783203125ms
reduce + arr ref: 460.620361328125ms

*********************************************************************

Mozilla:
69.0 (64-bit)

Test1:
for: 7778ms
for of: 970ms
forEach: 81ms
reduce: 262ms
reduce + arr ref: 256ms

Test2:
for: 7056ms
for of: 918ms
forEach: 82ms
reduce: 209ms
reduce + arr ref: 273ms

Test3:
for: 9231ms
for of: 980ms
forEach: 112ms
reduce: 208ms
reduce + arr ref: 232ms
 */

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
