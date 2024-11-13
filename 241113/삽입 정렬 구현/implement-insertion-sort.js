const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const inputArr = input[1].split(" ");

function solution(n, inputArr) {
  for (let i = 1; i < inputArr.length; i++) {
    let j = i - 1;
    let key = inputArr[i];
    for (; j >= 0; j--) {
      if (inputArr[j] > key) {
        inputArr[j + 1] = inputArr[j];
        inputArr[j] = key;
      }
    }
  }
  inputArr.map((item) => process.stdout.write(item + " "));
}

solution(n, inputArr);