const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [];

for (let i = 1; i < input.length; i++) {
    let temp = input[i].split(" ");
    switch (temp[0]) {
        case 'push_back':
            arr.push(temp[1]);
            break;
        case 'get':
            console.log(arr[temp[1]-1]);
            break;
        case 'pop_back':
            arr.pop();
            break;
        default:
            console.log(arr.length);
    }
}