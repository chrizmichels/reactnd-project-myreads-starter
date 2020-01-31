import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
//import { bool } from "prop-types";
import { Books } from "./Books";
import { filterBooksOnly } from "../utils/filter";

class SearchResult extends Component {
  render() {
    const { books, onHandleUpdateShelf } = this.props;
    const booksearch = books.searchResult;
    //console.log(books);

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {booksearch !== undefined && booksearch.length > 0 && (
            <Books
              books={booksearch}
              onHandleUpdateShelf={onHandleUpdateShelf}
            />
          )}
        </ol>
      </div>
    );
  }
}

export default SearchResult;
