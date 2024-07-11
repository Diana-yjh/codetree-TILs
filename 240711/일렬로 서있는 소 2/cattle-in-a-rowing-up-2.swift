let n = Int(readLine()!)!
let cows = readLine()!.split(separator: " ").map { Int($0)! }

var able = 0
var result = 0

for i in 0..<n-2 {
    var min = cows[i]
    for j in i+1..<n {
        if min <= cows[j] {
            min = cows[j]
            able += 1
        }
    }

    if able > 2 {
        result += 1
    }

    able = 0
}

print(result)