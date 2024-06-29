const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('Login Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})