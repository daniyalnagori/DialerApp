import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Content, List, Left, Body, ListItem, Title, Container, Right, Header, Item, Center, Input, Icon, Button, Text, Drawer } from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import Dropdown from './../../../TicketScreen/DropDown/dropdown'

class DrawerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DWbgCol: '#EF3F7D',
            W1bgCol: '#764497',
            W11bgCol: '#764497',
            DW: true,
            W1: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}>

                    <View style={styles.extraSpace} />

                    <View style={styles.HeadOptions}>
                        <TouchableOpacity onPress={() => this.setState({ DWbgCol: '#EF3F7D', W1bgCol: '#764497', W11bgCol: '#764497', DW: true, W1: false })}>
                            <View style={[styles.HeadOptionStyle, { backgroundColor: this.state.DWbgCol }]}>
                                <Text style={styles.HeadOptionFontColor}>DW</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ DWbgCol: '#764497', W1bgCol: '#EF3F7D', W11bgCol: '#764497', DW: false, W1: true })}>
                            <View style={[styles.HeadOptionStyle, { backgroundColor: this.state.W1bgCol }]}>
                                <Text style={styles.HeadOptionFontColor}>W1</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ DWbgCol: '#764497', W1bgCol: '#764497', W11bgCol: '#EF3F7D', DW: false, W1: false })}>
                            <View style={[styles.HeadOptionStyle, { backgroundColor: this.state.W11bgCol }]}>
                                <Text style={styles.HeadOptionFontColor}>W1</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.CloseDrawer}>
                        <Icon style={styles.closeDrawerIcon} name="menu" onPress={() => this.props.closeDrawer()} />
                    </View>

                </Header>

                <View style={styles.DropdownMain}>

                    <View style={styles.DropdownView}>
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

                    <View style={styles.DropdownBelowOpt}>

                        <TouchableOpacity onPress={() => { this.props.closeDrawer(); /*this.props.StateChange()*/ }}>
                            <View style={styles.DropdownBelowOptView}>
                                <Text style={styles.DropdownBelowOptColor}>@</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.DropdownBelowOptView}>
                            <Image source={require('../../../../assets/Android/4x/message-big-pink.png')} style={styles.DropdownBelowOptImage} />
                        </View>

                        <View style={styles.DropdownBelowOptView}>
                            <Image source={require('../../../../assets/Android/4x/label-pink.png')} style={styles.DropdownBelowOptImage} />
                        </View>

                        <View style={styles.DropdownBelowOptView}>
                            <Image source={require('../../../../assets/Android/4x/document-pink.png')} style={styles.DropdownBelowOptImage1} />
                        </View>
                    </View>
                </View>

                {this.state.DW ?
                    <View style={styles.DrawerOptionsMain}>

                        <View style={styles.Draweradjustment} />

                        <View style={styles.DrawerOptWH}>

                            <View style={styles.InboxMain}>
                                <Image source={require('../../../../assets/Android/4x/inbox-pink.png')} style={styles.InboxImage} />
                                <Text style={styles.InboxText}>Inbox</Text>
                            </View>

                            <View style={styles.BelowInboxOptMain}>

                                <View style={styles.BelowInboxOptView}>
                                    <Text style={styles.BelowInboxOptText}>#Unassigned</Text>
                                </View>

                                <View style={styles.BelowInboxOptView}>
                                    <Text style={styles.BelowInboxOptText}>#SLA: Red</Text>
                                </View>

                                <View style={styles.BelowInboxOptView}>
                                    <Text style={styles.BelowInboxOptText}>#SLA: Amber</Text>
                                </View>

                                <View style={styles.BelowInboxOptView}>
                                    <Text style={styles.BelowInboxOptText}>#Approve: Pending</Text>
                                </View>

                                <View style={[styles.otherOpt, { width: '33%' }]}>
                                    <Image source={require('../../../../assets/Android/4x/plus-green.png')} style={styles.addImg} />
                                    <Text style={styles.otherOptText}>Add more tags</Text>
                                </View>

                                <View style={[styles.otherOpt, { width: '25%' }]}>
                                    <Image source={require('../../../../assets/Android/4x/settings-pnk-drawer.png')} style={styles.settingImg} />
                                    <Text style={styles.otherOptText}>Settings</Text>
                                </View>
                            </View>

                        </View>

                    </View>
                    : null}

                {this.state.W1 ?
                    <View style={styles.DrawerOptionsMain}>

                        <View style={styles.Draweradjustment} />

                        <View style={styles.DrawerOptWH}>

                            <View style={styles.Collaboration}>
                                <Image source={require('../../../../assets/Android/4x/copy-pink.png')} style={styles.settingImg} />
                                <Text style={styles.CollaborationText}>All Collaborations</Text>
                            </View>

                            <View style={styles.BelowCollabOptMain}>

                                <View style={styles.BelowCollabOptView}>
                                    <Text style={styles.BelowInboxOptText}>General</Text>
                                </View>

                                <View style={styles.BelowCollabOptView}>
                                    <Text style={styles.BelowInboxOptText}>Development</Text>
                                </View>

                                <View style={styles.BelowCollabOptViewLast}>
                                    <Text style={styles.BelowInboxOptText}>Sales</Text>
                                </View>

                            </View>

                        </View>

                    </View>

                    : null}

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef0f5',
    },
    header: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    extraSpace: { width: '20%' },
    HeadOptions: { width: '40%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' },
    HeadOptionStyle: { width: width / 13, height: width / 13, borderRadius: (width / 13) / 2, justifyContent: 'center', alignItems: 'center' },
    HeadOptionFontColor: { color: '#ffffff' },
    CloseDrawer: { justifyContent: 'center', alignItems: 'center', width: '20%' },
    closeDrawerIcon: { color: '#EF3F7D', fontSize: fontScale * 25 },
    DropdownMain: { height: '20%', width: '100%', backgroundColor: '#F9F9F9', justifyContent: 'space-around', alignItems: 'center', borderWidth: 1, borderColor: '#e6e6e6', },
    DropdownView: { width: '80%', height: '30%', backgroundColor: '#ffffff', borderColor: '#e6e6e6', borderWidth: 1, borderRadius: width / 70, justifyContent: 'center', alignItems: 'center' },
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
    DropdownBelowOpt: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '80%' },
    DropdownBelowOptView: { width: width / 12, height: width / 12, borderRadius: (width / 12) / 2, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' },
    DropdownBelowOptColor: { color: '#ef3f7d' },
    DropdownBelowOptImage: { width: width / 30, height: width / 30 },
    DropdownBelowOptImage1: { width: width / 38, height: width / 30 },
    DrawerOptionsMain: { width: '100%', height: '100%', flexDirection: 'row', backgroundColor: '#ffffff' },
    Draweradjustment: { width: '5%', height: '100%', justifyContent: 'center' },
    DrawerOptWH: { width: '90%', height: '100%' },
    InboxMain: { justifyContent: 'space-around', height: '8%', alignItems: 'center', flexDirection: 'row', width: '30%' },
    otherOpt: { justifyContent: 'space-between', height: '16.66%', flexDirection: 'row', alignItems: 'center' },
    InboxImage: { width: width / 18, height: width / 18 },
    InboxText: { color: '#4d4d4d', fontSize: fontScale * 12 },
    BelowInboxOptMain: { width: '100%', height: '45%', justifyContent: 'space-between' },
    BelowInboxOptView: { borderBottomColor: '#e6e6e6', borderWidth: 1, borderColor: '#ffffff', justifyContent: 'center', height: '16.66%', width: '100%' },
    BelowInboxOptText: { color: '#8c8c8c', fontSize: fontScale * 12 },
    otherOptText: { fontSize: fontScale * 12, color: '#4d4d4d' },
    addImg: { width: width / 30, height: width / 30 },
    settingImg: { width: width / 18, height: height / 29 },
    Collaboration: { justifyContent: 'space-around', height: '8%', alignItems: 'center', flexDirection: 'row', width: '40%' },
    CollaborationText: { fontSize: fontScale * 12 },
    BelowCollabOptMain: { width: '100%', height: '20%', justifyContent: 'space-between' },
    BelowCollabOptView: { borderBottomColor: '#e6e6e6', borderWidth: 1, borderColor: '#ffffff', justifyContent: 'center', height: '33.33%', width: '100%' },
    BelowCollabOptViewLast: { justifyContent: 'center', height: '33.33%', width: '100%' },
});

export default DrawerComponent;
