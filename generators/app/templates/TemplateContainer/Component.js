import React from 'react';
import propTypes from 'prop-types';
import { Text, View } from 'react-native';

// todo: import other components and utils here
import styles from './styles';

class Component extends React.PureComponent {
  state = {
    // todo: add your state here
  }

  render() {
    return (
      <View>
        <Text><%= containerName %></Text>
      </View>
    );
  }
}

Component.propTypes = {
  // todo: add propTypes
};

export default Component;
