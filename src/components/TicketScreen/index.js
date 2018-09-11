import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Header, Input, Icon } from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');


class TicketScreen extends Component {

    render() {
        return (
            <View style={styles}>
                <Header style={{ backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '40%' }}>
                    <View style={{ width: '20%' }}>
                        <Image style={{ width: width / 8, height: height / 27 }} source={require('../../assets/Android/4x/logo.png')}></Image>
                    </View>

                    <View style={{ width: '50%', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: "#ffffff", height: '60%', width: '100%', borderRadius: width / 15, justifyContent: "center", flexDirection: "row", alignItems: "center", borderColor: '#e6e6e6', borderWidth: 2 }} >
                            <Icon style={{ color: '#999999', paddingLeft: '1%', fontSize: fontScale * 14, marginLeft: '3%' }} name="ios-search" />
                            <Input style={{ textAlign: 'center', color: "#000000", minHeight: height / 14, fontSize: fontScale * 14 }} placeholder="Search" placeholderTextColor="#00000" />
                        </View>
                    </View>

                    <View style={{ width: '25%', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <Image source={require('../../assets/Android/4x/envelope.png')} style={{ width: width / 20, height: height / 40 }} />
                        </View>

                        <View>
                            <Image source={require('../../assets/Android/4x/call.png')} style={{ width: width / 25, height: height / 40 }} />
                        </View>

                        <View>
                            <Image source={require('../../assets/Android/4x/cup-icon.png')} style={{ width: width / 25, height: height / 40 }} />
                        </View>
                    </View>
                </Header>

                <View style={{ width: '90%' }}>
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eef0f5',
    },
});

export default TicketScreen;