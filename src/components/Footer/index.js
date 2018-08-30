import React from 'react';
import DialerScreen from '../DialerScreen'
import Recents from './../Recents'
import Favourites from './../Favourites'
import Contacts from './../Contacts'
import More from './../More'
import { View, Button, Text, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const { width } = Dimensions.get('window');


const FavaouritesStack = createStackNavigator({
    Favaourites: Favourites,
});

const RecentsStack = createStackNavigator({
    Recents: Recents,
});

const ContactsStack = createStackNavigator({
    Contacts: Contacts,
});

const KeypadStack = createStackNavigator({
    Keypad: DialerScreen,
});

const MoreStack = createStackNavigator({
    More: More,
});


export default createBottomTabNavigator(
    {
        Favaourites: FavaouritesStack,
        Recents: RecentsStack,
        Contacts: ContactsStack,
        Keypad: KeypadStack,
        More: MoreStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Favaourites') {
                    iconName = focused ? require('../../assets/Android/4x/Favourites_selectedxxxhdpi.png') : require('../../assets/Android/4x/Favouritesxxxhdpi.png')
                } else if (routeName === 'Recents') {
                    iconName = focused ? require('../../assets/Android/4x/recents_selectedxxxhdpi.png') : require('../../assets/Android/4x/Recents_Iconxxxhdpi.png');
                } else if (routeName === 'Contacts') {
                    iconName = focused ? require('../../assets/Android/4x/contacts_selectexxxhdpi.png') : require('../../assets/Android/4x/Contacts_Iconxxxhdpi.png');
                } else if (routeName === 'Keypad') {
                    iconName = focused ? require('../../assets/Android/4x/keypad_seclectedxxxhdpi.png') : require('../../assets/Android/4x/Keypadxxxhdpi.png');
                } else if (routeName === 'More') {
                    iconName = focused ? require('../../assets/Android/4x/menu_selctedxxxhdpi.png') : require('../../assets/Android/4x/menuxxxhdpi.png');
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Image source={iconName} style={{ width: width / 19, height: width / 19 }} />;


            },
        }),
        tabBarOptions: {
            activeTintColor: '#ef3f7d',
            inactiveTintColor: 'gray',
        },
    }


);




// import {
//     createBottomTabNavigator,
//     createStackNavigator,
// } from 'react-navigation';

// class DetailsScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Details!</Text>
//             </View>
//         );
//     }
// }

// class HomeScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 {/* other code from before here */}
//                 <Button
//                     title="Go to Details"
//                     onPress={() => this.props.navigation.navigate('Details')}
//                 />
//             </View>
//         );
//     }
// }

// class SettingsScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 {/* other code from before here */}
//                 <Button
//                     title="Go to Details"
//                     onPress={() => this.props.navigation.navigate('Settings')}
//                 />
//             </View>
//         );
//     }
// }

// const HomeStack = createStackNavigator({
//     Home: HomeScreen,
//     Details: DetailsScreen,
// });

// const SettingsStack = createStackNavigator({
//     Settings: SettingsScreen,
//     Details: DetailsScreen,
// });

// export default createBottomTabNavigator(
//     {
//         Home: HomeStack,
//         Settings: SettingsStack,
//     },
//     {
//         /* Other configuration remains unchanged */
//     }
// );