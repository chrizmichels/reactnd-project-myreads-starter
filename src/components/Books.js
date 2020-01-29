import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
import { bool } from "prop-types";
import { Book } from "./Book";

export const Books = props => {
  const { books } = props;
  console.log("Books", books);

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <Book
            key={book.id}
            title={book.title}
            author={book.authors}
            bookurl={book.imageLinks}
          />
        ))}
      </ol>
    </div>
  );
};

//export default Books;
