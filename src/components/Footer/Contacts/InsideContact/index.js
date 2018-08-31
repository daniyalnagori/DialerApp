import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Content, List, Left, Body, Title, ListItem, Container, Right, Header, Item, Center, Input, Icon, Button, Text } from 'native-base';


const { width } = Dimensions.get('window');

class InsideContact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ backgroundColor: '#713F92', }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: '2%' }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.props.backfunction}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <Icon style={{ color: '#ffffff' }} name='arrow-back' />
                                <Text style={{ color: '#ffffff', paddingLeft: '2%' }}>Back</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ borderRadius: (width / 15) / 2, width: width / 15, height: width / 15, color: '#fffff', alignItems: "center", borderColor: '#ffffff', borderWidth: 1, alignSelf: 'center' }}>
                            <Icon style={{ color: '#ffffff' }} name="add" />
                        </View>
                    </View>

                    <View>
                        <Image source={require('../../../../assets/Android/4x/Untitled-1.png')} style={{ width: width / 5, height: width / 5, borderRadius: (width / 4) / 2, alignSelf: 'center' }} />
                        <Text style={{ fontSize: 30, textAlign: 'center', color: "white" }}>Abeywardene</Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: "white" }}>Electrican</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-around", width: '90%', alignSelf: 'center', marginTop: '5%', marginBottom: 10 }} >
                        <View>
                            <Image source={require('../../../../assets/Android/4x/meeage_profilexxxhdpi.png')} style={{ width: width / 12, height: width / 12, borderRadius: (width / 12) / 2 }} />
                            <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>message</Text>
                        </View>

                        <View>
                            <Image source={require('../../../../assets/Android/4x/mobile_profilexxxhdpi.png')} style={{ width: width / 12, height: width / 12, borderRadius: (width / 12) / 2 }} />
                            <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>mobile</Text>
                        </View>

                        <View>
                            <Image source={require('../../../../assets/Android/4x/video_profilexxxhdpi.png')} style={{ width: width / 12, height: width / 12, borderRadius: (width / 12) / 2 }} />
                            <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Video</Text>
                        </View>

                        <View>
                            <Image source={require('../../../../assets/Android/4x/Call_selectedxxxhdpi.png')} style={{ width: width / 12, height: width / 12, borderRadius: (width / 12) / 2 }} />
                            <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Mail</Text>
                        </View>

                        <View>
                            <Image source={require('../../../../assets/Android/4x/mobile_profilexxxhdpi.png')} style={{ width: width / 12, height: width / 12, borderRadius: (width / 12) / 2 }} />
                            <Text style={{ fontSize: 12, textAlign: 'center', color: "white", marginTop: '10%' }}>Pay</Text>
                        </View>
                    </View>
                </View >

                <View>
                    <ListItem style={{ flexDirection: 'column', }}>
                        <Text style={{ color: '#ef3f7d', fontSize: 14, textAlign: "left", width: "100%" }}>mobile</Text>
                        <Text style={{ textAlign: "left", width: "100%", marginTop: '1%', color: '#000000' }} note>+1 (202) 555-0158</Text>
                    </ListItem>

                    <ListItem style={{ flexDirection: 'column', }}>
                        <Text style={{ color: '#ef3f7d', fontSize: 14, textAlign: "left", width: "100%" }}>Facebook</Text>
                        <Text style={{ textAlign: "left", width: "100%", marginTop: '1%', color: '#000000' }} note>0</Text>
                    </ListItem>

                    <ListItem style={{ flexDirection: 'column', }}>
                        <Text style={{ textAlign: "left", width: "100%" }} note>Notes</Text>
                    </ListItem>

                    <ListItem >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={require('../../../../assets/Android/4x/messagexxxhdpi.png')} style={{ width: width / 30, height: width / 30, marginRight: '5%' }} resizeMode="contain" />
                            <Text style={{ fontSize: 14 }}>Send Message</Text>
                        </View>
                    </ListItem>

                    <ListItem >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={require('../../../../assets/Android/4x/messagexxxhdpi.png')} style={{ width: width / 30, height: width / 30, marginRight: '5%' }} resizeMode="contain" />
                            <Text style={{ fontSize: 14 }}>Share Contact</Text>
                        </View>
                    </ListItem>

                    <ListItem >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={require('../../../../assets/Android/4x/messagexxxhdpi.png')} style={{ width: width / 30, height: width / 30, marginRight: '5%' }} resizeMode="contain" />
                            <Text style={{ fontSize: 14 }}>Add to Favourites</Text>
                        </View>
                    </ListItem>

                    <ListItem >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={require('../../../../assets/Android/4x/messagexxxhdpi.png')} style={{ width: width / 30, height: width / 30, marginRight: '5%' }} resizeMode="contain" />
                            <Text style={{ fontSize: 14 }}>Share My Location</Text>
                        </View>
                    </ListItem>
                </View>


            </View >

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default InsideContact;