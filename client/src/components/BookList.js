// src/components/BookList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookItem from "./BookItem";
import AddBook from "./AddBook";
import styles from "./BookList.module.css";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Book Management</h1>
      <AddBook fetchBooks={fetchBooks} />
      <div className={styles.bookList}>
        {books.map((book) => (
          <BookItem key={book._id} book={book} fetchBooks={fetchBooks} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
