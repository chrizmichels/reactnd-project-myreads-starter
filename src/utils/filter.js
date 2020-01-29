const filterShelf = (books, readingShelf) => {
  let returnShelfes = [];
  for (const shelfname of readingShelf) {
    const bookshelf = filterBooks(books, shelfname.shortname);
    returnShelfes.push(bookshelf);
  }
  return returnShelfes;
};

const filterBooks = (books, shelfname) => {
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

export { filterShelf, filterBooks };
