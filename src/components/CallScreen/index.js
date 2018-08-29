import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';
const { width } = Dimensions.get('window');

class CallScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Call Screen"
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/Android/4x/Asset44xxxhdpi.png')} style={{ width: '100%', height: '100%' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ height: '95%', width: '95%', alignSelf: 'center', justifyContent: "space-around" }}>

              <View>
                <Text style={{ fontSize: 30, textAlign: 'center', color: "white" }}>Jane Doe</Text>
                <Text style={{ fontSize: 15, textAlign: 'center', color: "white", marginTop: '1%' }}>+1 (202) 555-0158</Text>
              </View>

              <View>
                <Image source={require('../../assets/Android/4x/Untitled-1.png')} style={{ width: width / 4, height: width / 4, borderRadius: (width / 4) / 2, alignSelf: 'center' }} />
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >
                <View>
                  <Image source={require('../../assets/Android/4x/mute_smallxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2 }} />
                  <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mute</Text>
                </View>

                <View>
                  <Image source={require('../../assets/Android/4x/dialxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2 }} />
                  <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Dial</Text>
                </View>

                <View>
                  <Image source={require('../../assets/Android/4x/speakerxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2 }} />
                  <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Speaker</Text>
                </View>
              </View>


              <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >
                <View>
                  <Image source={require('../../assets/Android/4x/add_callxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2 }} />
                  <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mute</Text>
                </View>

                <View>
                  <Image source={require('../../assets/Android/4x/video_callxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2 }} />
                  <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mute</Text>
                </View>


                <View>
                  <Image source={require('../../assets/Android/4x/contactsxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2 }} />
                  <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Speaker</Text>
                </View>

              </View>

              <View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('CallingScreen')} style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, alignSelf: 'center' }}>
                  <Image source={require('../../assets/Android/4x/callxxxhdpi.png')} style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, alignSelf: 'center' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, textAlign: 'center', color: "white", marginTop: '1%' }}>Call</Text>
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

export default CallScreen;