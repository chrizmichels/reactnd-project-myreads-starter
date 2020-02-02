import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import { BookShelfChanger } from "./BookShelfChanger";

export const Book = props => {
  const handleupdate = shelf => {
    props.onHandleUpdateShelf({
      moveto: shelf,
      removefrom: props.book.shelf,
      book: props.book
    });
  };

  const lineBreakAuthors = authors => {
    let authorsStr = authors.toString();
    let resStr = authorsStr.split(",").join("\n");
    return resStr;
  };

  const { book } = props;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks}?`
            }}
          ></div>
          <BookShelfChanger onHandleUpdate={handleupdate} shelf={book} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors.length === 1
            ? book.authors
            : lineBreakAuthors(book.authors)}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  books: PropTypes.array,
  onHandleUpdateShelf: PropTypes.func
};
