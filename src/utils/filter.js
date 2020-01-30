const filterShelf = (books, readingShelf) => {
  let returnShelfes = [];
  for (const shelfname of readingShelf) {
    console.log(shelfname);

    const bookshelf = filterBooks(books, shelfname);
    returnShelfes.push(bookshelf);
  }
  //console.log("RETURN SHELFS", returnShelfes);

  return returnShelfes;
};

const filterBooks = (books, shelfname) => {
  const bookshelf = [];

  for (const book of books) {
    if (book.shelf === shelfname.shortname) {
      const objbook = createBook(book);
      bookshelf.push(objbook);
    }
  }
  return bookshelf;
};

const createBook = book => {
  const objbook = {
    id: book.id,
    shelf: book.shelf,
    authors: book.authors,
    title: book.title,
    subtitle: book.subtitle,
    imageLinks: book.imageLinks.thumbnail
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
