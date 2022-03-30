// ESM syntax is supported.

const express = require('express')
const app = express()
const port = 3000

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})

app.get('/test', (req, res) => {
  return res.status(200).send("Testing Node.js Deployment on Heroku....")
})