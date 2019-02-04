import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import NewsList from "./components/NewsList";
import Iframe from "./components/Iframe";
import { reducer } from "./redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const store = createStore(reducer, compose(applyMiddleware(thunkMiddleware)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={NewsList} />
            <Route path="/details" component={Iframe} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
