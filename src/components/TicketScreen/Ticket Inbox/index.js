import React, { Component } from 'react';
import { Platform, StyleSheet, Picker, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Input, Icon, } from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import Dropdown from './../DropDown/dropdown'
import ListView from './ListView'
import GridView from './GridView'


class TicketInbox extends Component {
    constructor() {
        super()
        this.state = {
            selected: "key2",
            dropdownValue: 'asf',
            listView: true,
            gridView: false,
            bgColorMain: '#ffffff'
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
                <View style={{ width: '100%', height: '100%', backgroundColor: '#eef0f5' }}>

                    <View style={{ backgroundColor: this.state.bgColorMain, height: '20%' }}>

                        <View style={{ height: '55%', borderBottomLeftRadius: width / 70, borderBottomRightRadius: width / 70, backgroundColor: '#ffffff' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '55%' }}>
                                <View style={{ width: '60%' }}>
                                    <Text style={{ color: '#000000', fontSize: fontScale * 15, marginLeft: '4%' }}>
                                        My Tickets
                            </Text>
                                </View>
                                <View style={{ height: '90%', width: '20%', justifyContent: "center", flexDirection: "row", alignItems: "center" }} >
                                    <Icon style={{ color: '#999999', paddingLeft: '1%', fontSize: fontScale * 16, marginLeft: '3%' }} name="ios-search" />
                                    <Input style={{ textAlign: 'center', color: "#000000", minHeight: height / 14, fontSize: fontScale * 10 }} placeholder="Search..." placeholderTextColor="#00000" />
                                </View>
                                <View style={{ marginRight: '4%' }}>
                                    <Image source={require('../../../assets/Android/4x/settingsxxxhdpi.png')} style={{ width: width / 24, height: height / 40 }} />
                                </View>
                            </View>

                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '30%', marginLeft: '2%', height: '45%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/Android/4x/edit-mem-icon.png')} style={{ width: width / 35, height: height / 60 }} />
                                    <Text style={{ fontSize: fontScale * 12, marginLeft: '5%', alignSelf: 'center' }}>25</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/Android/4x/send-icon.png')} style={{ width: width / 35, height: height / 58 }} />
                                    <Text style={{ fontSize: fontScale * 12, marginLeft: '5%', alignSelf: 'center' }}>152</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/Android/4x/Favourites_selectedxxxhdpi.png')} style={{ width: width / 35, height: height / 58 }} />
                                    <Text style={{ fontSize: fontScale * 12, marginLeft: '5%', alignSelf: 'center' }}>25</Text>
                                </View>
                            </View>

                            <View style={{ borderColor: '#ffffff', borderBottomColor: '#eef0f5', borderWidth: 1, width: '95%', alignSelf: 'center' }}>
                            </View>

                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '45%' }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', width: '100%', height: '65%', backgroundColor: '#ffffff', borderRadius: width / 70 }}>
                                <View style={{ width: '40%', marginLeft: '2%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View>
                                        <Text style={{ color: '#999999', fontSize: fontScale * 12 }}>Filter by:</Text>
                                    </View>
                                    <View style={{ Height: '12%', width: '55%', fontSize: 10, position: "relative", overflow: "visible", justifyContent: 'center', alignItems: 'center', borderColor: '#e6e6e6', borderWidth: 1, borderRadius: width / 80 }}>
                                        <View style={{ height: '90%', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Dropdown
                                                placeholder="Update"
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
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '55%' }}>
                                    <Text style={{ fontSize: fontScale * 12, color: '#999999' }}>
                                        1 - 10 of 16
                            </Text>
                                    <View style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2, backgroundColor: '#f3e9ff', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../../../assets/Android/4x/arrowhead-thin-outline-to-the-left.png')} style={{ width: width / 38, height: height / 62 }} />
                                    </View>
                                    <View style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2, backgroundColor: '#f3e9ff', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../../../assets/Android/4x/arrow-point-to-right.png')} style={{ width: width / 38, height: height / 62 }} />
                                    </View>
                                    <View style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2, backgroundColor: '#FFDEEB', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../../../assets/Android/4x/reload.png')} style={{ width: width / 35, height: height / 58 }} />
                                    </View>
                                    <TouchableOpacity onPress={() => this.setState({ listView: true, gridView: false, bgColorMain: '#ffffff' })}>
                                        {this.state.listView ? <Image source={require('../../../assets/Android/4x/list-view-pink.png')} style={{ width: width / 30, height: height / 50 }} />
                                            : <Image source={require('../../../assets/Android/4x/list-view-gray.png')} style={{ width: width / 31.2, height: height / 50 }} />}
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ listView: false, gridView: true, bgColorMain: '#eef0f5' })}>
                                        {this.state.gridView ? <Image source={require('../../../assets/Android/4x/grid-view-icon-pink.png')} style={{ width: width / 31.2, height: height / 50, marginRight: '2%' }} />
                                            : <Image source={require('../../../assets/Android/4x/grid-view-gray.png')} style={{ width: width / 30, height: height / 50, marginRight: '2%' }} />}
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    </View>

                    <View style={{ width: '100%', height: '100%' }}>
                        <ScrollView style={{ width: '100%', height: '100%' }}>
                            {this.state.listView ? <ListView /> : null}
                            {this.state.gridView ? <GridView /> : null}
                        </ScrollView>
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
    },
    itemView: {
        backgroundColor: '#fff',
        top: 0,
        zIndex: 100,
        borderRadius: 2,
        position: 'absolute',
        width: '80%',
        elevation: 20
    },
});

export default TicketInbox;