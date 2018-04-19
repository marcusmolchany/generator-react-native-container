import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  // todo: add styles here
});

// todo: import other components and utils here

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
