import React, { Component } from "react";

import "../App.css";
//import { bool } from "prop-types";
import { Link } from "react-router-dom";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.handleupdateQuery = this.handleupdateQuery.bind(this);
  }

  handleupdateQuery(e) {
    this.props.onHandleUpdateQuery(e.target.value);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
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

export default SearchInput;
