let n = Int(readLine()!)!

func print_num(n: Int) {
    var num = 1
    for _ in 0..<n {
        for _ in 0..<n {
            if num > 9 {
                num = 1
            }

            print(num, terminator: " ")
            num += 1
        }
        print("")
    }
}

print_num(n: n)