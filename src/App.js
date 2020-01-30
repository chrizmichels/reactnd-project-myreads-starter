import React, { Component } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
//import { bool } from "prop-types";
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

class BooksApp extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const bookshelf = filterShelf(books, readingShelfName);
      this.updateStateWithShelfs(bookshelf);
      console.log("App STATE", this.state);
      //this.moveBook(bookshelf);
    });
  }

  updateStateWithShelfs = bookshelf => {
    bookshelf.map(shelf => {
      let stateprop = shelf[0].shelf;
      this.setState({ [stateprop]: shelf });
    });
  };

  moveBook = readingshelfs => {
    //shelf, book,
    readingshelfs.map(books => {
      console.log("LOOP Through Book Shelfs", books);
      var removeIndex = books
        .map(function(item) {
          //console.log("Book", item);
          return item.id;
        })
        .indexOf("evuwdDLfAyYC");
      if (removeIndex >= 0) {
        console.log("REMOVE Book at Index", removeIndex);
        books.splice(removeIndex, 1);
        console.log("BOOK REMOVED", books);
        //this.setState({ readingshelfs: books });
      }
    });
  };

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
                readingShelfContent={this.state}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
