import React, { Component } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import "../App.css";
//import { bool } from "prop-types";
import BookShelfChanger from "./BookShelfChanger";
//import { render } from "react-dom";

class Book extends Component {
  constructor(props) {
    super(props);
    this.handleupdate = this.handleupdate.bind(this);
  }

  state = {};

  componentDidMount() {
    const { title, author, bookurl, shelf, id } = this.props;

    this.setState(() => ({
      shelf: shelf,
      id: id,
      title: title,
      author: author,
      bookurl: bookurl
    }));

    //console.log("BOOKSTATE", this.state);
  }

  handleupdate = shelf => {
    this.setState(() => ({
      shelf: shelf,
      id: this.props.id,
      title: this.props.title,
      author: this.props.author
    }));
    this.moveBook(shelf, this.state);
  };

  moveBook = (shelf, book) => {
    console.log("MOVE BOOK book", book);
    console.log("MOVE BOOK shelf", shelf);
    shelf !== "" &&
      BooksAPI.update(book, shelf).then(response => {
        console.log("Books API RESPONSE", response);
      });
  };

  render() {
    const { title, author, bookurl, shelf } = this.props;

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
            <BookShelfChanger
              onHandleUpdate={this.handleupdate}
              shelf={this.shelf}
            />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    );
  }
}

export default Book;
