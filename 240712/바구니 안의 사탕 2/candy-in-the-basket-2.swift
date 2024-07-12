let input = readLine()!.split(separator: " ").map{Int($0)!}

let n = input[0] // 바구니 개수
var k = input[1] // 범위

var array = Array(repeating: 0, count: 101)
var addArray = Array(repeating: 0, count: 101)

for _ in 0..<n {
    let basket = readLine()!.split(separator: " ").map{Int($0)!}
    let candy = basket[0]
    let coordinate = basket[1]

    array[coordinate] += candy
}

if k > 50 {
    k = 50
}

for i in 0...(100 - (2 * k)) {
    var add = 0
    for j in i...i + (2 * k) {
        add += array[j]
    }
    addArray[i] = add
}

print(addArray.max()!)