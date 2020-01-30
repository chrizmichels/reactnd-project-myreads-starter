import React, { Component } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import "../App.css";
//import { bool } from "prop-types";
import BookShelfChanger from "./BookShelfChanger";
//import { render } from "react-dom";

class Book extends Component {
  constructor(props) {
    super(props);
    //this.props.onHandleUpdateShelf = this.props.onHandleUpdateShelf.bind(this);
  }

  handleupdate = shelf => {
    console.log("BOOKCHANGER", shelf);
    console.log(this.props.book);
    this.props.onHandleUpdateShelf({
      moveto: shelf,
      removefrom: this.props.book.shelf,
      book: this.props.book
    });
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
            <BookShelfChanger
              onHandleUpdate={this.handleupdate}
              shelf={book.shelf}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
        </div>
      </li>
    );
  }
}

export default Book;
