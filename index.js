const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 4000;
const Categories=require('./data/Categories.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Dragon is running')
})
app.get('/Categories', (req, res) => {
  res.send(Categories)
})

app.listen(port, () => {
  console.log(` Dragon API is running  on port : ${port}`)
})