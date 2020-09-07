import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store";
import Header from "./components/Layout/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div>
              <h2>Cropdoc in NodeJS</h2>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
