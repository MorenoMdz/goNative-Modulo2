import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import Todo from '~/components/Todo';
import Routes from './routes';

import('./config/ReactotronConfig');
import('./config/DevToolsConfig');

// console.tron.warn('Teste!');

export default class App extends Component {
  // state = {
  //   hello: 'Hello World!',
  //   todos: [{ id: 1, text: 'fazer café' }, { id: 2, text: 'estudar' }],
  // };

  // addTodo = () => {
  //   this.setState({
  //     todos: [...this.state.todos, { id: Math.random(), text: 'novo todo' }],
  //   });
  // };

  render() {
    return (
      // <View style={styles.container}>
      //   <Todo title="teste1" />
      //   <Todo title="teste2" />
      // </View>
      <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center' /* flex-start, space-between, space-around */,
    alignItems: 'center',
    alignContent: 'center',
    color: '#fff',
  },

  box: {
    width: 80,
    height: 80,
    backgroundColor: '#f00',
    margin: 10,
  },
});
