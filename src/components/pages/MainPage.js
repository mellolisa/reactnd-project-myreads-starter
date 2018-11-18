import React from "react";
import * as BooksAPI from "../../BooksAPI";
import SearchBtn from "../SearchBtn.js";
import Shelves from "../Shelves.js";

class MainPage extends React.Component {
  state = {
    books: []
  };

  getBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      console.log(books);
    });
  }

  componentDidMount() {
    this.getBooks();
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(this.getBooks());
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1> MyReads </h1>{" "}
        </div>{" "}
        <Shelves books={this.state.books} changeShelf={this.changeShelf} />
        <SearchBtn changeShelf={this.changeShelf} />
      </div>
    );
  }
}

export default MainPage;
