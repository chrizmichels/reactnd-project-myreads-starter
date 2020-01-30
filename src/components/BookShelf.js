import React, { Component } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import "../App.css";
//import { bool } from "prop-types";
import { ReadingShelf } from "./ReadingShelf";
import { Link } from "react-router-dom";
import { filterShelf } from "../utils/filter";

class BookShelf extends Component {
  constructor(props) {
    super(props);
  }
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
      console.log(books);
      const bookshelf = filterShelf(books, this.state.shelfs);
      console.log(bookshelf);

      this.updateStateWithShelfs(bookshelf);
      console.log("App STATE", this.state);
      //this.moveBook(bookshelf);
    });
  }

  updateStateWithShelfs = bookshelf => {
    bookshelf[0].length > 0 &&
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
    const { readingShelfName } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {this.state.shelfs.map(shelf => (
            <ReadingShelf
              key={`${shelf.title}`}
              books={this.state[shelf.shortname]}
              shelfTitle={shelf.title}
              shelfShortName={shelf.shortname}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="Search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BookShelf;
