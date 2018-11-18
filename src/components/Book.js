import React from "react";

class Book extends React.Component {
  render() {
    let bookUrl = "url('" + this.props.data.imageLinks.thumbnail + "')";
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: bookUrl
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={this.props.currentShelf}
              onChange={event =>
                this.props.changeShelf(this.props.data, event.target.value)
              }
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading </option>
              <option value="wantToRead"> Want to Read </option>
              <option value="read"> Read </option>
              <option value="none"> None </option>
            </select>
          </div>
        </div>
        <div className="book-title"> {this.props.data.title} </div>
        <div className="book-authors">
          {this.props.data.authors
            ? this.props.data.authors.map(author => (
                <span key={author}>{author}&nbsp;</span>
              ))
            : "none"}
        </div>
      </div>
    );
  }
}

export default Book;
