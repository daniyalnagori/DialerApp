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

class Setting extends Component {
  constructor(props) {
    super(props);
  }
  // static navigationOptions = {
  //   title: "Setting",
  //   headerStyle: {
  //     backgroundColor: '#713F92',
  //   },
  //   headerTitleStyle: {
  //     textAlign: 'center',
  //     color: 'white',
  //     justifyContent: 'center',
  //     alignSelf: 'center',
  //     justifyContent: 'space-between',
  //   },
  // };

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

export default Setting;