import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Image
} from 'react-native';
import Missed from './Missed'
import All from './All'
import { createStackNavigator } from "react-navigation";
const { width } = Dimensions.get('window');

const KeypadStack = createStackNavigator({
  All: All,
  Missed: Missed,
});

class Recents extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Recents",
    headerStyle: {
      backgroundColor: '#713F92',
    },
    headerTitleStyle: {
      textAlign: 'center',
      color: 'white',
      justifyContent: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    headerRight: (
      <Button
        title="+1"
        color="white"
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{ height: "8%", justifyContent: 'center', borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>
          <View style={{ width: width / 2, alignSelf: 'center', flexDirection: "row", justifyContent: "space-around", borderRadius: 4, height: width / 15, borderWidth: 2, borderColor: '#ef3f7d' }}>
            <View style={{ width: width / 4, backgroundColor: '#ef3f7d', justifyContent: "center" }}><Text onPress={() => this.props.navigation.navigate('All')} style={{ color: 'white', alignSelf: 'center', }}>All</Text></View>
            <View style={{ width: width / 4, justifyContent: "center" }}><Text onPress={() => this.props.navigation.navigate('Missed')} style={{ color: '#ef3f7d', alignSelf: 'center' }}>Missed</Text></View>
          </View>
        </View>

        <All />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Recents;