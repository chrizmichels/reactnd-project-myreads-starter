import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
import { bool } from "prop-types";
import { ReadingShelf } from "./ReadingShelf";

export const BookShelf = props => {
  const { readingShelf } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {readingShelf.map(shelf => (
          <ReadingShelf books={shelf.books} shelfTitle={shelf.title} />
        ))}
      </div>
    </div>
  );
};

//export default BookShelf;
