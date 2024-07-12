let input = readLine()!.split(separator: " ").map{Int($0)!}

let n = input[0]
let m = input[1]

let a = readLine()!.split(separator: " ").map{Int($0)!}
let b = readLine()!.split(separator: " ").map{Int($0)!}

var result = 0

if n > m {
    for i in 0..<n-m+1 {
        var array = b

        if array.contains(a[i]) {
            for j in i..<i+m {
                if array.contains(a[j]) {
                    array.remove(at: getIndex(array: array, item: a[j]))
                }
            }

            if array.isEmpty {
                result += 1
            }
        }
    }
}

print(result)

func getIndex(array: [Int],item: Int) -> Int {
    return array.firstIndex(of: item)!
}