const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const inputTestCase = input[1].split(" ");
let sorted = false;

function solution(n, inputTestCase) {
  for (;;) {
    sorted = true;
    for (let i = 0; i < n - 1; i++) {
      if (inputTestCase[i] > inputTestCase[i + 1]) {
        let temp = inputTestCase[i];
        inputTestCase[i] = inputTestCase[i + 1];
        inputTestCase[i + 1] = temp;
        sorted = false;
      }
    }
    if (sorted) {
      break;
    }
  }

  for (let i = 0; i < n; i++) {
    process.stdout.write(inputTestCase[i] + " ");
  }
}

solution(n, inputTestCase);