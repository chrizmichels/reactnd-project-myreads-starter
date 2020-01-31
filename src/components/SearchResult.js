import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
//import { bool } from "prop-types";
import { Books } from "./Books";
import { filterBooksOnly } from "../utils/filter";

class SearchResult extends Component {
  render() {
    const { state, onHandleUpdateShelf } = this.props;
    const books = state.searchResult;
    //console.log(books);

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {books !== undefined && books.length > 0 && (
            <Books
              books={filterBooksOnly(books)}
              onHandleUpdateShelf={onHandleUpdateShelf}
            />
          )}
        </ol>
      </div>
    );
  }
}

export default SearchResult;
