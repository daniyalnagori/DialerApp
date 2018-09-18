import React, { Component } from 'react';
import { Platform, StyleSheet, View, Dimensions, Image } from 'react-native';
import { Content, List, Left, Body, ListItem, Title, Container, Right, Header, Item, Center, Input, Icon, Button, Text, Drawer } from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');


class Mail extends Component {

    render() {
        return (
            <View style={styles.container}>

                <Header style={{ backgroundColor: '#713F92', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <View>
                        <Image source={require('../../../../assets/Android/4x/left-arrow.png')} style={{ width: width / 26, height: width / 26 }} />
                    </View>

                    <View>
                        <Text style={{ color: '#ffffff', fontSize: fontScale * 24, alignSelf: 'center' }}>@</Text>
                    </View>

                    <View style={{ width: '70%', height: '100%' }} />

                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../../assets/Android/4x/forward-arrow.png')} style={{ width: width / 26, height: width / 26 }} />
                        <Image source={require('../../../../assets/Android/4x/users-white.png')} style={{ width: width / 26, height: width / 26 }} />
                    </View>
                </Header>

                <Text>
                    Hello
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdfd',
    },
});

export default Mail;
