// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World2\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// 1.baar baar update kon karega isko isliye nodemon ne ise solve kiya tha npm i --global nodemon
// npm i --global nodemon ise hame npm me koi bhi project bante hai usme hame nodemon mil jayega
// 2.npm init -y
// nodemon main.js type karne joh bhi hamko milga ab voh direct restart hoke milega

// YEH SAB HAMNE APNE PURANI VIDEO ME DEKHA THA ISME HAME PATA CHALA KI HUM NODEMON KO KYU USE KAR SAKTE HAI



// --> 2. WHY EXPRESS JS ?
// express js is a web framework for node js we use express js because http package ki capability limited hai agar is uper code ka use karenge toh code jyada likhna padega isliyte hum express js ka use karenge


const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// 5.Static file: app.use middlewar banane ke liye uses hota hai and express.static ek built-in middlewar hai ek joh keta hai public folder ko public bana do
// ise jo public ke ander file hai naam.txt type karte hi mil jayegi


// agar is path par koi request aye toh ye handler chala do below wala
// app.get or app.post or app.put or app.delete(path,handler)
// By default hamesa GET REQUEST hi aati hai huhm jaise website search kar rahe hai jaise ki http://127.0.0.1:3000/
// AGAR HAME POST REQUEST MARNI HAI TOH HAM HTML FILE BANA KAR POST REQUEST MAAR SAKTE HAI HUM YA FIR KISI TOOL KA ISTEMAL KAR SAKTE HAI HUM
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// 3. For insatalling express js we use npm i express ka use kar sakte hai hum 






// 4.REQUEST PARAMETERS AND QUERIES
app.get('/about', (req, res) => {
  res.send('Hello about us!')
  // yeh about page hoaga
  // http://localhost:3000/about web pe yeh likhte hi hello blog wala page aa jayega
})
app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
  // yeh contact page hoaga
  // http://localhost:3000/contact web pe yeh likhte hi hello blog wala page aa jayega
})

app.get('/blog', (req, res) => {
  res.send('Hello Blog!')
  // yeh blog page hoaga
  // http://localhost:3000/blog web pe yeh likhte hi hello blog wala page aa jayega
})




// yeh itna sara code hakm likhte thodi rahenge agr hame bohot sare blog banane hai toh islye ham yaha par express ka use karenge hum
// app.get('/blog/intro-to-js', (req, res) => {
//   // logic to fetch intro to js from the db
//   res.send('Hello intro to js')
// })

// app.get('/blog/intro-to-java', (req, res) => {
//   // logic to fetch intro to java from the db
//   res.send('Hello intro to java')
// })




// -->JITNE CHAHE UTNE VARIABLES BANA SAKTE HAI HAM ISE
app.get('/blog/:slug/:second', (req, res) => {
  // slug ki jagah ko ham parameter kehte hai hum
  // logic to fetch {req.params.slug} from the db


  console.log(req);
  // ise pura request object print ho jayega
  


  // for url:http://localhost:3000/blog/mango/mongo?mode=dark&region=in
  console.log(req.params); //output will be { slug: 'mango', second: 'mongo' }
  // REQ.QUERY QUESTION MARK KE BAAD WALI CHIJE LEKAR AATA HAI AND PARAMS VARIABLE WALI CHIJE LEKAR AATA HAI
  console.log(req.query); //output will be { mode: 'dark', region: 'in' }



  res.send(`hello ${req.params.slug} and ${req.params.second}`)
  //  http://localhost:3000/blog/mango ab ham agar blog/ ke  baad kuch bhi likhenge toh woh print ho kar page par aajayega
  // multiple values bhi de sakte hai hum isko slug/:second karke de sakte hai value
  // PARAMS AATA HAI HAMRE URL ME AS A VARIABLE
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
