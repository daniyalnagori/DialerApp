import React, { Component } from 'react';
import {
  StyleSheet,
  // Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Content, List, Left, ListItem, Container, Right, Header, Item, Center, Input, Icon, Button, Text } from 'native-base';


const { width } = Dimensions.get('window');

class CallScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Contacts",
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
        <Header style={{ backgroundColor: '#e6e6e6' }} searchBar rounded>
          <Item>
            <Icon style={{ color: '#e6e6e6' }} name="ios-search" />
            <Input style={{ textAlign: 'center' }} placeholder="Search" />
          </Item>
        </Header>


        <Container>
          <Content>
            <List>
              <ListItem itemDivider>
                <Text style={{ color: '#ef3f7d' }}>A</Text>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Aaron Bennet</Text>
                </Left>
                {/* <Right>
                  <Text>A</Text>
                </Right> */}
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Ali Connors</Text>
                </Left>
              </ListItem>
              <ListItem itemDivider>
                <Text style={{ color: '#ef3f7d' }}>B</Text>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Bradley Horowitz</Text>
                </Left>
                {/* <Right>
                  <Text>A</Text>
                </Right> */}
              </ListItem>
            </List>
          </Content>
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

export default CallScreen;