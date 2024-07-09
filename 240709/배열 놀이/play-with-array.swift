let input = readLine()!.split(separator: " ").map{Int($0)!}
let n = input[0]
let q = input[1]

let array = readLine()!.split(separator: " ").map{Int($0)!}

func calculate(rpt: Int) {
    for _ in 0..<rpt {
        let question = readLine()!.split(separator: " ").map{Int($0)!}
        let `case` = question[0]
        switch `case` {
            case 1:
                first(index: question[1])
            case 2:
                second(b: question[1])
            case 3:
                third(s: question[1], e: question[2])
            default:
                print("?")
        }
    }
}

func first(index: Int) {
    print(array[index - 1])
}

func second(b: Int) {
    guard let index = array.firstIndex(of: b) else {
        print(0)
        return
    }
    print(index + 1)
}

func third(s: Int, e: Int) {
    array[(s-1)...(e-1)].forEach{item in print(item, terminator: " ")}
    print("")
}

calculate(rpt: q)