import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
//import { bool } from "prop-types";

class BookShelfChanger extends Component {
  constructor(props) {
    super(props);
/*     this.state = { value: props.shelf.shelf };
    this.handleShelfChange = this.handleShelfChange.bind(this); */
  }

/*   upDateState = shelf => {
    this.setState({ value: "shelf" });
    return this.state;
  }; */

  handleShelfChange = e => {
    console.log("BOOKSHELFCHANGER - Target Value", e.target.value);
  /*   console.log("BOOKSHELFCHANGER - STATE", this.state);
    //this.setState({ value: e.target.value });
    this.upDateState(e.target.value);
    console.log("BOOKSHELFCHANGER - STATE", this.state); */
    this.props.onHandleUpdate(e.target.value);
  };

  render() {
    //console.log("RENDER - Tile", this.props.shelf.title);
    //console.log("RENDER", this.state);

    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.shelf.shelf}
          onChange={this.handleShelfChange}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
