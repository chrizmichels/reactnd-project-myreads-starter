import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { bool } from "prop-types";
import { SearchResult } from "./components/SearchResult";
import { BookShelf } from "./components/BookShelf";

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

//Search Input Component
const SearchInput = props => {};

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    readingshelfs: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books);
      const bookshelf = this.filterShelf(books, readingShelfName);
      this.setState({ readingshelfs: bookshelf });
      console.log("STATE with BOOKS", this.state.readingshelfs);
    });
  }

  filterShelf = (books, readingShelf) => {
    let returnShelfes = [];
    for (const shelfname of readingShelf) {
      const bookshelf = this.filterBooks(books, shelfname.shortname);
      returnShelfes.push(bookshelf);
    }
    return returnShelfes;
  };

  filterBooks = (books, shelfname) => {
    const bookshelf = [];
    for (const book of books) {
      if (book.shelf === shelfname) {
        bookshelf.push({
          id: book.id,
          shelf: book.shelf,
          authors: book.authors,
          title: book.title,
          subtitle: book.subtitle,
          imageLinks: book.imageLinks.thumbnail
        });
      }
    }

    return bookshelf;
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <SearchResult
              books={[
                ...this.state.readingshelfs[0],
                ...this.state.readingshelfs[1],
                ...this.state.readingshelfs[2]
              ]}
            />
          </div>
        ) : (
          <div>
            <BookShelf
              readingShelfName={readingShelfName}
              readingShelfContent={this.state.readingshelfs}
            />
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
