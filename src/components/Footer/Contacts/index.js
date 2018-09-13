import React, { Component } from 'react';
import {
  StyleSheet,
  // Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Content, List, Left, Body, ListItem, Title, Container, Right, Header, Item, Center, Input, Icon, Button, Text } from 'native-base';
import InsideContact from './InsideContact'

const { width, height } = Dimensions.get('window');

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Contacts: true
    }
  }

  backfunction = () => {
    this.setState({
      Contacts: true
    })
  }


  render() {
    return (
      <View style={styles.container}>
        {this.state.Contacts ?

          <Content>
            <Header style={{ backgroundColor: '#713F92', flexDirection: 'row', justifyContent: 'space-between' }}>

              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#ffffff' }}>Groups</Text>
              </View>

              <Title style={{ alignSelf: 'center' }}>Contacts</Title>

              <View style={{ borderRadius: (width / 20) / 2, width: width / 20, height: width / 20, color: '#fffff', alignItems: "center", borderColor: '#ffffff', borderWidth: 1, alignSelf: 'center', justifyContent: 'center' }}>
                <Icon style={{ color: '#ffffff', fontSize: 18 }} name="add" />
              </View>

            </Header>

            <Content>
              <View style={{ paddingTop: 10, paddingRight: 10, paddingLeft: 10, paddingBottom: 10, backgroundColor: '#e6e6e6', height: height / 12, }}>
                <View style={{ backgroundColor: "#ffffff", borderRadius: 5, height: "100%", width: "100%", justifyContent: "center", flexDirection: "row", alignItems: "center" }} >
                  <Icon style={{ color: '#e6e6e6', paddingLeft: '1%' }} name="ios-search" />
                  <Input style={{ textAlign: 'center', color: "#000000", minHeight: height / 14 }} placeholder="Search" placeholderTextColor="#00000" />
                </View>
              </View>
            </Content>


            <Container>
              <Content>
                <List>

                  <ListItem itemDivider>
                    <Text style={{ color: '#ef3f7d' }}>A</Text>
                  </ListItem>

                  <ListItem onPress={() => this.setState({ Contacts: false })}>
                    <Left>
                      <Text>Aaron Bennet</Text>
                    </Left>
                  </ListItem>

                  <ListItem onPress={() => this.setState({ Contacts: false })}>
                    <Left>
                      <Text>Ali Connors</Text>
                    </Left>
                  </ListItem>

                  <ListItem itemDivider>
                    <Text style={{ color: '#ef3f7d' }}>B</Text>
                  </ListItem>

                  <ListItem onPress={() => this.setState({ Contacts: false })}>
                    <Left>
                      <Text>Bradley Horowitz</Text>
                    </Left>
                  </ListItem>

                </List>
              </Content>
            </Container>
          </Content>
          :
          <InsideContact backfunction={this.backfunction} />}
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

export default Contacts;