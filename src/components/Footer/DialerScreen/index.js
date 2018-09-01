import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width, fontScale } = Dimensions.get('window');

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

              <View style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>1</Text>
              </View>


              <View style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>2</Text>
                <View style={{ flexDirection: 'row', color: '#00000', }}>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>A</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>B</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>C</Text>
                </View>
              </View>


              <View style={{ width: width / 7, height: width / 7, color: '#00000', borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>3</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>D</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>E</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>F</Text>
                </View>
              </View>

            </View>



            <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >

              <View style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>4</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>G</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>H</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>I</Text>
                </View>
              </View>


              <View style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>5</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>J</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>K</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>L</Text>
                </View>
              </View>


              <View style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>6</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>M</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>N</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>O</Text>
                </View>
              </View>

            </View>



            <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >

              <View style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>7</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>P</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>Q</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>R</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>S</Text>
                </View>
              </View>


              <View style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>8</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>T</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>U</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>V</Text>
                </View>
              </View>


              <View style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>9</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>W</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>X</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>Y</Text>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>Z</Text>
                </View>
              </View>

            </View>



            <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >

              <View style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>*</Text>
              </View>


              <View style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>0</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: fontScale * 10, color: 'black' }}>+</Text>
                </View>
              </View>


              <View style={{ width: width / 7, height: width / 7, borderRadius: (width / 7) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: fontScale * 30, color: 'black' }}>#</Text>
              </View>

            </View>



            <View>
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('CallScreen')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2, alignSelf: 'center' }}>
                <Image source={require('../../../assets/Android/4x/callxxxhdpi.png')} style={{ width: width / 7, height: width / 7, borderRadius: (width / 6) / 2, alignSelf: 'center' }} />
              </TouchableOpacity>
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