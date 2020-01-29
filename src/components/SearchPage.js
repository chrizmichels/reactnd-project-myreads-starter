import React, { Component } from "react";
import "../App.css";
import * as BooksAPI from "../utils/BooksAPI";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import { render } from "react-dom";

class SearchPage extends Component {
  state = {
    query: "",
    searchResult: []
  };

  searchBooks = query => {
    query === "" ||
      BooksAPI.search(query).then(books => {
        this.setState(() => ({
          searchResult: books
        }));
      });
  };

  handleupdateQuery = query => {
    this.setState(() => ({
      query: query.trim(),
      searchResult: this.searchBooks(query)
    }));
  };

  clearQuery = () => {
    this.updateQuery("");
  };

  render() {
    const { readingShelfs } = this.props;
    return (
      <div>
        <SearchInput onHandleUpdateQuery={this.handleupdateQuery} />
        <SearchResult state={this.state} />
      </div>
    );
  }
}

export default SearchPage;
