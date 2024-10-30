const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const inputTestCase = [];

for (let i = 1; i <= n; i++) {
    const arr = input[i].split(" ").map((item) => item);

    let newArr = [];
    for (let j = 1; j < arr.length; j++) {
        newArr.push(arr[j]);
    }
    const testCase = {
        N: arr[0],
        arr: newArr,
    }
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
        this.head = null;
        this.tail = null;
        this.nodeNum = 0;
    }
    PushFront(newData) {
        const newNode = new Node(newData);
        newNode.prev = null;
        newNode.next = this.head;

        if (this.head != null) { //리스트가 빈 경우
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.nodeNum += 1;
    }
    PushBack(newData) {
        const newNode = new Node(newData);
        newNode.prev = this.tail;
        newNode.next = null;

        if (this.tail != null) { //리스트가 빈 경우
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.nodeNum += 1;
    }
    PopFront() {
        if (this.head == null) {
            console.log("empty");
        } else if (this.head.next == null) { //리스트 내 노드가 1개인 경우
            console.log(this.head.data);
            this.head = null;
            this.head = null;
            this.nodeNum = 0;
        } else {
            console.log(this.head.data);
            let temp = this.head.next;
            this.head.next = null;
            this.head = temp;
            this.head.prev = null;
            this.nodeNum -= 1;
        }
    }
    PopBack() {
        if (this.tail == null) {
            console.log("empty");
        } else if (this.tail.prev == null) { //리스트 내 노드가 1개인 경우
            console.log(this.tail.data);
            this.head = null;
            this.tail = null;
            this.nodeNum = 0;
        } else {
            console.log(this.tail.data);
            let temp = this.tail.prev;
            this.tail.prev = null;
            this.tail = temp;
            this.tail.next = null;
            this.nodeNum -= 1;
        }
    }
    Size() {
        console.log(this.nodeNum);
    }
    Empty() {
        this.head == null ? console.log("1") : console.log("0");
    }
    Front() {
        this.head == null ? console.log("empty") : console.log(this.head.data);
    }
    Back() {
        this.tail == null ? console.log("empty") : console.log(this.tail.data);
    }
}

solution(n, inputTestCase);

function solution(n, inputTestCase) {
    const l = new DoublyLinkedList();
    for (let i = 0; i < n; i++) {
        switch (inputTestCase[i].N) {
            case "push_front":
                l.PushFront(+inputTestCase[i].arr[0]);
                break;
            case "push_back":
                l.PushBack(+inputTestCase[i].arr[0]);
                break;
            case "pop_front":
                l.PopFront();
                break;
            case "pop_back":
                l.PopBack();
                break;
            case "size":
                l.Size();
                break;
            case "empty":
                l.Empty();
                break;
            case "front":
                l.Front();
                break;
            case "back":
                l.Back();
                break;
            default:
                console.log(inputTestCase[i].N);
        }
    }
}