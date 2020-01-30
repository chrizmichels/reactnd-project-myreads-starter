import React from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
//import { bool } from "prop-types";
import Book from "./Book";

export const Books = props => {
  const { books } = props;

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <Book
            key={book.id}
            title={book.title}
            author={book.authors}
            bookurl={book.imageLinks}
            id={book.id}
          />
        ))}
      </ol>
    </div>
  );
};

//export default Books;
