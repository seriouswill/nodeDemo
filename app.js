const { multiply } = require("./willsFunctions")  // this is named import
const willsFunctions = require("./willsFunctions") // import everything
const { divide, subtract } = require("./maths.js") // imported from math.js
const fs = require("fs")
const os = require("os")

const _ = require("lodash")

console.log(_)



// let userDetails = os.userInfo().username

// fs.appendFile('oh-hi.txt', `Hello ${userDetails}`, (err) => {
//     if (err) {
//         console.log('oops')
//     }
// })

// console.log(willsFunctions.add(2,2))
// console.log(`Brought to you by ${willsFunctions.name}!`)
// console.log(multiply(10,5))
// console.log(divide(50,2))
// console.log(subtract(50,2))


// let newObj = {
//     one: 1,
//     two: 2,
//     three: 3
// }

// const { two } = newObj
// console.log(two)


// let films = ["The Godfather", 
// "Arrival", 
// "Sicario", 
// "The Matrix"]

// let topFilm, secondFilm, rest
// [topFilm, secondFilm, ...rest] = films

// console.log(topFilm)