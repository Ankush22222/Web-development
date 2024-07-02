const express = require('express')
const blog = require('./routes/blogs') // blogs.js file ke ander ka code use hoga
const shop = require('./Routes/shop')


const app = express()
const port = 3000


// ise hum post request bhej sakte hai
app.use(express.static("public"))


app.use('/blog', blog) // blogs.js file ke ander ka code use hoga
app.use('/shop', shop)


app.get('/get', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World!')
})


// 1.Handling post and other requests

// post request ke liye hame public ke ander html file banli uske baad hamne html ke ander script ke ander post  ka code likhenge
// public file ke html file ke ander code likhne ke baad agar yeh http://localhost:3000/index.html run karenge or console dhenge toh hame print ho jayega 
app.post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World Post')
})


app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put')
})



// 2 SERVING HTML FILE
// AGAR HAME PURI HTML FILE KO RENDER KARWANE KE LIYE HAM BELOW WALE KA USE KARENGE
app.get("/about", (req, res) => {
    console.log("Hey its a about")
    res.sendFile('templates/about.html', { root: __dirname })
})


app.get("/api", (req, res) => {
    console.log("Hey its a api")
    res.json({ a: 1, b: 2, c: 3, d: 4 })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// 3.POSTMAN WAS USED AS APP


// 4.Express Router
// agar hamre pass boht sare blogs likhne hai toh yaha par boht sara code ho jayega isliye folder banyenge routes naam se