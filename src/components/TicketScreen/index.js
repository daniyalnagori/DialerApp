import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Header, Input, Icon } from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import MyNote from './My Note';
import TicketDuo from './Ticket Duo';
import TicketInbox from './Ticket Inbox';
import UserProfile from './User Profile'

class TicketScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profilebg: '#ffffff',
            ticketbg: '#ffffff',
            notebg: '#ffffff',
            inboxbg: '#ef3f7d',
            profilecol: '#4d4d4d',
            ticketcol: '#4d4d4d',
            notecol: '#4d4d4d',
            inboxcol: '#ffffff',
            userProfile: false,
            ticketDuo: false,
            myNote: false,
            ticketInbox: true
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ justifyContent: 'space-between', height: '100%' }}>

                    <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '5%' }}>
                        <View style={{ width: '20%', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Footer')}>
                                <Image style={{ width: width / 8.3, height: height / 28.5 }} source={require('../../assets/Android/4x/logo.png')}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '50%', justifyContent: 'center' }}>
                            <View style={{ backgroundColor: "#ffffff", height: '60%', width: '100%', borderRadius: width / 15, justifyContent: "center", flexDirection: "row", alignItems: "center", borderColor: '#e6e6e6', borderWidth: 1 }} >
                                <Icon style={{ color: '#999999', paddingLeft: '1%', fontSize: fontScale * 14, marginLeft: '3%' }} name="ios-search" />
                                <Input style={{ textAlign: 'center', color: "#000000", minHeight: height / 14, fontSize: fontScale * 8 }} placeholder="Search" placeholderTextColor="#00000" />
                            </View>
                        </View>

                        <View style={{ width: '25%', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View>
                                <Image source={require('../../assets/Android/4x/envelope.png')} style={{ width: width / 25, height: height / 50 }} />
                            </View>

                            <View>
                                <Image source={require('../../assets/Android/4x/call.png')} style={{ width: width / 30.5, height: height / 50 }} />
                            </View>

                            <View>
                                <Image source={require('../../assets/Android/4x/cup-icon.png')} style={{ width: width / 30, height: height / 50 }} />
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '95%', height: '85%', backgroundColor: '#ffffff', alignItems: 'center', alignSelf: 'center', borderRadius: width / 70 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '7%', borderColor: '#ffffff', borderTopLeftRadius: width / 70, borderTopRightRadius: width / 70, borderBottomColor: '#eef0f5', borderWidth: 1 }}>
                            <Image source={require('../../assets/Android/4x/windows.png')} style={{ width: width / 28, height: height / 45, marginLeft: '1.5%' }} />
                            <TouchableOpacity onPress={() => { this.setState({ profilebg: '#ef3f7d', profilecol: '#ffffff', ticketbg: '#ffffff', ticketcol: '#4d4d4d', notebg: '#ffffff', notecol: '#4d4d4d', inboxbg: '#ffffff', inboxcol: '#4d4d4d', userProfile: true, ticketDuo: false, myNote: false, ticketInbox: false }) }}>
                                <View style={{ backgroundColor: this.state.profilebg, height: '100%', alignItems: 'center', justifyContent: 'center', paddingLeft: '1%', paddingRight: '1%' }}>
                                    <Text style={{ fontSize: fontScale * 11, color: this.state.profilecol }}>User Profile</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({ profilebg: '#ffffff', profilecol: '#4d4d4d', ticketbg: '#ef3f7d', ticketcol: '#ffffff', notebg: '#ffffff', notecol: '#4d4d4d', inboxbg: '#ffffff', inboxcol: '#4d4d4d', userProfile: false, ticketDuo: true, myNote: false, ticketInbox: false }) }}>
                                <View style={{ fontSize: fontScale * 11, backgroundColor: this.state.ticketbg, alignItems: 'center', height: '100%', justifyContent: 'center', paddingLeft: '1.5%', paddingRight: '1.5%' }}>
                                    <Text style={{ fontSize: fontScale * 11, color: this.state.ticketcol }}>Ticket Duo</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({ profilebg: '#ffffff', profilecol: '#4d4d4d', ticketbg: '#ffffff', ticketcol: '#4d4d4d', notebg: '#ef3f7d', notecol: '#ffffff', inboxbg: '#ffffff', inboxcol: '#4d4d4d', userProfile: false, ticketDuo: false, myNote: true, ticketInbox: false }) }} >
                                <View style={{ fontSize: fontScale * 11, backgroundColor: this.state.notebg, alignItems: 'center', height: '100%', justifyContent: 'center', paddingLeft: '1.5%', paddingRight: '1.5%' }}>
                                    <Text style={{ fontSize: fontScale * 11, color: this.state.notecol }}>My Note</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({ profilebg: '#ffffff', profilecol: '#4d4d4d', ticketbg: '#ffffff', ticketcol: '#4d4d4d', notebg: '#ffffff', notecol: '#4d4d4d', inboxbg: '#ef3f7d', inboxcol: '#ffffff', userProfile: false, ticketDuo: false, myNote: false, ticketInbox: true }) }}>
                                <View style={{ fontSize: fontScale * 11, backgroundColor: this.state.inboxbg, alignItems: 'center', height: '100%', justifyContent: 'center', paddingLeft: '1.5%', paddingRight: '1.5%' }/*[styles.triangle]*/} >
                                    <Text style={{ fontSize: fontScale * 11, color: this.state.inboxcol }}>{/*Ticket Inbox*/}WorkSpace</Text>
                                </View>
                            </TouchableOpacity>
                            <Image source={require('../../assets/Android/4x/back.png')} style={{ width: width / 33, height: height / 62, marginLeft: '1.5%' }} />
                            <Image source={require('../../assets/Android/4x/next.png')} style={{ width: width / 33, height: height / 62, marginLeft: '1.5%' }} />
                            <Image source={require('../../assets/Android/4x/more.png')} style={{ width: width / 34, height: height / 55, marginLeft: '1.5%' }} />
                            <Image source={require('../../assets/Android/4x/windows.png')} style={{ width: width / 28, height: height / 45, marginRight: '1.5%' }} />
                        </View>

                        <View style={{ width: '100%', height: '100%', }}>
                            {this.state.userProfile ? <UserProfile /> : null}
                            {this.state.ticketDuo ? <TicketDuo /> : null}
                            {this.state.myNote ? <MyNote /> : null}
                            {this.state.ticketInbox ? <TicketInbox /> : null}
                        </View>

                    </View>

                    <View style={{ backgroundColor: "#ffffff", height: '60%', height: '8%', width: '100%', justifyContent: "center", flexDirection: "row", alignItems: "center", borderColor: '#e6e6e6', borderWidth: 2 }} >
                        <Image source={require('../../assets/Android/4x/add.png')} style={{ width: width / 25.5, height: height / 40, marginLeft: '1.5%' }} />
                        <Input style={{ color: "#000000", minHeight: height / 14, fontSize: fontScale * 12 }} placeholder="Write something" placeholderTextColor="#00000" />
                        <Image source={require('../../assets/Android/4x/attach.png')} style={{ width: width / 28, height: height / 45, marginLeft: '1.5%', color: '#b3b3b3' }} />
                        <Image source={require('../../assets/Android/4x/clip.png')} style={{ width: width / 28, height: height / 45, marginLeft: '1.5%', color: '#b3b3b3' }} />
                        <Image source={require('../../assets/Android/4x/smile.png')} style={{ width: width / 28, height: height / 45, marginLeft: '1.5%', color: '#b3b3b3' }} />
                        <Image source={require('../../assets/Android/4x/send-icon.png')} style={{ width: width / 28, height: height / 45, marginLeft: '1.5%', color: '#b3b3b3' }} />
                        <Image source={require('../../assets/Android/4x/view-full-screen-gray.png')} style={{ width: width / 28, height: height / 44, marginLeft: '1.5%', marginRight: '1.5%', color: '#b3b3b3' }} />
                    </View>

                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef0f5',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red',
        transform: [
            { rotate: '-180deg' }
        ]
    }
});

export default TicketScreen;