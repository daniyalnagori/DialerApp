import React, { Component } from 'react';
import { Platform, StyleSheet, Picker, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Input, Icon, } from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');



class TicketInbox extends Component {
    constructor() {
        super()
        this.state = {
            selected: "key2",
            dropdownValue: 'asf'
        }
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <View style={styles.container}>

                    <View style={{ width: '100%', height: '100%', backgroundColor: '#ffffff' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '6%' }}>

                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#67677A' }}>
                                    #ID
                            </Text>
                            </View>

                            <View style={{ width: '60%', justifyContent: 'center' }}>
                                <Text style={{ color: '#67677A', paddingLeft: '20%' }}>
                                    ASSIGNE
                            </Text>
                            </View>

                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#67677A', paddingRight: '5%' }}>
                                    CHANNEL
                            </Text>
                            </View>

                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '6%', backgroundColor: '#f6f8f7' }}>

                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#666666', fontSize: fontScale * 12 }}>
                                    6674
                            </Text>
                            </View>

                            <View style={{ width: '60%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: '25%', paddingLeft: '20%' }}>
                                    <Image source={require('../../../../assets/Android/4x/Untitled-1.png')} style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2 }} />
                                </View>
                                <View style={{ width: '72%' }}>
                                    <Text style={{ color: '#666666', fontSize: fontScale * 12, paddingLeft: '3%' }}>
                                        John Smith Doe
                            </Text>
                                </View>
                            </View>

                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../../../assets/Android/4x/message.png')} style={{ width: width / 20, height: height / 35, marginRight: '2%' }} />
                            </View>

                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '6%' }}>

                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#666666', fontSize: fontScale * 12 }}>
                                    6674
                        </Text>
                            </View>

                            <View style={{ width: '60%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: '25%', paddingLeft: '20%' }}>
                                    <Image source={require('../../../../assets/Android/4x/Untitled-1.png')} style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2 }} />
                                </View>
                                <View style={{ width: '72%' }}>
                                    <Text style={{ color: '#666666', fontSize: fontScale * 12, paddingLeft: '3%' }}>
                                        John Smith Doe
                        </Text>
                                </View>
                            </View>

                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../../../assets/Android/4x/notification.png')} style={{ width: width / 22, height: height / 35, marginRight: '2%' }} />
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '6%', backgroundColor: '#f6f8f7' }}>

                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#666666', fontSize: fontScale * 12 }}>
                                    6674
                            </Text>
                            </View>

                            <View style={{ width: '60%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: '25%', paddingLeft: '20%' }}>
                                    <Image source={require('../../../../assets/Android/4x/Untitled-1.png')} style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2 }} />
                                </View>
                                <View style={{ width: '72%' }}>
                                    <Text style={{ color: '#666666', fontSize: fontScale * 12, paddingLeft: '3%' }}>
                                        John Smith Doe
                                </Text>
                                </View>
                            </View>

                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../../../assets/Android/4x/message.png')} style={{ width: width / 20, height: height / 35, marginRight: '2%' }} />
                            </View>

                        </View>

                    </View >

            </View >
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        height:height
    }
});

export default TicketInbox;