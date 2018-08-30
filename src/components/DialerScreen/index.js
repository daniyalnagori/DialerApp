import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

class CallScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Keypad"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ height: '65%', width: '95%', alignSelf: 'center', justifyContent: "space-around" }}>

            <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >
              <View>
                <Image source={require('../../assets/Android/4x/mute_smallxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mute</Text>
              </View>

              <View>
                <Image source={require('../../assets/Android/4x/dialxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Dial</Text>
              </View>

              <View>
                <Image source={require('../../assets/Android/4x/speakerxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Speaker</Text>
              </View>
            </View>



            <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >
              <View>
                <Image source={require('../../assets/Android/4x/add_callxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mute</Text>
              </View>

              <View>
                <Image source={require('../../assets/Android/4x/video_callxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mute</Text>
              </View>


              <View>
                <Image source={require('../../assets/Android/4x/contactsxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Speaker</Text>
              </View>
            </View>



            <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >
              <View>
                <Image source={require('../../assets/Android/4x/add_callxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mute</Text>
              </View>

              <View>
                <Image source={require('../../assets/Android/4x/video_callxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mute</Text>
              </View>


              <View>
                <Image source={require('../../assets/Android/4x/contactsxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Speaker</Text>
              </View>
            </View>



            <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >
              <View>
                <Image source={require('../../assets/Android/4x/add_callxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mute</Text>
              </View>

              <View>
                <Image source={require('../../assets/Android/4x/video_callxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mute</Text>
              </View>


              <View>
                <Image source={require('../../assets/Android/4x/contactsxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2 }} />
                <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Speaker</Text>
              </View>
            </View>

            <View>
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('CallScreen')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2, alignSelf: 'center' }}>
                <Image source={require('../../assets/Android/4x/callxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2, alignSelf: 'center' }} />
              </TouchableOpacity>
              <Text style={{ fontSize: 15, textAlign: 'center', color: "white", marginTop: '1%' }}>Call</Text>
            </View>

          </View>
        </View>
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