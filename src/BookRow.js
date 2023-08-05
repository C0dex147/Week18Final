import React, { useState } from 'react';
import BookForm from './BookForm';

function BookRow({ book, deleteBook, updateBook }) {
  const [editing, setEditing] = useState(false);

  const handleDelete = () => deleteBook(book.id);

  const handleEdit = () => setEditing(true);

  const handleUpdate = updatedBook => {
    setEditing(false);
    updateBook(book.id, updatedBook);
  };

  return editing ? (
    <BookForm book={book} onSubmit={handleUpdate} />
  ) : (
    <tr>
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.difficulty}</td>
      <td>
        <button className="edit-button" onClick={handleEdit}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default BookRow;