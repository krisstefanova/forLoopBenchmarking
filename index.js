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

/**
Results:
Node v10.16.3

Test 1
for: 31.765ms
for of: 303.988ms
forEach: 12998.894ms
reduce: 410.226ms
reduce + arr ref: 297.576ms

Test 2:
for: 31.053ms
for of: 299.082ms
forEach: 12759.283ms
reduce: 358.045ms
reduce + arr ref: 257.287ms

Test 3:
for: 23.253ms
for of: 291.254ms
forEach: 12647.014ms
reduce: 376.554ms
reduce + arr ref: 266.013ms



 */
