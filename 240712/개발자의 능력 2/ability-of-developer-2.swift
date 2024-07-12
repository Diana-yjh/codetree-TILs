var stats = readLine()!.split(separator: " ").map{Int($0)!}
var array: [Int] = Array(repeating: 0, count: 3)

for i in 0..<3 {
    array[i] = stats.max()! + stats.min()! 
    removeElement(element: stats.max()!)
    removeElement(element: stats.min()!)
}

print(array.max()! - array.min()!)

func removeElement(element: Int) {
    let index = stats.firstIndex(of: element)!
    stats.remove(at: index)
}