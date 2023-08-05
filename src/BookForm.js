import React, { useState, useEffect } from 'react';

function BookForm({ addBook, book: initialBook = null, onSubmit }) {
  const [book, setBook] = useState({ id: null, name: '', author: '', genre: '', difficulty: '' });

  useEffect(() => {
    if (initialBook) {
      setBook(initialBook);
    } else {
      setBook({ id: null, name: '', author: '', genre: '', difficulty: '' });
    }
  }, [initialBook]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (book.name && book.author) {
      onSubmit(book);
      setBook({ id: null, name: '', author: '', genre: '', difficulty: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <label className="form-label">Name</label>
      <input type="text" name="name" value={book.name} onChange={handleInputChange} required className="form-input"/>
      <label>Author</label>
      <input type="text" name="author" value={book.author} onChange={handleInputChange} required className="form-input"/>
      <label>Genre</label>
      <input type="text" name="genre" value={book.genre} onChange={handleInputChange} className="form-input"/>
      <label>Difficulty</label>
      <input type="text" name="difficulty" value={book.difficulty} onChange={handleInputChange} className="form-input"/>
      <button className="form-button">{initialBook ? 'Update Book' : 'Add New Book'}</button>
    </form>
  );
}

export default BookForm;