import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
import { bool } from "prop-types";
import { Books } from "./Books";

export const ReadingShelf = props => {
  const { books, shelfTitle, shelfShortName } = props;
  console.log("READINGSHELF", `${shelfTitle} ${shelfShortName}`);

  books.map(shelf=> {
    console.log("SHELF", shelf[0].shelf);
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      {books.map(
        shelf => 
        shelfShortName === shelf[0].shelf && <Books books={shelf}/>
           
      )}
    </div>
  );
};

//export default ReadingShelf;
