let n = Int(readLine()!)!
var array: [[Int]] = Array(repeating: [0], count: n)
var resultArr: [[Int]] = Array(repeating: Array(repeating: 0, count: n-2), count: n)
var result: [Int] = []

for i in 0..<n {
    let input = readLine()!.split(separator: " ").map{Int($0)!}
    array[i] = input
}

for i in 0..<n {
    for j in 0..<n-2 {
        var add = 0
        add += array[i][j]
        for k in j+1..<j+3 {
            add += array[i][k]
            resultArr[i][j] = add
        }
    }
}

resultArr.forEach { arr in
    result.append(arr.max()!)
}

print(result.max()!)