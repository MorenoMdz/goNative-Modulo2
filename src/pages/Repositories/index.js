import React from 'react';

import { View, Text, AsyncStorage } from 'react-native';

// import styles from './styles';

AsyncStorage.clear();
// AsyncStorage.removeItem('@Githuber:username', err => console.log('userId', err));

const Repositories = () => (
  <View>
    <Text>Repositories</Text>
  </View>
);

export default Repositories;
