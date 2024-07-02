// CALLBACK HELL SE BACHNE KE LIYE FS NE NAYA MODULE DIYA HAI JOH KI PROMISES KA USE KARTA HA
// YAHA PAR HAM PROMISE KA USE KAR SAKYE HAI

// Yeh promise ES6 me use ho raha hai ese hum Common js me bhi use kar sakte hai 
import fs from "fs/promises"

let a = await fs.readFile("naam.txt")
// module me ham direct await kar sakte hai bina async function banaye

// let b = await fs.writeFile("naam.txt", "\n\n\n\n\nthis is amzing promise")

let c = await fs.appendFile("naam.txt", "\n\n\n\n\nthis is amzing promise")
// append karne se pehle vala code kharab nhi hoga and purane code ke niche aa jayega
console.log(a.toString(),c)