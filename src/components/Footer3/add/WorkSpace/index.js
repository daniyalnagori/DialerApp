import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Content, List, Left, Body, ListItem, Title, Container, Right, Header, Item, Center, Input, Icon, Button, Text, Drawer } from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import FunctAction from './../../../../store/actions/FunctAction';
import { connect } from 'react-redux';

class WorkSpace extends Component {
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

                <Header style={styles.header}>
                    <View style={styles.MenuView}>
                        <Icon style={styles.menuImage} name="menu" onPress={() => this.props.openDrawer()} />
                    </View>

                    <Input style={styles.headerInput} placeholder="Search" placeholderTextColor="#ffffff" />

                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon style={{ color: '#ffffff', fontSize: fontScale * 25 }} name="ios-search" />
                    </View>
                </Header>


                <ScrollView style={{ flex: 1 }}>
                    {this.props.Data.length ? this.props.Data.map((value, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 90, width: '100%', borderBottomColor: '#e6e6e6', borderWidth: 1, borderColor: '#fdfdfd' }}>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ borderRadius: (width / 8) / 2, width: width / 8, height: width / 8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../../../../assets/Android/4x/Untitled-1.png')} style={{ borderRadius: (width / 9) / 2, width: width / 9, height: width / 9, position: 'relative' }} />
                                        <View style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, right: 0 }}>
                                            <Text style={{ fontSize: fontScale * 12, color: '#ef3f7d' }}>@</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ width: '75%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={{ color: '#ef3f7d', fontSize: fontScale * 14, fontWeight: 'bold' }}>{value.name ? value.name : null}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '5%' }}>
                                            <Text style={{ fontSize: fontScale * 13 }} note>12:57 PM</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#4d4d4d', fontSize: fontScale * 12, fontWeight: 'bold' }}>I just got a new Friend</Text>
                                        <Text note style={{ fontSize: fontScale * 14 }}>You know I wanted a job, Yesterday I got a puppy...</Text>
                                    </View>
                                </View>

                                <View style={{ width: '5%', justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => { this.props.StateChange(); this.props.CollaborationWID(value.wid) }}>
                                        <Icon style={{ color: '#ef3f7d' }} name="ios-arrow-forward" />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        )
                    }) : null}
                </ScrollView>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdfd',
        height: height
    },
    header: { backgroundColor: '#713F92', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    MenuView: { justifyContent: 'center', alignItems: 'center', width: '15%' },
    menuImage: { color: '#ffffff', fontSize: fontScale * 25 },
    headerInput: { textAlign: 'center', color: "#000000", height: height / 18, width: '70%', backgroundColor: '#895FA5', borderRadius: width / 70 }
});


function mapStateToProp(state) {
    return ({
        // SignInSuccess: state.userAuth.authUser,
    })
}
function mapDispatchToProp(dispatch) {
    return {
        CollaborationWID: (id) => {
            dispatch(FunctAction.CollaborationWID(id))
        },
    };
}

export default connect(mapStateToProp, mapDispatchToProp)(WorkSpace);

