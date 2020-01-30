import React, { Component } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
//import { bool } from "prop-types";
import BookShelf from "./components/BookShelf";
import { Route } from "react-router-dom";
import { filterShelf } from "./utils/filter";
import SearchPage from "./components/SearchPage";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/Search"
          render={() => (
            <div>
              <SearchPage />
            </div>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <BookShelf />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
