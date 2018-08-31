import React from 'react';
import Status from './Status'
import Calls from './Calls'
import Camera from './Camera'
import Chat from './Chat'
import Setting from './Setting'
import { View, Button, Text, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const { width } = Dimensions.get('window');


const CallsStack = createStackNavigator({
    Calls: Calls,
});

const CameraStack = createStackNavigator({
    Camera: Camera,
});

const ChatStack = createStackNavigator({
    Chat: Chat,
});

const SettingStack = createStackNavigator({
    Setting: Setting,
});

const StatusStack = createStackNavigator({
    Status: Status,
});


export default createBottomTabNavigator(
    {
        Status: CallsStack,
        Calls: CameraStack,
        Camera: ChatStack,
        Chat: SettingStack,
        Setting: StatusStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Favaourites') {
                    iconName = focused ? require('../../assets/Android/4x/Favourites_selectedxxxhdpi.png') : require('../../assets/Android/4x/Favouritesxxxhdpi.png')
                } else if (routeName === 'Recents') {
                    iconName = focused ? require('../../assets/Android/4x/Call_selectedxxxhdpi.png') : require('../../assets/Android/4x/Call_selectedxxxhdpi.png');
                } else if (routeName === 'Contacts') {
                    iconName = focused ? require('../../assets/Android/4x/Iconxxxhdpi.png') : require('../../assets/Android/4x/cameraxxxhdpi.png');
                } else if (routeName === 'Keypad') {
                    iconName = focused ? require('../../assets/Android/4x/chat_selectedxxxhdpi.png') : require('../../assets/Android/4x/chatxxxhdpi.png');
                } else if (routeName === 'More') {
                    iconName = focused ? require('../../assets/Android/4x/settings_seclectedxxxhdpi.png') : require('../../assets/Android/4x/settingsxxxhdpi.png');
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
//                     onPress={() => this.props.navigation.navigate('Details')}
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