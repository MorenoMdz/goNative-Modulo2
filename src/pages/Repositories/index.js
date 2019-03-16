import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { View, Text, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../components/Header';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('test');
    const { data } = await api.get(`/users/${username}/repos`);

    this.setState({ data });
  }

  render() {
    return (
      <View>
        <Header title="Repositories" />
        {this.state.data.map(repo => (
          <Text key={repo.id}>{repo.name} and id: {repo.id}</Text>
        ))}
      </View>
    );
  }
}
