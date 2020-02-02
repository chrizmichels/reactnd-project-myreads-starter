import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import { Book } from "./Book";

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

Books.propTypes = {
  books: PropTypes.array,
  onHandleUpdateShelf: PropTypes.func
};
