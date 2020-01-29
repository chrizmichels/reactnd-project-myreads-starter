import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
import { bool } from "prop-types";
import { Books } from "./Books";

export const ReadingShelf = props => {
  const { books, shelfTitle, shelfShortName } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      {books.map(
        shelf =>
          shelfShortName === shelf[0].shelf && (
            <Books books={shelf} key={shelfShortName} />
          )
      )}
    </div>
  );
};

//export default ReadingShelf;
