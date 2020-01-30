import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
//import { bool } from "prop-types";

class BookShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.handleupdate = this.handleupdate.bind(this);
  }

  handleupdate(e) {
    this.props.onHandleUpdate(e.target.value);
  }
  render() {
    const shelf = this.props.shelf;
    
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleupdate}>
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
