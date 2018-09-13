import React, { Component } from 'react';
import { Platform, StyleSheet, Picker, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Input, Icon, } from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import Dropdown from './../../DropDown/dropdown'



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
                <View style={{ width: '100%', height: '20%', marginBottom: '2%' }}>
                    <View style={{ width: '100%', height: '70%', backgroundColor: '#ffffff', borderTopLeftRadius: width / 70, borderTopRightRadius: width / 70, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../../assets/Android/4x/Untitled-1.png')} style={{ width: width / 8, height: width / 8, borderRadius: (width / 4) / 2, alignSelf: 'center' }} />
                        </View>
                        <View style={{ width: '60%', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>John Smith Doe</Text>
                            <Text>Commercial Bank</Text>
                            <Text style={{ color: '#999999', fontSize: fontScale * 13, fontStyle: 'italic' }}>12 Days ago</Text>
                        </View>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: '70%', width: '80%', alignItems: 'center' }}>
                                <View style={{ height: '40%', width: '100%', borderRadius: width / 30, backgroundColor: '#FFDEEB', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: fontScale * 12, color: '#EF3F7D' }}>Normal</Text>
                                </View>
                            </View>
                        </View>
                    </View >

                    <View style={{ height: '30%', backgroundColor: '#F6F8F7', width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: width / 70, borderBottomRightRadius: width / 70 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>ID: </Text>
                                <Text>6674</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Status: </Text>
                                <Text>New</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Type: </Text>
                                <Text>Question</Text>
                            </View>

                            <View>
                                <Image source={require('../../../../assets/Android/4x/message.png')} style={{ width: width / 20, height: width / 20, alignSelf: 'center' }} />
                            </View>
                        </View>

                    </View>
                </View>



                <View style={{ width: '100%', height: '20%', marginBottom: '2%' }}>
                    <View style={{ width: '100%', height: '70%', backgroundColor: '#ffffff', borderTopLeftRadius: width / 70, borderTopRightRadius: width / 70, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../../assets/Android/4x/Untitled-1.png')} style={{ width: width / 8, height: width / 8, borderRadius: (width / 4) / 2, alignSelf: 'center' }} />
                        </View>
                        <View style={{ width: '60%', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>John Smith Doe</Text>
                            <Text>Commercial Bank</Text>
                            <Text style={{ color: '#999999', fontSize: fontScale * 13, fontStyle: 'italic' }}>12 Days ago</Text>
                        </View>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: '70%', width: '80%', alignItems: 'center' }}>
                                <View style={{ height: '40%', width: '100%', borderRadius: width / 30, backgroundColor: '#FFDEEB', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: fontScale * 12, color: '#EF3F7D' }}>Normal</Text>
                                </View>
                            </View>
                        </View>
                    </View >

                    <View style={{ height: '30%', backgroundColor: '#F6F8F7', width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: width / 70, borderBottomRightRadius: width / 70 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>ID: </Text>
                                <Text>6674</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Status: </Text>
                                <Text>New</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Type: </Text>
                                <Text>Question</Text>
                            </View>

                            <View>
                                <Image source={require('../../../../assets/Android/4x/message.png')} style={{ width: width / 20, height: width / 20, alignSelf: 'center' }} />
                            </View>
                        </View>

                    </View>
                </View>


                <View style={{ width: '100%', height: '20%', marginBottom: '2%' }}>
                    <View style={{ width: '100%', height: '70%', backgroundColor: '#ffffff', borderTopLeftRadius: width / 70, borderTopRightRadius: width / 70, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../../assets/Android/4x/Untitled-1.png')} style={{ width: width / 8, height: width / 8, borderRadius: (width / 4) / 2, alignSelf: 'center' }} />
                        </View>
                        <View style={{ width: '60%', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>John Smith Doe</Text>
                            <Text>Commercial Bank</Text>
                            <Text style={{ color: '#999999', fontSize: fontScale * 13, fontStyle: 'italic' }}>12 Days ago</Text>
                        </View>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: '70%', width: '80%', alignItems: 'center' }}>
                                <View style={{ height: '40%', width: '100%', borderRadius: width / 30, backgroundColor: '#FFDEEB', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: fontScale * 12, color: '#EF3F7D' }}>Normal</Text>
                                </View>
                            </View>
                        </View>
                    </View >

                    <View style={{ height: '30%', backgroundColor: '#F6F8F7', width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: width / 70, borderBottomRightRadius: width / 70 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>ID: </Text>
                                <Text>6674</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Status: </Text>
                                <Text>New</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Type: </Text>
                                <Text>Question</Text>
                            </View>

                            <View>
                                <Image source={require('../../../../assets/Android/4x/message.png')} style={{ width: width / 20, height: width / 20, alignSelf: 'center' }} />
                            </View>
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
        backgroundColor: '#EEF0F5',
        height: height
    },
});

export default TicketInbox;