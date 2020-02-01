const filterShelf = (books, readingShelf) => {
  let returnShelfes = [];
  let bookshelf = [];
  for (const shelfname of readingShelf) {
    bookshelf = filterBooks(books, shelfname);
    returnShelfes.push(bookshelf);
  }

  return returnShelfes;
};

const filterBooks = (books, shelfname) => {
  const bookshelf = [];

  for (const book of books) {
    //console.log(shelfname.shortname, book.shelf);
    if (book.shelf === shelfname.shortname) {
      const objbook = createBook(book);
      //console.log(objbook);
      bookshelf.push(objbook);
    }
  }

  return bookshelf;
};

const createBook = book => {
  let shelfvalue = "";
  if (book.shelf === undefined) {
    shelfvalue = "none";
  } else {
    shelfvalue = book.shelf;
  }
  const objbook = {
    id: book.id,
    shelf: shelfvalue,
    authors: book.authors,
    title: book.title,
    subtitle: book.subtitle,
    imageLinks: book.imageLinks.smallThumbnail
  };
  return objbook;
};

const filterBooksOnly = books => {
  const bookshelf = [];
  //console.log(books);

  for (const book of books) {
    //console.log(book);
    if (book.imageLinks !== undefined) {
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

export { filterShelf, filterBooks, filterBooksOnly };
