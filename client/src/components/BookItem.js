// src/components/BookItem.js
import React, { useState } from "react";
import axios from "axios";
import EditBook from "./EditBook";
import styles from "./BookItem.module.css";

const BookItem = ({ book, fetchBooks }) => {
  const [isEditing, setIsEditing] = useState(false);

  const deleteBook = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/books/${book._id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className={styles.item}>
      {isEditing ? (
        <EditBook
          book={book}
          fetchBooks={fetchBooks}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <p>{new Date(book.publishedDate).toDateString()}</p>
          <div className={styles.actions}>
            <button
              onClick={() => setIsEditing(true)}
              className={styles.editButton}
            >
              Edit
            </button>
            <button onClick={deleteBook} className={styles.deleteButton}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookItem;
