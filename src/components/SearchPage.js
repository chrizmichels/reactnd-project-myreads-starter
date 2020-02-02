import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import { SearchInput } from "./SearchInput";
import { SearchResult } from "./SearchResult";

export const SearchPage = props => {
  const { onHandleUpdateShelf, onHandleUpdateQuery, books } = props;

  return (
    <div>
      <SearchInput onHandleUpdateQuery={onHandleUpdateQuery} />
      <SearchResult books={books} onHandleUpdateShelf={onHandleUpdateShelf} />
    </div>
  );
};

SearchPage.propTypes = {
  books: PropTypes.object,
  onHandleUpdateQuery: PropTypes.func,
  onHandleUpdateShelf: PropTypes.func
};
