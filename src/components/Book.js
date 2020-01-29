import React, { Component } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import "../App.css";
import { bool } from "prop-types";
import BookShelfChanger from "./BookShelfChanger";
import { render } from "react-dom";

class Book extends Component {
  constructor(props) {
    super(props);
    this.handleupdate = this.handleupdate.bind(this);
  }

  state = {
    shelf: "",
    book: {}
  };

  handleupdate = shelf => {
    this.setState(() => ({
      shelf: shelf,
      book: {
        id: this.props.id,
        title: this.props.title,
        author: this.props.author
      }
    }));
    this.moveBook(this.state.shelf, this.state.book);
  };

  moveBook = (book, shelf) => {
    console.log("MOVE BOOK RESPONSE", book);
    console.log("MOVE BOOK RESPONSE", shelf);
    shelf !== "" &&
      BooksAPI.update(book, shelf).then(response => {
        console.log("MOVE BOOK RESPONSE", response);
      });
  };

  render() {
    const { title, author, bookurl, id } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${bookurl}?`
              }}
            ></div>
            <BookShelfChanger onHandleUpdate={this.handleupdate} />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    );
  }
}

export default Book;
