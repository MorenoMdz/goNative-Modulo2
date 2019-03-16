/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import api from '~/services/api';

import {
  View,
  Text,
  TextInput,
  StatusBar,
  AsyncStorage,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

class Welcome extends Component {
  state = {
    username: '',
    loading: false,
    error: false,
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('test', username);
    // console.tron.log('saving to device storage')
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });
    try {
      await this.checkUserExists(username);
      await this.saveUser(username); // saves to the device storage

      navigation.navigate('Repositories');
    } catch (error) {
      console.tron.log(error);

      this.setState({ loading: false, error: true });
    }
  };

  render() {
    const { username, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="teal" />
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.text}> Insert your github username.</Text>
        {error && <Text style={styles.error}>No User Found!</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCaptalize="none"
            autoCorrect={false}
            placeholder="Insert your username"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Continue</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
