import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
import { bool } from "prop-types";
import { ReadingShelf } from "./ReadingShelf";
import { Link } from "react-router-dom";

export const BookShelf = props => {
  const { readingShelfName, readingShelfContent } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {readingShelfName.map(shelf => (
          <ReadingShelf
            key={`${shelf.title}`}
            books={readingShelfContent}
            shelfTitle={shelf.title}
            shelfShortName={shelf.shortname}
          />
        ))}
      </div>
      <div className="open-search">
        <Link to="Search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

//export default BookShelf;
