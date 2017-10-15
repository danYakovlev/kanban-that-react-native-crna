import React, { Component } from 'react';
import { Root } from 'native-base';
import Login from './src/screens/Login';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      screen: 'login',
    }
  }

  render() {
    const { screen } = this.state;

    return (
      <Root>
        {screen == 'login' && <Login />}
      </Root>
    );
  }
}