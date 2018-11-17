import React from "react";
import Book from "./Book.js";
import Shelf from "./Shelf.js";

class Shelves extends React.Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <Shelf
            name={"Currently Reading"}
            books={this.props.books.filter(
              book => book.shelf === "currentlyReading"
            )}
          />
          <Shelf
            name={"Want to Read"}
            books={this.props.books.filter(book => book.shelf === "wantToRead")}
          />
          <Shelf
            name={"Already Read"}
            books={this.props.books.filter(book => book.shelf === "read")}
          />
        </div>
      </div>
    );
  }
}

export default Shelves;
