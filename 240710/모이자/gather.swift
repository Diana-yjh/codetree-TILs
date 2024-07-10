let n = Int(readLine()!)!
let people = readLine()!.split(separator: " ").map {Int($0)!}

var result: [Int] = []

for i in 0..<n {
    var add = 0

    for (index, value) in people.enumerated() {
        add += value * abs(index - i)
    }
    
    result.append(add)
}

print(result.min()!)