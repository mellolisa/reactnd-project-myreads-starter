import React from "react";
import "./App.css";
import SearchPage from "./components/pages/SearchPage.js";
import MainPage from "./components/pages/MainPage.js";
import { Switch, Route } from "react-router-dom";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
