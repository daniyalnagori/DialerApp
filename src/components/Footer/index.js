import React, { Component } from 'react';
import DialerScreen from '../DialerScreen'
import Recents from './../Recents'
import {
    Image,
    Dimensions
} from 'react-native';
const { width } = Dimensions.get('window');

import { createBottomTabNavigator } from 'react-navigation';

export default createBottomTabNavigator(
    {
        Favaourites: DialerScreen,
        Recents: Recents,
        Contacts: Recents,
        Keypad: DialerScreen,
        More: Recents,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Favaourites') {
                    iconName = require('../../assets/Android/4x/mute_smallxxxhdpi.png');
                } else if (routeName === 'Recents') {
                    iconName = require('../../assets/Android/4x/mute_smallxxxhdpi.png');
                } else if (routeName === 'Contacts') {
                    iconName = require('../../assets/Android/4x/mute_smallxxxhdpi.png');
                } else if (routeName === 'Keypad') {
                    iconName = require('../../assets/Android/4x/mute_smallxxxhdpi.png');
                } else if (routeName === 'More') {
                    iconName = require('../../assets/Android/4x/mute_smallxxxhdpi.png');
                }



                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Image source={iconName} style={{ width: width / 15, height: width / 15, borderRadius: (width / 6) / 2 }} color={tintColor} />;

            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }

);
