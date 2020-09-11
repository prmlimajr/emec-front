import React, { Component } from 'react';
// import { Router, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import { store, history } from 'app/redux/store';

import Login from './components/login/Login';

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <Login />
      // </Provider>
    );
  }
}
