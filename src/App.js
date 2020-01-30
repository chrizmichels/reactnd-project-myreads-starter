import React, { Component } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
//import { bool } from "prop-types";
import BookShelf from "./components/BookShelf";
import { Route } from "react-router-dom";
import { filterShelf } from "./utils/filter";
import SearchPage from "./components/SearchPage";

class BooksApp extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
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
      //console.log(books);
      const bookshelf = filterShelf(books, this.state.shelfs);
      //console.log("BOOKSHELF", bookshelf);

      this.updateStateWithShelfs(bookshelf, this.state.shelfs);
      console.log("App STATE", this.state);
      //this.moveBook(bookshelf);
    });
  }

  updateStateWithShelfs = bookshelf => {
    bookshelf.map(shelf => {
      if (shelf.length > 0) {
        let stateprop = shelf[0].shelf;
        this.setState({ [stateprop]: shelf });
      }
    });
  };

  handleupdateshelf = shelf => {
    console.log("CALLBACK", shelf);
    this.moveBook(shelf);
  };

  removeBook = (book, bookshelf) => {
    console.log(`REMOVE BOOK ${book.removefrom} ${bookshelf}`);
    console.log(bookshelf[book.removefrom]);
    var removeIndex = bookshelf[book.removefrom]
      .map(function(item) {
        //console.log("Book", item);
        return item.id;
      })
      .indexOf(book.book.id);
    if (removeIndex >= 0) {
      console.log("REMOVE Book at Index", removeIndex);
      let array = [...bookshelf[book.removefrom]];
      array.splice(removeIndex, 1);
      //console.log("BOOK REMOVED", books);
      this.setState({ [book.removefrom]: array });
    }
  };

  addbook = (book, bookshelf) => {
    console.log("Add Book", book);
    book.shelf = book.moveto;
    let array = [...bookshelf[book.moveto]];

    array.push(book.book);
    this.setState({ [book.moveto]: array });
  };

  moveBook = book => {
    book !== "" &&
      BooksAPI.update(book.book, book.moveto).then(response => {
        console.log("Books API RESPONSE", response);
      });
    this.removeBook(book, this.state);
    this.addbook(book, this.state);
  };

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
