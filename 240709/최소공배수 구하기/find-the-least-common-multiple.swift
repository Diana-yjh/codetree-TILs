let input = readLine()!.split(separator: " ").map {Int($0)!}

func calculate(_ n: Int, _ m: Int) {
    var result = [1]
    result = Array(1...100).filter { $0 % n == 0 && $0 % m == 0 }
    print(result.min()!)
}

calculate(input[0], input[1])