import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Main from './src'
var WebRTC = require('react-native-webrtc');
var {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  getUserMedia,
} = WebRTC;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    videoURL: null,
    isFront: true
  }

  componentDidMount() {
    var configuration = { "iceServers": [{ "url": "stun:stun.l.google.com:19302" }] };
    var pc = new RTCPeerConnection(configuration);

    let isFront = true;
    MediaStreamTrack.getSources(sourceInfos => {
      console.log(sourceInfos);
      let videoSourceId;
      for (const i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (sourceInfo.kind == "video" && sourceInfo.facing == (isFront ? "front" : "back")) {
          videoSourceId = sourceInfo.id;
        }
      }
      getUserMedia({
        audio: true,
        video: {
          mandatory: {
            minWidth: 100, // Provide your own width, height and frame rate here
            minHeight: 100,
            minFrameRate: 30
          },
          facingMode: (isFront ? "user" : "environment"),
          optional: (videoSourceId ? [{ sourceId: videoSourceId }] : [])
        }
      }, (stream) => {
        console.log('stream', stream);
        // callback(stream);
        // }, 
        this.setState({
          videoURL: stream.toURL()
        })
      }, logError => {
        console.log('errorasdfa', error.message)
      });
    });

    pc.createOffer((desc) => {
      pc.setLocalDescription(desc, function () {
        // Send pc.localDescription to peer
      }, (e) => { throw e; });
    }, (e) => { throw e; });

    pc.onicecandidate = (event) => {
      // send event.candidate to peer
      console.log('onicaceasdf', event)
    };

  }

  render() {
    return (
      <View>

        {/* <RTCView streamURL={this.state.videoURL} /> */}

        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
