var input = readLine()!.split(separator: "").map {String($0)}
var result = 0

for i in 0..<input.count-1 where input[i] == "("{
    for j in i..<input.count where input[j] == ")"{
        result += 1   
    }    
}

print(result)