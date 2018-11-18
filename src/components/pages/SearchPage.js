import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI.js";
import Book from "../Book.js";

class SearchPage extends React.Component {
  state = {
    query: "",
    searchedBooks: [],
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      this.getBooks();
    });
  };

  updateQuery = query => {
    this.setState({ query: query });
    this.updateSearchedBooks(query);
  };

  updateSearchedBooks(query) {
    if (query) {
      BooksAPI.search(query).then(searchedBooks => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: searchedBooks });
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  getCurrentShelf(key) {
    let shelf = "";
    let book = this.state.books.filter(book => book.id === key);
    if (!book[0]) {
      shelf = "none";
    } else {
      shelf = book[0].shelf;
    }
    return shelf;
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>{" "}
          <div className="search-books-input-wrapper">
            {" "}
            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                          */}
            <input
              onChange={event => this.updateQuery(event.target.value)}
              value={this.state.query}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(searchedBook => (
              <li key={searchedBook.id}>
                <Book
                  data={searchedBook}
                  changeShelf={this.changeShelf}
                  currentShelf={this.getCurrentShelf(searchedBook.id)}
                />
              </li>
            ))}
          </ol>
        </div>{" "}
      </div>
    );
  }
}

export default SearchPage;
