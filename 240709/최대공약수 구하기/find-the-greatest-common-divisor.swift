let input = readLine()!.split(separator: " ").map{Int($0)!}
let n = input[0]
let m = input[1]

func temp(_ n: Int, _ m: Int) {
    let array = Array(1...n).filter{(n % $0 == 0) && (m % $0 == 0)}
    print(array.max()!)
}

temp(n, m)