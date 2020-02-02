import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
  handleupdate = shelf => {
    this.props.onHandleUpdateShelf({
      moveto: shelf,
      removefrom: this.props.book.shelf,
      book: this.props.book
    });
  };

  lineBreakAuthors = authors => {
    let authorsStr = authors.toString();
    let resStr = authorsStr.split(",").join("\n");
    return resStr;
  };

  render() {
    const { book } = this.props;

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
            <BookShelfChanger onHandleUpdate={this.handleupdate} shelf={book} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors.length === 1
              ? book.authors
              : this.lineBreakAuthors(book.authors)}
          </div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  books: PropTypes.array,
  onHandleUpdateShelf: PropTypes.func
};

export default Book;
