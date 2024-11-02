const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0].split(" ")[0]; // 식빵 개수
const m = +input[0].split(" ")[1]; // 암호문 개수
const words = input[1].split(""); // 알파벳목록
const inputTestCase = [];

for(let i=2; i<m+2; i++) {
  inputTestCase.push(input[i]);
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
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //처음 데이터 넣기
  push(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
  }

  //빵 넣기 (현재 cursor앞에 넣어야 함)
  insertBread(cursor, data) {
    const newNode = new Node(data);

    if (!cursor) {
      //맨 뒤에 넣는 경우
      if (!this.head) {
        //빈배열인경우
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    } else {
      if (!cursor.prev) {
        //맨 앞에 넣는 경우
        this.head.prev = newNode;
        newNode.next = this.head.next;
        this.head = newNode;
      } else {
        cursor.prev.next = newNode;
        newNode.prev = cursor.prev;
        newNode.next = cursor;
        cursor.prev = newNode;
      }
    }
    this.length += 1;
  }

  //빵 삭제
  deleteBread(cursor) {
    if (!cursor) {
      //맨뒤일때
      return;
    }
    if (cursor.prev) {
      //앞 노드가 있는 경우
      cursor.prev.next = cursor.next;
    } else {
      this.head = cursor.next;
    }

    if (cursor.next) {
      //뒷 노드가 있는 경우
      cursor.next.prev = cursor.prev;
    } else {
      this.tail = cursor.prev;
    }

    this.length -= 1;
  }
}

function solution(n, inputTestCase) {
  const l = new DoublyLinkedList();

  for (let i = 0; i < n; i++) {
    l.push(words[i]);
  }
  let cursor = null;

  for (let i = 0; i < m ; i++) {
    switch (inputTestCase[i].split("")[0]) {
      case "L":
        if (cursor !== l.head) {
          cursor = cursor ? cursor.prev : l.tail;
        }
        break;
      case "R":
        if (cursor !== null) {
          cursor = cursor.next;
        }
        break;
      case "D":
        if (cursor !== null) {
          const removeNode = cursor;
          cursor = cursor.next;
          l.deleteBread(removeNode);
        }
        break;
      case "P":
        l.insertBread(cursor, inputTestCase[i].split("")[2]);
        break;
    }
  }

  cursor = l.head;
  for (let i = 0; i < l.length; i++) {
    process.stdout.write(cursor.data);
    cursor = cursor.next;
  }
}

solution(n, inputTestCase);