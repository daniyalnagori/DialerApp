import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Content, List, Left, Body, ListItem, Title, Container, Right, Header, Item, Center, Input, Icon, Button, Text, Drawer } from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import Dropdown from './../../../TicketScreen/DropDown/dropdown'

class DrawerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={{ backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <View style={{ width: '20%' }} />

                    <View style={{ width: '40%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: width / 13, height: width / 13, borderRadius: (width / 13) / 2, backgroundColor: '#EF3F7D', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ffffff' }}>DW</Text>
                        </View>

                        <View style={{ width: width / 13, height: width / 13, borderRadius: (width / 13) / 2, backgroundColor: '#EF3F7D', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ffffff' }}>W1</Text>
                        </View>

                        <View style={{ width: width / 13, height: width / 13, borderRadius: (width / 13) / 2, backgroundColor: '#EF3F7D', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ffffff' }}>W1</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%' }}>
                        <Icon style={{ color: '#EF3F7D', fontSize: fontScale * 25 }} name="menu" onPress={() => this.props.closeDrawer()} />
                    </View>

                </Header>

                <View style={{ height: '20%', width: '100%', backgroundColor: '#F9F9F9', justifyContent: 'space-around', alignItems: 'center' }}>

                    <View style={{ width: '80%', height: '25%', backgroundColor: '#ffffff', borderColor: '#e6e6e6', borderWidth: 1, borderRadius: width / 70, justifyContent: 'center', alignItems: 'center' }}>
                        <Dropdown
                            placeholder="Support"
                            itemView={styles.itemView}
                            items={[
                                "Update1", "Update2", "Update3"
                            ]}
                            onValue={(value) => {
                                let val;
                                switch (value) {
                                    case "Update1":
                                        val = "Update1";
                                        break;
                                    case "Update2":
                                        val = "Update1";
                                        break;
                                    case "Gain Weight":
                                        val = "gain";
                                        break;
                                    default:
                                        val = value
                                        break;
                                }
                                this.setState({ dropdownValue: val })
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '80%' }}>
                        <View style={{ width: width / 12, height: width / 12, borderRadius: (width / 12) / 2, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ef3f7d' }}>@</Text>
                        </View>

                        <View style={{ width: width / 12, height: width / 12, borderRadius: (width / 12) / 2, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../../assets/Android/4x/message-big-pink.png')} style={{ width: width / 30, height: width / 30 }} />
                        </View>

                        <View style={{ width: width / 12, height: width / 12, borderRadius: (width / 12) / 2, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../../assets/Android/4x/label-pink.png')} style={{ width: width / 30, height: width / 30 }} />
                        </View>

                        <View style={{ width: width / 12, height: width / 12, borderRadius: (width / 12) / 2, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../../assets/Android/4x/document-pink.png')} style={{ width: width / 38, height: width / 30 }} />
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', flexDirection: 'row' }}>
                    <View style={{ width: '20%' }} />

                    <View style={{ justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%' }}>
                            <Image source={require('../../../../assets/Android/4x/inbox-pink.png')} style={{ width: width / 18, height: width / 18 }} />
                            <Text>Inbox</Text>
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
        backgroundColor: '#eef0f5',
    },
    itemView: {
        backgroundColor: '#ffffff',
        top: 0,
        zIndex: 100,
        borderRadius: 2,
        position: 'absolute',
        width: '80%',
        elevation: 20,
        height: '100%'
    },
});

export default DrawerComponent;
