# forLoopBenchmarking

Benchmarking of for loops in JS

### Results:

---

#### Node v10.16.3

Average time from 10 measurements

```
for: 29.7196ms
reduce + arr ref: 299.7625ms
for of: 305.5907ms
reduce: 374.2965ms
forEach: 12995.9399ms
forEach lodash: 30680.037ms
```

---

#### Chrome:

Version 76.0.3809.100 (Official Build) (64-bit)

**Test 1:**

```for: 195.675048828125ms
for of: 323.68798828125ms
forEach: 580.538818359375ms
reduce: 434.26220703125ms
reduce + arr ref: 358.973876953125ms
```

**Test2:**

```
for: 201.243896484375ms
for of: 424.65283203125ms
forEach: 597.3603515625ms
reduce: 471.970947265625ms
reduce + arr ref: 413.5419921875ms
```

**Test3:**

```
for: 199.651123046875ms
for of: 438.458984375ms
forEach: 642.85009765625ms
reduce: 522.477783203125ms
reduce + arr ref: 460.620361328125ms
```

---

#### Mozilla:

69.0 (64-bit)

**Test1:**

```
for: 7778ms
for of: 970ms
forEach: 81ms
reduce: 262ms
reduce + arr ref: 256ms
```

**Test2:**

```
for: 7056ms
for of: 918ms
forEach: 82ms
reduce: 209ms
reduce + arr ref: 273ms
```

**Test3:**

```
for: 9231ms
for of: 980ms
forEach: 112ms
reduce: 208ms
reduce + arr ref: 232ms
```
