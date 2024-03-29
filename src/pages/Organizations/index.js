import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../components/Header';
// import styles from './styles';

const Organizations = () => (
  <View>
    <Header title="Organizations" />
  </View>
);

const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Organizations.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Organizations;
