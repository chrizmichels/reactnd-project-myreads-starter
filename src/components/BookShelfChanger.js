import React from "react";
import PropTypes from "prop-types";
import "../App.css";

export const BookShelfChanger = props => {
  const handleShelfChange = e => {
    props.onHandleUpdate(e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={props.shelf.shelf} onChange={handleShelfChange}>
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
};

BookShelfChanger.propTypes = {
  onHandleUpdateShelf: PropTypes.func,
  shelf: PropTypes.object
};
