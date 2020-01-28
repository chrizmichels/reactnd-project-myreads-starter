import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
import { bool } from "prop-types";
import { Books } from "./Books";

export const ReadingShelf = props => {
  const { books, shelfTitle } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <Books books={books} />
    </div>
  );
};

//export default ReadingShelf;
