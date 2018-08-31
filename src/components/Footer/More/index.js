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
  }
  // static navigationOptions = {
  //   title: null
  // };

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Button hasText transparent>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Text onPress={() => this.props.navigation.navigate('Footer1')}>
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