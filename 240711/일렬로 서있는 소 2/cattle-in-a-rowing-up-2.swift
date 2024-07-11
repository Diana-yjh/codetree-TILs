let n = Int(readLine()!)!
let cows = readLine()!.split(separator: " ").map { Int($0)! }
var result = 0

for i in 0..<n-2 {
    var count = 0
    var min = cows[i]

    for j in i+1..<n {
        if min <= cows[j] {
            min = cows[j]
            count += 1
        }
    }
    
    if count > 1 {
        result += 1
    }
}

print(result)