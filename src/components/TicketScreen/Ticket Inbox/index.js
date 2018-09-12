import React, { Component } from 'react';
import { Platform, StyleSheet, Picker, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Header, Input, Icon, } from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import Dropdown from './../DropDown/dropdown'



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

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '7%' }}>

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
                            <Image source={require('../../../assets/Android/4x/settingsxxxhdpi.png')} style={{ width: width / 25, height: height / 40 }} />
                        </View>


                    </View>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '30%', marginLeft: '2%', height: '5%' }}>
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

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', overflow: "visible", position: "relative" }}>

                        <View style={{ marginLeft: '2%', width: '40%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                            <View>
                                <Text style={{ color: '#999999', fontSize: fontScale * 12 }}>Filter by:</Text>
                            </View>

                            <View style={{ minHeight: '10%', width: '40%', fontSize: 10, position: "relative", overflow: "visible" }}>
                                {/* <Picker
                                    mode="dropdown"
                                    style={{ width: 120, fontSize: 2 }}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange.bind(this)}
                                    itemStyle={{ fontSize: 2 }}
                                >
                                    <Picker.Item label="Update" value="key0" />
                                    <Picker.Item label="Update1" value="key1" />
                                    <Picker.Item label="Update3" value="key2" />
                                </Picker> */}
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

                            <Image source={require('../../../assets/Android/4x/list-view-pink.png')} style={{ width: width / 30, height: height / 50 }} />

                            <Image source={require('../../../assets/Android/4x/grid-view-gray.png')} style={{ width: width / 30, height: height / 50, marginRight: '2%' }} />

                        </View>

                    </View>

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
                                <Image source={require('../../../assets/Android/4x/Untitled-1.png')} style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2 }} />
                            </View>
                            <View style={{ width: '72%' }}>
                                <Text style={{ color: '#666666', fontSize: fontScale * 12, paddingLeft: '3%' }}>
                                    John Smith Doe
                            </Text>
                            </View>
                        </View>

                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../assets/Android/4x/message.png')} style={{ width: width / 20, height: height / 35, marginRight: '2%' }} />
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
                                <Image source={require('../../../assets/Android/4x/Untitled-1.png')} style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2 }} />
                            </View>
                            <View style={{ width: '72%' }}>
                                <Text style={{ color: '#666666', fontSize: fontScale * 12, paddingLeft: '3%' }}>
                                    John Smith Doe
                        </Text>
                            </View>
                        </View>

                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../assets/Android/4x/notification.png')} style={{ width: width / 22, height: height / 35, marginRight: '2%' }} />
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
                                <Image source={require('../../../assets/Android/4x/Untitled-1.png')} style={{ width: width / 20, height: width / 20, borderRadius: (width / 20) / 2 }} />
                            </View>
                            <View style={{ width: '72%' }}>
                                <Text style={{ color: '#666666', fontSize: fontScale * 12, paddingLeft: '3%' }}>
                                    John Smith Doe
                                </Text>
                            </View>
                        </View>

                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../assets/Android/4x/message.png')} style={{ width: width / 20, height: height / 35, marginRight: '2%' }} />
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