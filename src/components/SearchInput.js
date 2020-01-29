import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
import { bool } from "prop-types";
import { Link } from "react-router-dom";

export const SearchInput = props => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
    </div>
  );
};
