import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Content, List, Left, Body, ListItem, Title, Container, Right, Header, Item, Center, Input, Icon, Button, Text, Drawer } from 'native-base'
// import SideBar from './yourPathToSideBar';
const { height, width, fontScale } = Dimensions.get('window');
import SideBar from './Drawer'

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

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} closeDrawer={() => this.closeDrawer()} />}
                onClose={() => this.closeDrawer()}
            >
                <View style={styles.container}>

                    <Header style={{ backgroundColor: '#713F92', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '15%' }}>
                            <Icon style={{ color: '#ffffff', fontSize: fontScale * 25 }} name="menu" onPress={() => this.openDrawer()} />
                        </View>

                        <Input style={{ textAlign: 'center', color: "#000000", height: height / 18, width: '70%', backgroundColor: '#895FA5', borderRadius: width / 70 }} placeholder="Search" placeholderTextColor="#ffffff" />

                        <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon style={{ color: '#ffffff', fontSize: fontScale * 25 }} name="ios-search" />
                        </View>
                    </Header>




                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '13%', borderBottomColor: '#e6e6e6', borderWidth: 1, borderColor: '#fdfdfd' }}>

                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ borderRadius: (width / 8) / 2, width: width / 8, height: width / 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../../assets/Android/4x/Untitled-1.png')} style={{ borderRadius: (width / 9) / 2, width: width / 9, height: width / 9, position: 'relative' }} />
                                <View style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, right: 0 }}>
                                    <Text style={{ fontSize: fontScale * 12, color: '#ef3f7d' }}>@</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: '75%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#ef3f7d' }}>Kumar Pratik</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '5%' }}>
                                    <Text style={{ fontSize: fontScale * 13 }} note>12:57 PM</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: '#4d4d4d', fontSize: fontScale * 13 }}>I just got a new Friend</Text>
                                <Text note style={{ fontSize: fontScale * 14 }}>You know I wanted a job, Yesterday I got a puppy...</Text>
                            </View>
                        </View>

                        <View style={{ width: '5%', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon style={{ color: '#ef3f7d' }} name="ios-arrow-forward" />
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '13%', borderBottomColor: '#e6e6e6', borderWidth: 1, borderColor: '#fdfdfd' }}>

                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ borderRadius: (width / 8) / 2, width: width / 8, height: width / 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../../assets/Android/4x/Untitled-1.png')} style={{ borderRadius: (width / 9) / 2, width: width / 9, height: width / 9, position: 'relative' }} />
                                <View style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, right: 0 }}>
                                    <Image source={require('../../../assets/Android/4x/message-big-pink.png')} style={{ width: width / 35, height: width / 35 }} />
                                </View>
                            </View>
                        </View>

                        <View style={{ width: '75%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#ef3f7d' }}>Jim Smith</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '5%' }}>
                                    <Text style={{ fontSize: fontScale * 13 }} note>22:45 PM</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: '#4d4d4d', fontSize: fontScale * 13 }}>Next Vaccination</Text>
                                <Text note style={{ fontSize: fontScale * 14 }}>Can you please tell me when my dogs next....</Text>
                            </View>
                        </View>

                        <View style={{ width: '5%', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon style={{ color: '#ef3f7d' }} name="ios-arrow-forward" />
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '13%', borderBottomColor: '#e6e6e6', borderWidth: 1, borderColor: '#fdfdfd' }}>

                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ borderRadius: (width / 8) / 2, width: width / 8, height: width / 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../../assets/Android/4x/Untitled-1.png')} style={{ borderRadius: (width / 9) / 2, width: width / 9, height: width / 9, position: 'relative' }} />
                                <View style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, right: 0 }}>
                                    <Text style={{ fontSize: fontScale * 12, color: '#ef3f7d' }}>@</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: '75%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#ef3f7d' }}>Garry Bear</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '5%' }}>
                                    <Text style={{ fontSize: fontScale * 13 }} note>12:57 PM</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: '#4d4d4d', fontSize: fontScale * 13 }}>I just got a new Friend</Text>
                                <Text note style={{ fontSize: fontScale * 14 }}>You know I wanted a dog. Yesterday I got a puppy...</Text>
                            </View>
                        </View>

                        <View style={{ width: '5%', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon style={{ color: '#ef3f7d' }} name="ios-arrow-forward" />
                        </View>
                    </View>

                </View >
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdfd',
    },
});

export default WorkSpace;
