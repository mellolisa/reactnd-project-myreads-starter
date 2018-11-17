import React from "react";
import { Route } from "react-router-dom";

class SearchBtn extends React.Component {
  render() {
    return (
      <div className="open-search">
        <a
          onClick={() =>
            this.setState({
              showSearchPage: true
            })
          }
        >
          Add a book{" "}
        </a>{" "}
      </div>
    );
  }
}

export default SearchBtn;
