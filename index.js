const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 4000;
const Categories = require('./data/Categories.json')
const news = require('./data/news.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Dragon is running')
})
app.get('/Categories', (req, res) => {
  res.send(Categories)
})
app.get('/news', (req, res) => {
  res.send(news)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectednews = news.find(n => n._id === id)
    res.send(selectednews)
    console.log(id);
 
})

app.get('/Categories/:id', (req, res) => { 
    const id =parseInt( req.params.id);
     console.log(id);
    if (id === 0) {
        res.send(news)
    }
    else {
          const categorynews = news.filter(n =>parseInt( n.category_id) === id)
    res.send(categorynews) 
    }
   
 
})

app.listen(port, () => {
  console.log(` Dragon API is running  on port : ${port}`)
})