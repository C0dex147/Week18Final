import React from 'react';
import BookRow from './BookRow';

function BookTable({ books, deleteBook, updateBook }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Difficulty</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.length > 0 ? (
          books.map(book => <BookRow key={book.id} book={book} deleteBook={deleteBook} updateBook={updateBook} />)
        ) : (
          <tr>
            <td colSpan={5}>No books</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default BookTable;