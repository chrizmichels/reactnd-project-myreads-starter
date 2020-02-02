import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import { Books } from "./Books";

class SearchResult extends Component {
  render() {
    const { books, onHandleUpdateShelf } = this.props;
    const booksearch = books.searchResult;

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

SearchResult.propTypes = {
  books: PropTypes.object,
  onHandleUpdateShelf: PropTypes.func
};

export default SearchResult;
