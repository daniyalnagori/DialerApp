import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

class CallScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Contacts"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello
         </Text>
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