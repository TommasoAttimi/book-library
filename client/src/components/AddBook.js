// src/components/AddBook.js
import React, { useState } from "react";
import axios from "axios";
import styles from "./AddBook.module.css";

const AddBook = ({ fetchBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  const addBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/books", {
        title,
        author,
        description,
        publishedDate,
      });
      setTitle("");
      setAuthor("");
      setDescription("");
      setPublishedDate("");
      fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form onSubmit={addBook} className={styles.form}>
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
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
