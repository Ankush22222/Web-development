const express = require('express')
const app = express()
const port = 3000

// ise ham app.use ko file me bhi type karwa saskte hai
const fs = require("fs");


// 1.MIDDLEWARE MODIFY THE REQUEST
app.use(express.static("public"))



// Middleware 1 - Logger for our application
app.use((req, res, next)=> {
    // console.log('m1')
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // 1719766730008 is a GET yeh likh kar aa jayega
    // timestamp mil jayega

    console.log(req.header)
    req.naam = "Hey bro";

    // isko ham kahi par bhi prapat kar sakte hai jaise ki about ke ander
    next()  //next na dene se request yaha par phas jayegi or aahge hi nhi badegi
    // request hanging reh jayegi
    // nexet means agla middleware
    // yeh ek middleware likhne ka tarika hai aise hum bhi middleware bana saktte hai
    // request ka control agle middleware ko de rahe hai
})

// Middleware 2
app.use((req, res, next)=> {
    console.log('m2')
    next()
    // request ka control agle middleware ko de rahe hai but actual me voh ek router hai
    // res.send() karne se yaha par request send ho jayegi phir next karne se bhi koi nhi hoga 
  })
  

// SAB REQUEST KE LIYE KOI CHIJ KE LIYE KOI CHIJ KARNA CHATE HAI TOH MIDDLEWARE KA USE KAR SAKTE HAI HUM
// AGAR CHATE HAI KI SARI REQUEST CHECK HO TOH MIDDLEWARE KA USE KAR SAKTE HAI HUM
// AGAR KAM CHATE JOH KOI CHIJ KAR ROUTES KE CHALE TOH HAM MIDDLEWARE KA USE KAR SAKTE JAISE HAMNE ISE PEHLE FOLDER ME KIYA THA
// MIDDLEWARE ME ORDER BOHT IMPORTANT HOTA HAI
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
  res.send('Hello About!' + req.naam)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})