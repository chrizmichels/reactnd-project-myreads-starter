import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

class BookShelfChanger extends Component {
  handleShelfChange = e => {
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

BookShelfChanger.propTypes = {
  onHandleUpdateShelf: PropTypes.func,
  shelf: PropTypes.object
};

export default BookShelfChanger;
