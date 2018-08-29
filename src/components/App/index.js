import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableNativeFeedback,
  Dimensions,
  ScrollView,
  ImageBackground
} from 'react-native';
import { Button, CheckBox, ListItem } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

const { height, width, fontScale } = Dimensions.get('window');

class App extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "App"
  };

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
  },
});

export default App;