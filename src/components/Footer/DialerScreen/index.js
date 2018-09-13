import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ApiAction from './../../../store/actions/ApiAction'
import { connect } from 'react-redux';
import Webrtc123 from './WebrtcComp'

const { width, fontScale, height } = Dimensions.get('window');


class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialNumber: ''
    }
  }

  static navigationOptions = {
    title: "Keypad"
  };

  // componentWillReceiveProp(props) {
  //   console.log(props)
  // }


  callFunction() {
    console.log('function')
    let obj = {
      CallNumber: this.state.dialNumber
    }
    this.props.callObj(obj)
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} >

          <View style={{ height: '20%', alignItems: 'flex-end', justifyContent: 'flex-end', borderBottomColor: '#e4e4e4', borderWidth: 0.5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Text style={{ fontSize: fontScale * 45, marginRight: '1%' }}>{this.state.dialNumber}</Text>
              <TouchableOpacity activeOpacity={0.5} style={{ alignSelf: 'flex-end' }} onPress={() => { let dialNumber = this.state.dialNumber.slice(0, -1); this.setState({ dialNumber: dialNumber }) }}>
                <Image source={require('../../../assets/Android/4x/delete.png')} style={{ width: width / 12, height: width / 12, marginRight: '2%', alignSelf: 'flex-end', marginBottom: '2%' }} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ height: '80%', flex: 1, justifyContent: 'center' }}>
            <View style={{ height: '80%', width: '95%', alignSelf: 'center', justifyContent: "space-around" }}>

              <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >

                <TouchableOpacity activeOpacity={0.5} onPress={() => { let dialNumber = this.state.dialNumber + JSON.parse('1'); this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>1</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { let dialNumber = this.state.dialNumber + JSON.parse('2'); this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>2</Text>
                    <View style={{ flexDirection: 'row', color: '#00000', }}>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>A</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>B</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>C</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { let dialNumber = this.state.dialNumber + JSON.parse('3'); this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, color: '#00000', borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>3</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>D</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>E</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>F</Text>
                    </View>
                  </View>
                </TouchableOpacity>

              </View>



              <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >

                <TouchableOpacity activeOpacity={0.5} onPress={() => { let dialNumber = this.state.dialNumber + JSON.parse('4'); this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>4</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>G</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>H</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>I</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { let dialNumber = this.state.dialNumber + JSON.parse('5'); this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>5</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>J</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>K</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>L</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { let dialNumber = this.state.dialNumber + JSON.parse('6'); this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>6</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>M</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>N</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>O</Text>
                    </View>
                  </View>
                </TouchableOpacity>

              </View>



              <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >

                <TouchableOpacity activeOpacity={0.5} onPress={() => { let dialNumber = this.state.dialNumber + JSON.parse('7'); this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>7</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>P</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>Q</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>R</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>S</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { let dialNumber = this.state.dialNumber + JSON.parse('8'); this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>8</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>T</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>U</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>V</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { let dialNumber = this.state.dialNumber + JSON.parse('9'); this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>9</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>W</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>X</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>Y</Text>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>Z</Text>
                    </View>
                  </View>
                </TouchableOpacity>

              </View>



              <View style={{ flexDirection: "row", justifyContent: "space-around", width: '70%', alignSelf: 'center' }} >

                <TouchableOpacity activeOpacity={0.5} onPress={() => { let dialNumber = this.state.dialNumber + '*'; this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>*</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onLongPress={() => { let dialNumber = this.state.dialNumber + '+'; this.setState({ dialNumber: dialNumber }) }} onPress={() => { let dialNumber = this.state.dialNumber + JSON.parse('0'); this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>0</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: fontScale * 10, color: 'black' }}>+</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { let dialNumber = this.state.dialNumber + '#'; this.setState({ dialNumber: dialNumber }) }}>
                  <View style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, backgroundColor: '#f1f1f1', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontScale * 30, color: 'black' }}>#</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('CallScreen')} style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, alignSelf: 'center' }}>
                  <Image source={require('../../../assets/Android/4x/callxxxhdpi.png')} style={{ width: width / 6, height: width / 6, borderRadius: (width / 6) / 2, alignSelf: 'center' }} />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>

      </View >
    );
  }
}



function mapStateToProp(state) {
  console.log('success', state.ApiReducer.isCallSuccess)
  return ({
    isCallSuccess: state.ApiReducer.isCallSuccess,
    isCallFailure: state.ApiReducer.isCallFailure,
  })
}

function mapDispatchToProp(dispatch) {
  return ({
    callObj: (obj) => {
      dispatch(ApiAction.callObj(obj))
    },
  })
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});

export default connect(mapStateToProp, mapDispatchToProp)(Keypad);