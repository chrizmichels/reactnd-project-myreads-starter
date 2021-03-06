import React from "react";
import "../App.css";
import PropTypes from "prop-types";
import { ReadingShelf } from "./ReadingShelf";
import { Link } from "react-router-dom";

export const BookShelf = props => {
  const { shelfs, books, onHandleUpdateShelf } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelfs.map(shelf => (
          <ReadingShelf
            key={`${shelf.title}`}
            shelf={shelf}
            books={books}
            onHandleUpdateShelf={onHandleUpdateShelf}
          />
        ))}
      </div>
      <div className="open-search">
        <Link to="search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  shelfs: PropTypes.array,
  books: PropTypes.object,
  onHandleUpdateShelf: PropTypes.func
};
