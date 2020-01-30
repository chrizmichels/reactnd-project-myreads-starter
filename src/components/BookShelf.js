import React, { Component } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import "../App.css";
//import { bool } from "prop-types";
import { ReadingShelf } from "./ReadingShelf";
import { Link } from "react-router-dom";
import { filterShelf } from "../utils/filter";

class BookShelf extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { shelfs, books, onHandleUpdateShelf } = this.props;
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
          <Link to="Search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BookShelf;
