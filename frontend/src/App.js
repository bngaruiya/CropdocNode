import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import store from "./store";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Uploads from "./components/Uploads/Uploads";
import SingleUpload from "./components/Uploads/SingleUpload";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout";
import { loadUser } from "./actions/auth";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="app-container main mainRaised">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/uploads" component={Uploads} />
                <Route
                  exact
                  path="/uploads/:upload_id"
                  component={SingleUpload}
                />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
              </Switch>
            </div>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
