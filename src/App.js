import React, { Component } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
//import { bool } from "prop-types";
import BookShelf from "./components/BookShelf";
import { Route } from "react-router-dom";
import { filterShelf, filterBooks } from "./utils/filter";
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
      this.updateStateWithShelfs(bookshelf, this.state.shelfs);
      console.log("App STATE", this.state);
    });
  }

  updateSearchResultsShelfState = (stateObject, bookSearchResult) => {
    let updateBook = {};
    let updateBooks = [];
    stateObject.shelfs.map(shelf => {
      stateObject[shelf.shortname].map(book => {
        var removeIndex = bookSearchResult
          .map(function(item) {
            return item.id;
          })
          .indexOf(book.id);

        if (removeIndex >= 0) {
          updateBook = {
            removeIndex: removeIndex,
            book: book
          };
          updateBooks.push(updateBook);
        }
      });
    });

    //Update Books in array
    updateBooks.map(update => {
      bookSearchResult.splice(update.removeIndex, 1, update.book);
    });
    return bookSearchResult;
  };

  searchBooks = query => {
    query === "" ||
      BooksAPI.search(query).then(books => {
        const searchBooks = filterBooks(books, "searchResult");

        const updatedBooks = this.updateSearchResultsShelfState(
          this.state,
          searchBooks
        );
        this.setState(() => ({
          searchResult: updatedBooks
        }));
      });
  };

  handleupdateQuery = query => {
    this.setState(() => ({
      query: query.trim(),
      searchResult: this.searchBooks(query)
    }));
  };

  updateStateWithShelfs = bookshelf => {
    bookshelf.map(shelf => {
      if (shelf.length > 0) {
        let stateprop = shelf[0].shelf;
        this.setState({ [stateprop]: shelf });
      }
    });
  };

  handleupdateshelf = shelf => {
    this.moveBook(shelf);
  };
  moveBook = book => {
    this.removeBook(book, this.state);
    this.addbook(book, this.state);
  };
  removeBook = (book, bookshelf) => {
    if (book.removefrom !== "none") {
      var removeIndex = bookshelf[book.removefrom]
        .map(function(item) {
          return item.id;
        })
        .indexOf(book.book.id);
      if (removeIndex >= 0) {
        let array = [...bookshelf[book.removefrom]];
        array.splice(removeIndex, 1);
        this.setState({ [book.removefrom]: array });
      }
    }
  };

  addbook = (book, bookshelf) => {
    book !== "" && BooksAPI.update(book.book, book.moveto).then(response => {});
    if (book.moveto !== "none") {
      book.shelf = book.moveto;
      let array = [...bookshelf[book.moveto]];
      let bookcopy = book.book;
      bookcopy.shelf = book.moveto;
      array.push(bookcopy);
      this.setState({ [book.moveto]: array });
    }
  };

  render() {
    console.log(this.state);

    return (
      <div className="app">
        <Route
          exact
          path="/Search"
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
