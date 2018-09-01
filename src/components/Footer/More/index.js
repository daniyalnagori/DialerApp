import React, { Component } from 'react';
import {
  StyleSheet,
  // Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Icon, Segment, Content, Text } from 'native-base';

const { width } = Dimensions.get('window');

class CallScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.navigate('Footer1')
  }

  render() {
    return (
      <View style={styles.container}>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default CallScreen;