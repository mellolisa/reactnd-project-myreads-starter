import React from "react";
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
            changeShelf={this.props.changeShelf}
            currentShelf="currentlyReading"
          />
          <Shelf
            name={"Want to Read"}
            books={this.props.books.filter(book => book.shelf === "wantToRead")}
            changeShelf={this.props.changeShelf}
            currentShelf="wantToRead"
          />
          <Shelf
            name={"Already Read"}
            books={this.props.books.filter(book => book.shelf === "read")}
            changeShelf={this.props.changeShelf}
            currentShelf="read"
          />
        </div>
      </div>
    );
  }
}

export default Shelves;
