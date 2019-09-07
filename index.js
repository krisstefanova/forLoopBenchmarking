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

/**
Results:
Node v10.16.3

Test 1
for: 31.642ms
for of: 312.842ms
forEach: 12863.167ms
reduce: 354.421ms

Test 2:
for: 31.096ms
for of: 328.621ms
forEach: 12726.756ms
reduce: 358.613ms

Test 3:
for: 23.144ms
for of: 303.042ms
forEach: 12648.506ms
reduce: 358.985ms

 */
