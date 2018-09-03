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

const { width, fontScale } = Dimensions.get('window');

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
              <Text style={{ color: '#4d4d4d' }}>Broadcast List</Text>
            </Left>
            <Right>
              <View style={{ width: '110%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ borderRadius: (width / 24) / 2, width: width / 24, height: width / 24, alignItems: "center", borderColor: '#ef3f7d', borderWidth: 1 }}>
                  <Icon style={{ color: '#ef3f7d', fontSize: fontScale * 15 }} name="add" />
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={{ color: '#4d4d4d' }}>New Group</Text>
                </View>
              </View>
            </Right>
          </ListItem>

          <List>
            <ListItem avatar>
              <Left >
                <Image source={require('../../../assets/Android/4x/Untitled-1.png')} style={{ borderRadius: (width / 10) / 2, width: width / 10, height: width / 10 }} />
              </Left>
              <Body>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text>Kumar Pratik</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '5%' }}>
                    <Text style={{ fontSize: 15 }} note>12:57 PM</Text>
                    <Icon style={{ color: '#ef3f7d' }} name="ios-arrow-forward" />
                  </View>
                </View>
                <View>
                  <Text note>Doing what you like will always keep you happy Doing what you like will always keep you happy</Text>
                </View>
              </Body>
            </ListItem>
          </List>


          <List>
            <ListItem avatar>
              <Left >
                <Image source={require('../../../assets/Android/4x/Untitled-1.png')} style={{ borderRadius: (width / 10) / 2, width: width / 10, height: width / 10 }} />
              </Left>
              <Body>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text>Kumar Pratik</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '5%' }}>
                    <Text style={{ fontSize: 15 }} note>12:57 PM</Text>
                    <Icon style={{ color: '#ef3f7d' }} name="ios-arrow-forward" />
                  </View>
                </View>
                <View>
                  <Text note>Doing what you like will always keep you happy Doing what you like will always keep you happy</Text>
                </View>
              </Body>
            </ListItem>
          </List>



          <List>
            <ListItem avatar>
              <Left >
                <Image source={require('../../../assets/Android/4x/Untitled-1.png')} style={{ borderRadius: (width / 10) / 2, width: width / 10, height: width / 10 }} />
              </Left>
              <Body>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text>Kumar Pratik</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '5%' }}>
                    <Text style={{ fontSize: 15 }} note>12:57 PM</Text>
                    <Icon style={{ color: '#ef3f7d' }} name="ios-arrow-forward" />
                  </View>
                </View>
                <View>
                  <Text note>Doing what you like will always keep you happy Doing what you like will always keep you happy</Text>
                </View>
              </Body>
            </ListItem>
          </List>



          <List>
            <ListItem avatar>
              <Left >
                <Image source={require('../../../assets/Android/4x/Untitled-1.png')} style={{ borderRadius: (width / 10) / 2, width: width / 10, height: width / 10 }} />
              </Left>
              <Body>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text>Kumar Pratik</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '5%' }}>
                    <Text style={{ fontSize: 15 }} note>12:57 PM</Text>
                    <Icon style={{ color: '#ef3f7d' }} name="ios-arrow-forward" />
                  </View>
                </View>
                <View>
                  <Text note>Doing what you like will always keep you happy Doing what you like will always keep you happy</Text>
                </View>
              </Body>
            </ListItem>
          </List>



          <List>
            <ListItem avatar>
              <Left >
                <Image source={require('../../../assets/Android/4x/Untitled-1.png')} style={{ borderRadius: (width / 10) / 2, width: width / 10, height: width / 10 }} />
              </Left>
              <Body>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text>Kumar Pratik</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '5%' }}>
                    <Text style={{ fontSize: 15 }} note>12:57 PM</Text>
                    <Icon style={{ color: '#ef3f7d' }} name="ios-arrow-forward" />
                  </View>
                </View>
                <View>
                  <Text note>Doing what you like will always keep you happy Doing what you like will always keep you happy</Text>
                </View>
              </Body>
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