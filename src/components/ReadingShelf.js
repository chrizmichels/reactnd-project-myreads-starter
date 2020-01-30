import React from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
//import { bool } from "prop-types";
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

//export default ReadingShelf;
