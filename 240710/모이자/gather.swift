let n = Int(readLine()!)!
let people = readLine()!.split(separator: " ").map {Int($0)!}

var min = 0
var add = 0

for i in 0..<n {
    for (index, value) in people.enumerated() {
        add += value * abs(index - i)
    }
    
    if min == 0 {
        min = add
    }

    if min >= add {
        min = add
    }

    add = 0
}

print(min)