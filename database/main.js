const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/bookstore';
const db = pgp(connectionString);

const getAllBooks = () => {
  return db.any('select * from books')
}

const addBook = (image_url, title, author, genre, description) => {
  return db.none(`insert into books (image_url, title, author, genre, description) values ( '${image_url}, ${title}, ${author}, ${genre}, ${description}')`)
}

const updateBook = (id, assignment, notes, iscomplete) => {
  return db.none(`UPDATE books SET image_url='${image_url}', title='${title}', author='${author}', genre='${genre}', description='${description}' WHERE id=${id}`)
}

const deleteBook = id => {
  return db.none(`DELETE FROM books WHERE id=${id}`)
}

module.exports = {
  getAllBooks: getAllBooks,
  addBook: addBook,
  updateBook: updateBook,
  deleteBook: deleteBook,
}
