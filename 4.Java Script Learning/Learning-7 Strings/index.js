console.log("This is string tutorial")



let a = "naam";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
// console.log(a[4]);
// inse ek-ek single character print hoga

console.log(a.length)
// give length of a string


let real_name ="naam"
let friend = "rohan"
console.log("His name is "+real_name + " and his friends name is " + friend)

// jab bahot sare variables hote hai and hame ek template banani padti hai jab hum template literal ke syntax ka use karte hai
console.log(`His name is ${real_name} and his friends name is ${friend}`)
// this is convineitent to write 


let b = "Shivam";
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(2,5))
//  2 se 5 tak sare character print karwa dega  
console.log(b.slice(2))
// 2 se lekar pura word print ho jayega and 2 include mhi hoga

console.log(b.replace("va","77"))
// va ki jagah 77 ho jayega
console.log(b.concat(a,"shubham"))
// a and b dono contact me aa jayenge

console.log(b)
// string ko hum change nhi kar sakte but new jarur bana sakte hai


