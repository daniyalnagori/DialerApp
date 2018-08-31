import React, { Component } from 'react';
import {
  StyleSheet,
  // Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Container, Header, Icon, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

const { width } = Dimensions.get('window');

class Chat extends Component {
  constructor(props) {
    super(props);
  }
  // static navigationOptions = {
  //   title: "Chat",
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

        <Container>
          <ListItem itemDivider>
            <Left>
              <Text>Broadcast List</Text>
            </Left>
            <Right>
              <Text>New Group</Text>
            </Right>
          </ListItem>

          <List>
            <ListItem avatar>
              <Left >
                <Thumbnail source={require('../../../assets/Android/4x/Untitled-1.png')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text style={{ fontSize: 15 }} note>12:57 PM</Text>
                <Icon style={{ color: '#ef3f7d' }} name="arrow-forward" />
                {/* <Image source={require('../../../assets/Android/4x/move-to-next.svg')} width={10} height={10} /> */}
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem avatar>
              <Left >
                <Thumbnail source={require('../../../assets/Android/4x/Untitled-1.png')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text style={{ fontSize: 15 }} note>12:57 PM</Text>
                <Icon style={{ color: '#ef3f7d' }} name="arrow-forward" />
                {/* <Image source={require('../../../assets/Android/4x/move-to-next.svg')} width={10} height={10} /> */}
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem avatar>
              <Left >
                <Thumbnail source={require('../../../assets/Android/4x/Untitled-1.png')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text style={{ fontSize: 15 }} note>12:57 PM</Text>
                <Icon style={{ color: '#ef3f7d' }} name="arrow-forward" />
                {/* <Image source={require('../../../assets/Android/4x/move-to-next.svg')} width={10} height={10} /> */}
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem avatar>
              <Left >
                <Thumbnail source={require('../../../assets/Android/4x/Untitled-1.png')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text style={{ fontSize: 15 }} note>12:57 PM</Text>
                <Icon style={{ color: '#ef3f7d' }} name="arrow-forward" />
                {/* <Image source={require('../../../assets/Android/4x/move-to-next.svg')} width={10} height={10} /> */}
              </Right>
            </ListItem>
          </List>
        </Container>

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

export default Chat;