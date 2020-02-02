import React, { Component } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import BookShelf from "./components/BookShelf";
import { Route } from "react-router-dom";
import { filterShelf } from "./utils/filter";
import {
  moveBook,
  updateStateWithShelfs,
  searchBooks
} from "./utils/BooksHandler";
import SearchPage from "./components/SearchPage";

class BooksApp extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    query: "",
    searchResult: [],
    shelfs: [
      {
        title: "Currently Reading",
        shortname: "currentlyReading"
      },
      {
        title: "Want to Read",
        shortname: "wantToRead"
      },
      {
        title: "Read",
        shortname: "read"
      }
    ]
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const bookshelf = filterShelf(books, this.state.shelfs);
      updateStateWithShelfs(bookshelf, this.setState.bind(this));
    });
  }

  //CallBack
  handleupdateQuery = query => {
    if (query === undefined) {
      query = "";
    }

    this.setState(() => ({
      query: query.trim(),
      searchResult: searchBooks(query, this.state, this.setState.bind(this))
    }));
  };

  //CallBack
  handleupdateshelf = shelf => {
    moveBook(shelf, this.state, this.setState.bind(this));
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <div>
              <SearchPage
                onHandleUpdateShelf={this.handleupdateshelf}
                onHandleUpdateQuery={this.handleupdateQuery}
                books={this.state}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <BookShelf
                shelfs={this.state.shelfs}
                books={this.state}
                onHandleUpdateShelf={this.handleupdateshelf}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
