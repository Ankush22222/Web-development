// const { createServer } = require('node:http');

// import http from "http"
// yeh ES6 ka module hai

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// step1-npm init -y 
// step2-npm i express jsonwebtoken dotenv   ISE HUM DUSRO KE MODULE KO APNE KAM KE LIYE USE KAR SAKTE HAI
// step3-npm install --global nodemon 
// step4-nodemon main.js for watching what happened in the server
// --> jaise hi type="module" package json me app crash aa jayega yeh use karne ke liye import http from "http" ka use karenge hum

// nodemon se watching kar sakte hai server ki hum sab



// YAHA AGAR ME A KO USE KARNA CHAHTA HU TOH IMPORT KA ISTEMAL KARUNGA

// import {a,b} from "./mymodule.js"
// console.log(a,b)

import obj from "./mymodule.js"
console.log(obj)

// ab yeh common js me convert ho juka hai
// kyuki hamne type="module" ko hata diya hai isliye yeh commom js ban chuka hai

// const a = require("./mymodule2.js")
// console.log(a)

//  yah pazr common js ka use ho raha hai


// const syntax purane code me use hota hai
// import modern syntax me use hota hai 
