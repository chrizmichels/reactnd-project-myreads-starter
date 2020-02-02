import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

class SearchPage extends Component {
  render() {
    const { onHandleUpdateShelf, onHandleUpdateQuery, books } = this.props;

    return (
      <div>
        <SearchInput onHandleUpdateQuery={onHandleUpdateQuery} />
        <SearchResult books={books} onHandleUpdateShelf={onHandleUpdateShelf} />
      </div>
    );
  }
}

SearchPage.propTypes = {
  books: PropTypes.object,
  onHandleUpdateQuery: PropTypes.func,
  onHandleUpdateShelf: PropTypes.func
};

export default SearchPage;
