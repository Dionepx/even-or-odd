const number = 0 // Try other numbers

const isEven = number % 2 === 0
// const isEven = (number % 2) === 0 -> other way to write

if (number === 0) {
     console.log("Invalid")
} else if (isEven) { // If isEven is true...
     console.log("It's even")
} else {
     console.log("It's odd")
}