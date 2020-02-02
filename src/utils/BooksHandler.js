import * as BooksAPI from "./BooksAPI";
import { filterBooks } from "./filter";

const updateStateWithShelfs = (bookshelf, setState) => {
  bookshelf.forEach(shelf => {
    if (shelf.length > 0) {
      let stateprop = shelf[0].shelf;
      setState({ [stateprop]: shelf });
    }
  });
};

const moveBook = (book, bookshelf, setState) => {
  removeBook(book, bookshelf, setState);
  addBook(book, bookshelf, setState);
};

const removeBook = (book, bookshelf, setState) => {
  if (book.removefrom !== "none") {
    var removeIndex = bookshelf[book.removefrom]
      .map(function(item) {
        return item.id;
      })
      .indexOf(book.book.id);
    if (removeIndex >= 0) {
      let array = [...bookshelf[book.removefrom]];
      array.splice(removeIndex, 1);
      setState({ [book.removefrom]: array });
    }
  }
};

const addBook = (book, bookshelf, setState) => {
  book !== "" && BooksAPI.update(book.book, book.moveto).then(response => {});
  if (book.moveto !== "none") {
    book.shelf = book.moveto;
    let array = [...bookshelf[book.moveto]];
    let bookcopy = book.book;
    bookcopy.shelf = book.moveto;
    array.push(bookcopy);
    setState({ [book.moveto]: array });
  }
};

const updateSearchResultsShelfState = (stateObject, bookSearchResult) => {
  let updateBook = {};
  let updateBooks = [];
  stateObject.shelfs.forEach(shelf => {
    stateObject[shelf.shortname].forEach(book => {
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

  updateBooks.forEach(update => {
    bookSearchResult.splice(update.removeIndex, 1, update.book);
  });
  return bookSearchResult;
};

const searchBooks = (query, stateObject, setState) => {
  query === "" ||
    BooksAPI.search(query).then(books => {
      if (books.error === undefined) {
        const searchBooks = filterBooks(books, "searchResult");
        const updatedBooks = updateSearchResultsShelfState(
          stateObject,
          searchBooks
        );
        setState(() => ({
          searchResult: updatedBooks
        }));
      }
    });
};

export { removeBook, addBook, moveBook, updateStateWithShelfs, searchBooks };
