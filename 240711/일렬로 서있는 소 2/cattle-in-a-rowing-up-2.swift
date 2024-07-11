let n = Int(readLine()!)!
let cows = readLine()!.split(separator: " ").map { Int($0)! }
var result = 0

for i in 0..<n-2 {
    var count = 0
    var min = cows[i]

    for j in i+1..<n-1 {
        if cows[i] <= cows[j] {
            for k in j+1..<n {
                if cows[j] <= cows[k] {
                    result += 1
                }
            }
        }
    }
}

print(result)