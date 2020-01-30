import React from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
//import { bool } from "prop-types";
import Book from "./Book";

export const Books = props => {
  const { books, onHandleUpdateShelf } = props;

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <Book
            key={book.id}
            book={book}
            onHandleUpdateShelf={onHandleUpdateShelf}
          />
        ))}
      </ol>
    </div>
  );
};

//export default Books;
