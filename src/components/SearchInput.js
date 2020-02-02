import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import { Link } from "react-router-dom";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.handleupdateQuery = this.handleupdateQuery.bind(this);
  }

  handleupdateQuery(e) {
    e.type === "change"
      ? this.props.onHandleUpdateQuery(e.target.value)
      : this.props.onHandleUpdateQuery("");
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            onClick={this.handleupdateQuery}
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleupdateQuery}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  onHandleUpdateQuery: PropTypes.func
};

export default SearchInput;
