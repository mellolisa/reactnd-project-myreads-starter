import React from "react";
import Book from "./Book.js";

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {this.props.name} </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.id}>
                <Book data={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
