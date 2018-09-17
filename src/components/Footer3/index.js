import React from 'react';
import Notification from './Notification'
import Drawer from './Drawer'
import add from './add'
import phoneBook from './phonebook'
import Call from './call'
import { View, Button, Text, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const { width } = Dimensions.get('window');


const NotificationStack = createStackNavigator({
    Notification: Notification,
}, {
        headerMode: "none",
        header: null,
    });

const DrawerStack = createStackNavigator({
    Drawer: Drawer,
}, {
        headerMode: "none",
        header: null,
    });

const addStack = createStackNavigator({
    add: add,
}, {
        headerMode: "none",
        header: null,
    });

const phoneBookStack = createStackNavigator({
    phoneBook: phoneBook,
}, {
        headerMode: "none",
        header: null,
    });

const CallStack = createStackNavigator({
    Call: Call,
}, {
        headerMode: "none",
        header: null,
    });


export default createBottomTabNavigator(
    {
        Notification: NotificationStack,
        Drawer: DrawerStack,
        add: addStack,
        phoneBook: phoneBookStack,
        Call: CallStack,
    },
    {

        headerMode: null,
        header: null,
        navigationOptions: ({ navigation }) => ({
            headerMode: null,
            header: null,
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Notification') {
                    iconName = focused ? require('../../assets/Android/4x/notification123.png') : require('../../assets/Android/4x/notificationabv.png')
                    size = width / 18
                    sizew = width / 18
                } else if (routeName === 'Drawer') {
                    iconName = focused ? require('../../assets/Android/4x/tray-with-documents-pink.png') : require('../../assets/Android/4x/tray-with-documents-gray.png');
                    size = width / 18
                    sizew = width / 18
                } else if (routeName === 'add') {
                    iconName = focused ? require('../../assets/Android/4x/add-circular-button-outline-with-plus-sign-pink.png') : require('../../assets/Android/4x/add-circular-button-outline-with-plus-sign.png');
                    size = width / 18
                    sizew = width / 18
                } else if (routeName === 'phoneBook') {
                    iconName = focused ? require('../../assets/Android/4x/text-documents-pink.png') : require('../../assets/Android/4x/text-documents-gray.png');
                    size = width / 18
                    sizew = width / 18
                } else if (routeName === 'Call') {
                    iconName = focused ? require('../../assets/Android/4x/phone-call-pink.png') : require('../../assets/Android/4x/phone-call-gray.png');
                    size = width / 18
                    sizew = width / 18
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Image source={iconName} style={{ width: sizew, height: size, padding: "2%" }} />;


            },
        }),
        tabBarOptions: {
            activeTintColor: '#ef3f7d',
            inactiveTintColor: 'gray',
        },
    }


);