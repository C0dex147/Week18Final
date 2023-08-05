import React, { useState } from 'react';
import BookForm from './BookForm';
import BookTable from './BookTable';
import './Library.css';

function Library() {
  const [books, setBooks] = useState([]);

  const addBook = book => {
    setBooks([...books, book]);
  };

  const deleteBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  const updateBook = (bookId, updatedBook) => {
    setBooks(books.map(book => (book.id === bookId ? updatedBook : book)));
  };

  return (
    <div>
      <h1 className="library-head">Library</h1>
      <BookForm onSubmit={addBook} /> 
      <BookTable books={books} deleteBook={deleteBook} updateBook={updateBook} />
    </div>
  );
}

export default Library;