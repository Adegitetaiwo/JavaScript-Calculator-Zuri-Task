

// 
let add = (num1, num2) => {
    return num1 + num2
}

let subtract = (num1, num2) => {
    return num1 - num2
}

let multiply = (num1, num2) => {
    return num1 * num2
}

let divide = (num1, num2) => {
    return num1 / num2
}

// calculator body
let calculator = (num1, num2, operation) => {

    // check for operation type
    // add
    if (operation == "add") {
        result = add(num1, num2)

        // subtract
    } else if (operation == "subtract") {
        result = subtract(num1, num2)

        // multiple
    } else if (operation == "multiply") {
        result = multiply(num1, num2)

        // divide
    } else if (operation == "divide") {
        result = divide(num1, num2)
    }

    // print result to console
    console.log(result)
}