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
}, {
        headerMode: "none",
        header: null,
    });

const CameraStack = createStackNavigator({
    Camera: Camera,
}, {
        headerMode: "none",
        header: null,
    });

const ChatStack = createStackNavigator({
    Chat: Chat,
}, {
        headerMode: "none",
        header: null,
    });

const SettingStack = createStackNavigator({
    Setting: Setting,
}, {
        headerMode: "none",
        header: null,
    });

const StatusStack = createStackNavigator({
    Status: Status,
}, {
        headerMode: "none",
        header: null,
    });


export default createBottomTabNavigator(
    {
        Status: StatusStack,
        Calls: CallsStack,
        Camera: CameraStack,
        Chat: ChatStack,
        Setting: SettingStack,
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
                if (routeName === 'Status') {
                    iconName = focused ? require('../../assets/Android/4x/Favourites_selectedxxxhdpi.png') : require('../../assets/Android/4x/Favouritesxxxhdpi.png')
                    size = width / 18
                    sizew = width / 18
                } else if (routeName === 'Calls') {
                    iconName = focused ? require('../../assets/Android/4x/Call_selectedxxxhdpi.png') : require('../../assets/Android/4x/Call_selectedxxxgrayhdpi.png');
                    size = width / 18
                    sizew = width / 18
                } else if (routeName === 'Camera') {
                    iconName = focused ? require('../../assets/Android/4x/Iconxxxhdpi.png') : require('../../assets/Android/4x/cameraxxxhdpi.png');
                    size = width / 22
                    sizew = width / 18
                } else if (routeName === 'Chat') {
                    iconName = focused ? require('../../assets/Android/4x/chat_selectedxxxhdpi.png') : require('../../assets/Android/4x/chatxxxhdpi.png');
                    size = width / 21
                    sizew = width / 18
                } else if (routeName === 'Setting') {
                    iconName = focused ? require('../../assets/Android/4x/settings_seclectedxxxhdpi.png') : require('../../assets/Android/4x/settingsxxxhdpi.png');
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