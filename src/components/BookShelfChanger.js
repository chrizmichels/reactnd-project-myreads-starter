import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
//import { bool } from "prop-types";

class BookShelfChanger extends Component {
  constructor(props) {
    super(props);
  }

  handleShelfChange = e => {
    console.log("BOOKSHELFCHANGER - Target Value", e.target.value);
    this.props.onHandleUpdate(e.target.value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.shelf.shelf}
          onChange={this.handleShelfChange}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
