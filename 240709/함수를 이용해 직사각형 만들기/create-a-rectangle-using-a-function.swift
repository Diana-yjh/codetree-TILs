let input = readLine()!.split(separator: " ").map {Int($0)!}
let n = input[0]
let m = input[1]

func print_star(_ n: Int, _ m: Int) {
    for _ in 0..<n {
        print(String(repeating: "1", count: m))
    }
}

print_star(n, m)