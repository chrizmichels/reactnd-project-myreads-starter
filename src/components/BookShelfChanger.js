import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
//import { bool } from "prop-types";

class BookShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.shelf };
    this.handleupdate = this.handleupdate.bind(this);
  }

  handleupdate(e) {
    this.props.onHandleUpdate(e.target.value);
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleupdate}>
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
