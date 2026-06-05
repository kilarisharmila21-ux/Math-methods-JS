// Math.ceil()
// Math.floor()
// Math.round()
// Math.max()
// Math.min()
// Math.random()


// Math.ceil() = ( returns top value of the input value )

const calculation = Math.ceil(10.53)

console.log(calculation)

// Math.floor() = ( returns less value of the input value )

const calculate = Math.floor(5.89)

console.log(calculate)

// Math.round() = ( round figure of the input value )

var cal = Math.round(11.43)

console.log(cal)

// Math.max() = ( returns the large value in the collection of values )

var numbers = Math.max( 10 , 20 , 70 , 90 , 65 , 35 )

console.log(numbers)

// Math.min() = ( returns the smallest value in the collection of values )

var digits = Math.min( 25 , 5 , 9 , 17 , 20 , 10 )

console.log(digits)

// Math.random() = ( returns the random value )

const values = Math.random()

console.log(values)

// if we want any random value between ( 1 and 10 ) then,

let integers = Math.random()*10

console.log(integers)

// using two methods in one line

var numberss = Math.floor(Math.random()*10)

console.log(numberss)

// if we dont need "0" then, add +1

var valuess = Math.floor(Math.random()*10)+1

console.log(valuess)