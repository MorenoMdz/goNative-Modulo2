import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import '~/config/ReactotronConfig';

import createNavigator from './routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = AsyncStorage.getItem('@Githuber:username');

    // let userLogged = false;
    // if (username) {
    //   userLogged = true;
    // }
    console.tron.log(username, ' <<<< User Logged?');

    this.setState({ userChecked: true, userLogged: !!username }); /* WTF? */
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}
