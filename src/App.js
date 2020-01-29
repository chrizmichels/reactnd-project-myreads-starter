import React, { Component } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import { bool } from "prop-types";
import { BookShelf } from "./components/BookShelf";
import { Route } from "react-router-dom";
import { filterShelf } from "./utils/filter";
import SearchPage from "./components/SearchPage";

const readingShelfName = [
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
];

class BooksApp extends React.Component {
  state = {
    readingshelfs: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books);
      const bookshelf = filterShelf(books, readingShelfName);
      this.setState({ readingshelfs: bookshelf });
      console.log("STATE with BOOKS", this.state.readingshelfs);
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/Search"
          render={() => (
            <div>
              <SearchPage readingShelfs={this.state.readingshelfs} />
            </div>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <BookShelf
                readingShelfName={readingShelfName}
                readingShelfContent={this.state.readingshelfs}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
