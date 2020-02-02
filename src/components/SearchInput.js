import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import { Link } from "react-router-dom";

export const SearchInput = props => {
  /*   constructor(props) {
    super(props);
    this.handleupdateQuery = this.handleupdateQuery.bind(this);
  }
 */
  const handleupdateQuery = e => {
    e.type === "change"
      ? props.onHandleUpdateQuery(e.target.value)
      : props.onHandleUpdateQuery("");
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" onClick={handleupdateQuery} to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleupdateQuery}
          />
        </div>
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  onHandleUpdateQuery: PropTypes.func
};
