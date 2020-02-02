import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import { Books } from "./Books";

export const ReadingShelf = props => {
  const { books, shelf, onHandleUpdateShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <Books
        books={books[shelf.shortname]}
        shelf={[shelf.shortname]}
        key={[shelf.shortname]}
        onHandleUpdateShelf={onHandleUpdateShelf}
      />
    </div>
  );
};

ReadingShelf.propTypes = {
  shelf: PropTypes.object,
  books: PropTypes.object,
  onHandleUpdateShelf: PropTypes.func
};
