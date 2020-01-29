import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
import { bool } from "prop-types";
import { Books } from "./Books";

export const SearchResult = props => {
  const { books } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map(book => (
          <Books books={book} />
        ))}
      </ol>
    </div>
  );
};

//export default SearchResult;
