import React, { Component } from 'react';
import {
  StyleSheet,
  // Text,
  View,
  Dimensions,
  // Button,
  TouchableOpacity,
  Image
} from 'react-native';
import Missed from './Missed'
import All from './All'
import { createStackNavigator } from "react-navigation";
const { width } = Dimensions.get('window');
import { Container, Header, Left, Body, Right, Button, Title, Icon, Segment, Content, Text } from 'native-base';

// const AllStack = createStackNavigator({
//   All,
// });

// const MissedStack = createStackNavigator({
//   Missed,
// });



class Recents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      All: true,
      Allbgcolor: '#ef3f7d',
      Missedbgcolor: '#ffffff',
      AllTextColor: '#ffffff',
      MissedTextColor: '#ef3f7d'
    }
  }





  render() {
    return (
      <View style={styles.container}>

        <Header style={{ backgroundColor: '#713F92' }}>
          <Body style={{ alignItems: 'center' }}>
            <Title>Recents</Title>
          </Body>
        </Header>

        <View style={{ height: "8%", justifyContent: 'center', borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>
          <View style={{ width: width / 2, alignSelf: 'center', flexDirection: "row", justifyContent: "space-around", borderRadius: 4, borderWidth: 2, borderColor: '#ef3f7d' }}>

            <TouchableOpacity activeOpacity={0.5} onPress={() => this.setState({ All: true, Allbgcolor: '#ef3f7d', Missedbgcolor: '#ffffff', AllTextColor: '#ffffff', MissedTextColor: '#ef3f7d' })} >
              <View style={{ width: width / 4, backgroundColor: this.state.Allbgcolor, justifyContent: "center" }}>
                <Text style={{ color: this.state.AllTextColor, alignSelf: 'center', }}>All</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={() => this.setState({ All: false, Allbgcolor: '#ffffff', Missedbgcolor: '#ef3f7d', AllTextColor: '#ef3f7d', MissedTextColor: '#ffffff' })} >
              <View style={{ width: width / 4, justifyContent: "center", backgroundColor: this.state.Missedbgcolor }}>
                <Text style={{ color: this.state.MissedTextColor, alignSelf: 'center' }}>Missed</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>

        {this.state.All ? <All /> : <Missed />}


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