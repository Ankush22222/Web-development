// isko hum computer me run karate hai backend ko ise hum 

// npm install karke package lock json ko la sakte hai hum node module ko bhi ab hum slugify ko copy karke istemal kar sakte hai
// npm init kareke hum ise la sakte hai ISE HUM PACKAGE JSON KO CREATE KAR SAKTE HAI


var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b = slugify('some string', '_')  // some_string
console.log(b)
// yeh sapce ko _ ise replace kar dega
// url me joh space hota hai yeh uskok nhi ane deta
// string ko ek slug banata hai slugify 