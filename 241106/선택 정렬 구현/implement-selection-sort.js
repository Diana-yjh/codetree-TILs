const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const inputTestCase = input[1].split(" ");

function solution(n, inputTestCase) {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      //i 다음것이랑부터 비교
      if (+inputTestCase[j] < +inputTestCase[min]) {
        //숫자로 만들어 비교
        min = j;
      }
    }
    let temp = inputTestCase[i]; //자리바꾸기
    inputTestCase[i] = inputTestCase[min];
    inputTestCase[min] = temp;
  }

  inputTestCase.map((item, index) =>
    process.stdout.write(inputTestCase[index] + " ")
  ); //한줄로 출력
}

solution(n, inputTestCase);