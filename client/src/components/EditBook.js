// src/components/EditBook.js
import React, { useState } from "react";
import axios from "axios";
import styles from "./EditBook.module.css";

const EditBook = ({ book, fetchBooks, setIsEditing }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);
  const [publishedDate, setPublishedDate] = useState(
    new Date(book.publishedDate).toISOString().split("T")[0]
  );

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/books/${book._id}`, {
        title,
        author,
        description,
        publishedDate,
      });
      fetchBooks();
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <form onSubmit={updateBook} className={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className={styles.input}
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
        className={styles.input}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className={styles.textarea}
      ></textarea>
      <input
        type="date"
        value={publishedDate}
        onChange={(e) => setPublishedDate(e.target.value)}
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Update Book
      </button>
      <button
        onClick={() => setIsEditing(false)}
        className={styles.cancelButton}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditBook;
