import React from "react";
// import * as BooksAPI from './BooksAPI'
import SearchBtn from "../SearchBtn.js";
import Shelves from "../Shelves.js";

class MainPage extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1> MyReads </h1>{" "}
        </div>{" "}
        <Shelves />
        <SearchBtn />
      </div>
    );
  }
}

export default MainPage;
