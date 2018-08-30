import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button
} from 'react-native';
import { StackNavigator } from "react-navigation";


const { width } = Dimensions.get('window');

class Favourites extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Favourites",
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

export default Favourites;