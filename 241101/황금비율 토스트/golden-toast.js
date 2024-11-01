const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0].split(" ")[0]; //식빵 개수
const m = +input[0].split(" ")[1]; //암호문 개수
const words = input[1].split(""); //알파벳목록
const inputTestCase = [];

for (let i = 2; i <= m + 1; i++) {
  const arr = input[i].split(" ").map((item) => item);

  let newArr = [];
  for (let j = 1; j < arr.length; j++) {
    newArr.push(arr[j]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.END = new Node(-1);
    this.head = this.END;
    this.tail = this.END;
    this.length = 0;
  }

  //빵넣기
  pushBread(node, newData) {
    const newNode = new Node(newData); //새 노드
    if (this.begin() === this.end()) {
      //빈 배열일 때
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      newNode.prev = null;
    } else {
      //iterator가 가리키는 node 앞에 추가
      node.prev.next = newNode;
      newNode.prev = node.prev;
      node.prev = newNode;
      newNode.next = node;
    }
    this.length += 1;
  }

  //뒤에 있는 빵 제거
  popBread(node) {
    if (node === this.begin()) {
      //head 제거일 때
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    } else {
      node.prev.next = node.next;
      node.prev = null;
      node.next = null;
    }
    this.length -=1;
  }
  begin() {
    return this.head;
  }
  end() {
    return this.tail;
  }
  getBread(node) {
    return node.data;
  }
}

solution(n, inputTestCase);

function solution(n, inputTestCase) {
  const l = new DoublyLinkedList();
  let iterator = l.end(); //맨 뒤에 iterator놓기
  for (let i = 0; i < n; i++) {
    l.pushBread(iterator, words[i]);
  }
  for (let i = 0; i < m; i++) {
    switch (inputTestCase[i].N) {
      case "L":
        if (iterator !== l.begin()) {
          iterator = iterator.prev;
        }
        break;
      case "R":
        if (iterator !== l.end()) {
          iterator = iterator.next;
        }
        break;
      case "D":
        if(iterator !== l.end()) {
          l.popBread(iterator);
          iterator = iterator.prev;
        }
        break;
      case "P":
        l.pushBread(iterator, inputTestCase[i].arr[0]);
        break;
    }
  }
  iterator = l.begin();
  for (let i = 0; i < l.length; i++) {
    process.stdout.write(l.getBread(iterator));
    iterator = iterator.next;
  }
}