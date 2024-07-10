var array: [String] = []
var input = readLine()!
var result = 0

for char in input {
    input.append(String(char))
}
print(input)

if input.count != 1 {
    for i in 0..<array.count-1 {
        if array[i] == "(" {
            for j in i..<array.count {
                if array[j] == ")" {
                    result += 1
                }    
            }    
        }
    }
}

print(result)