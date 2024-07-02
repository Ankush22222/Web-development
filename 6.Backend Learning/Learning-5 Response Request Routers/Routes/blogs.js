const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})


// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
  // http://localhost:3000/blog/about krne par about blog aa jayega
})


// define the blogpost/:slug route
router.get('/blgopost/:slug',(req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
  // http://localhost:3000/blog/blgopost/hy likhne par fetch the blogspot for hy
})

module.exports = router
// iske baad hum indexedDB.jj me ja kar upar const blog = require('./routes/blogs') express.static ke baad yeh likhenge app.use('/blog', blogs) type karenge joh ki express ki guide ke ander hoga