import React, { Component } from "react";
import "../App.css";
import * as BooksAPI from "../utils/BooksAPI";
import SearchInput from "./SearchInput";
import { SearchResult } from "./SearchResult";
import { render } from "react-dom";

class SearchPage extends Component {
  state = {
    query: ""
  };

  searchBooks = query => {
    BooksAPI.search(query).then(books => {
      console.log("SEARCHRESULTS", books);
    });
  };

  handleupdateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
    console.log("SEARCHPAGE", this.state);
    this.searchBooks(query);
  };

  clearQuery = () => {
    this.updateQuery("");
  };

  render() {
    const { readingShelfs } = this.props;
    return (
      <div>
        <SearchInput onHandleUpdateQuery={this.handleupdateQuery} />
        <SearchResult books={this.searchBooks(this.state)} />
      </div>
    );
  }
}

export default SearchPage;
