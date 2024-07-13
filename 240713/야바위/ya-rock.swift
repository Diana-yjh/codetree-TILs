let n = Int(readLine()!)!
var abcArray: [[Int]] = Array(repeating: [0], count: n)
var caseArray: [[Int]] = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
var sumArray: [Int] = []

for i in 0..<n {
    let abc = readLine()!.split(separator: " ").map{ Int($0)! } 
    abcArray[i] = abc
}

for `case` in caseArray {
    var arr = `case`
    var sum = 0

    for abcitem in abcArray {
        arr.swapAt(abcitem[0] - 1, abcitem[1] - 1)

        if arr[abcitem[2] - 1] == 1 {
            sum += 1
        }
    }
    sumArray.append(sum)
}

print(sumArray.max()!)