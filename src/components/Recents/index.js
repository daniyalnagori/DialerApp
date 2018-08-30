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
});

const MoreStack = createStackNavigator({
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

        <All />
        {/* <View style={{ height: "8%", justifyContent: 'center', borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>
          <View style={{ width: width / 2, alignSelf: 'center', flexDirection: "row", justifyContent: "space-around", borderRadius: 4, height: width / 15, borderWidth: 2, borderColor: '#ef3f7d' }}>
            <View style={{ width: width / 4, backgroundColor: '#ef3f7d', justifyContent: "center" }}><Text style={{ color: 'white', alignSelf: 'center', }}>All</Text></View>
            <View style={{ width: width / 4, justifyContent: "center" }}><Text style={{ color: '#ef3f7d', alignSelf: 'center' }}>Missed</Text></View>
          </View>
        </View>


        <View style={{ justifyContent: 'space-between', alignSelf: 'center', flexDirection: "row", width: '98%', height: "10%", borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>

          <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
            <View style={{ justifyContent: "center" }}>
              <Image source={require('../../assets/Android/4x/Call_selectedxxxhdpi.png')} style={{ width: width / 30, height: width / 30 }} />
            </View>

            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sheron 3</Text>
              <Text style={{ fontSize: 10, color: 'gray' }}>mobile</Text>
            </View>
          </View>

          <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 13, color: 'gray' }}>12:57 PM</Text>
            </View>

            <View style={{ justifyContent: "center" }}>
              <Image source={require('../../assets/Android/4x/Infoxxxhdpi.png')} style={{ width: width / 27, height: width / 27 }} />
            </View>
          </View> */}

        {/* </View> */}

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