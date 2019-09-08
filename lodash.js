var _ = require("lodash");

// creating an array that will be used for testing
const data = [];
for (let i = 0; i < 16000000; i++) {
  data.push(i * Math.random());
}

console.time("forEach lodash");

let total = 0;
_.forEach(data, i => (total += i * i));

console.timeEnd("forEach lodash");
