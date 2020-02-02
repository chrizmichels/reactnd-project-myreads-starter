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
    if (book.shelf === shelfname.shortname) {
      const objbook = createBook(book);

      if (objbook !== undefined) {
        bookshelf.push(objbook);
      }
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

  let imageLinks;
  let authors;
  if (book.imageLinks === undefined) {
    imageLinks = {
      thumbnail: "https://ik.imagekit.io/l94s44tab/content_dc2bL8qpU.png"
    };
  } else {
    imageLinks = book.imageLinks;
  }
  if (book.authors === undefined) {
    authors = [];
  } else {
    authors = book.authors;
  }

  const objbook = {
    id: book.id,
    shelf: shelfvalue,
    authors: authors,
    title: book.title,
    subtitle: book.subtitle,
    imageLinks: imageLinks.thumbnail
  };
  return objbook;
};

const filterBooksOnly = books => {
  const bookshelf = [];

  for (const book of books) {
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
