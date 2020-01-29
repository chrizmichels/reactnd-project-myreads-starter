import React, { Component } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import { bool } from "prop-types";
import { SearchResult } from "./components/SearchResult";
import { SearchInput } from "./components/SearchInput";
import { BookShelf } from "./components/BookShelf";
import { Route } from "react-router-dom";
import { filterShelf} from "./utils/filter";

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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
              <SearchInput />
              <SearchResult books={this.state.readingshelfs} />
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
