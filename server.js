const express = require('express')
const app = express()
const path = require('path')
const db = require('./database/main')
const bodyParser = require('body-parser')


app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (request, response) => {
  response.redirect('/1')
})

app.get('/:pagenum', (request, response) => {
  db.getAllBooks()
  .then( books => {
    const books10 = books.slice((10*request.params.pagenum)-10, (10*request.params.pagenum))
    response.render('index', {books10})
  })
});

app.get('/admin', (request, response) => {
  response.redirect('/admin/1')
})

app.get('/admin/:pagenum', (request, response) => {
  db.getAllBooks()
  .then( books => {
    const books10 = books.slice((10*request.params.pagenum)-10, (10*request.params.pagenum))
    response.render('index', {books10})
  })
})


app.post('/addBook',(request, response) => {
  const {image_url, title, author, genre, description} = request.body
  db.addBook(image_url, title, author, genre, description)
    .then(book => response.redirect('/'))
})

app.patch('/updateBook/:id', (request, response) => {
  const { id } = request.params
  const {image_url, title, author, genre, description} = request.body
  db.updateBook(image_url, title, author, genre, description)
  .then(book => response.send('Changes Applied'))
})

app.delete('/deleteBook/:id', (request, response) => {
  const { id } = request.params
  db.deleteBook(id)
    .then(book => response.send('Deleted!'))
})

app.use(express.static(path.join(__dirname , 'public')))

app.use((err, request, response) => {
  throw new Error('Your Code Sucks!')
})

app.listen(3000)
