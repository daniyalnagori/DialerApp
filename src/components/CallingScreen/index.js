import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

class CallingScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Calling Screen"
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/Android/4x/Asset44xxxhdpi.png')} style={{ width: '100%', height: '100%' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ height: '95%', width: '95%', alignSelf: 'center', justifyContent: "space-around" }}>

              <View>
                <Text style={{ fontSize: 50, textAlign: 'center', color: "white", fontWeight: 'bold' }}>Jane Doe</Text>
                <Text style={{ fontSize: 20, textAlign: 'center', color: "white" }}>calling...</Text>
              </View>

              <View>
                <Image source={require('../../assets/Android/4x/Untitled-1.png')} style={{ width: 180, height: 180, borderRadius: 100, alignSelf: 'center' }} />
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-around", width: '55%', alignSelf: 'center' }} >
                <View>
                  <Image source={require('../../assets/Android/4x/mute_smallxxxhdpi.png')} style={{ width: 55, height: 55, borderRadius: 100 }} />
                  <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mute</Text>
                </View>

                <View>
                  <Image source={require('../../assets/Android/4x/message_smallxxxhdpi.png')} style={{ width: 55, height: 55, borderRadius: 100 }} />
                  <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Message</Text>
                </View>

                <View>
                  <Image source={require('../../assets/Android/4x/speakerxxxhdpi.png')} style={{ width: 55, height: 55, borderRadius: 100 }} />
                  <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Speaker</Text>
                </View>
              </View>

              <View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Footer')} style={{ width: 80, height: 80, borderRadius: 100, alignSelf: 'center' }}>
                  <Image source={require('../../assets/Android/4x/declinexxxhdpi.png')} style={{ width: 80, height: 80, borderRadius: 100, alignSelf: 'center' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 17, textAlign: 'center', color: "white", marginTop: '2%' }}>Decline</Text>
              </View>

            </View>
          </View>
        </ImageBackground>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CallingScreen;