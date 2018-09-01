import React, { Component } from 'react';
import {
  StyleSheet,
  // Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Container, Header, Icon, Title, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

const { width } = Dimensions.get('window');

class Chat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>

        <Header style={{ backgroundColor: '#713F92', flexDirection: 'row', justifyContent: 'space-between' }}>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Footer')}>
              <View style={{ justifyContent: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Icon style={{ color: '#ffffff' }} name='ios-arrow-back' />
                <Text style={{ color: '#ffffff', paddingLeft: '2%', fontSize: 15 }}>Back</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Title style={{ alignSelf: 'center' }}>Chats</Title>

          <View style={{ alignItems: "center", borderColor: '#ffffff', alignSelf: 'center' }}>
            <Icon style={{ color: '#ffffff', fontSize: 25 }} name="ios-create-outline" />
          </View>

        </Header>

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