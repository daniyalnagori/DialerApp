import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    // Icon,
    TextInput,
    View,
    TouchableNativeFeedback,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ImageBackground,
    Button,
} from 'react-native';
import { CheckBox, ListItem, Icon } from "native-base";
// import Amplify from '../../../node_modules/aws-amplify';
// import { Col, Row, Grid } from "react-native-easy-grid";
import Amplify, { Auth } from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
// import { Auth } from 'aws-amplify-react-native'

// import {
//     Config,
//     CognitoIdentityCredentials
// } from 'aws-sdk/dist/aws-sdk-react-native';

// import {
//     AuthenticationDetails,
//     CognitoUser,
//     CognitoUserPool,
//     CognitoUserAttribute
// } from 'react-native-aws-cognito-js';

// const appConfig = {
//     region: '',
//     IdentityPoolId: '',
//     UserPoolId: 'us-east-1_Mr98zHlUu',
//     ClientId: '1an3c969el9eldlcsr76t84cgn',
// }

// Config.region = appConfig.region;

const { height, width, fontScale } = Dimensions.get('window');

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: true,
            icon: 'checkmark',
            username: 'hello@gmail.com',
            password: 'Hello122334455!'
        }
    }
    static navigationOptions = {
        title: "App"
    };

    // submit = () => {
    //     const { username, password } = this.state;
    //     const authenticationData = {
    //         Username: username,
    //         Password: password,
    //     };
    //     console.log(authenticationData)
    //     const authenticationDetails = new AuthenticationDetails(authenticationData);
    //     const poolData = {
    //         UserPoolId: appConfig.UserPoolId,
    //         ClientId: appConfig.ClientId
    //     };
    //     console.log(poolData)
    //     const userPool = new CognitoUserPool(poolData);
    //     const userData = {
    //         Username: Username,
    //         Pool: userPool
    //     };
    //     const cognitoUser = new CognitoUser(userData);
    //     cognitoUser.authenticateUser(authenticationDetails, {
    //         onSuccess: (result) => {
    //             console.log('access token + ' + result.getAccessToken().getJwtToken());
    //             Config.credentials = new CognitoIdentityCredentials({
    //                 IdentityPoolId: appConfig.IdentityPoolId,
    //             });
    //             alert('Success');
    //             console.log(Config.credentials);
    //         },
    //         onFailure: (err) => {
    //             alert(err);
    //         },
    //     });
    // }


    signIn123 = () => {
        console.log('call')
        let { username, password } = this.state
        Auth.signIn(username, password)
            .then(user => {
                // this.setState({ user })
                console.log(user)
            })
            .catch(err => {
                console.log('error signing in: ', err)
            })
    }

    signUp = () => {
        Auth.signUp({
            username: 'hello@gmail.com',
            password: 'Hello122334455!',
            attributes: {
                phone_number: '+921234567891',
                email: 'hello@gmail.com'
            }
        })
            .then(res => {
                console.log('successful signup: ', res)
            })
            .catch(err => {
                console.log('error signing up: ', err)
            })
    }

    render() {
        console.log('username', this.state.username)
        console.log('Passowrd', this.state.password)
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/Android/4x/bg.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{ height: '15%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: width / 3.8, height: height / 14 }} source={require('../../assets/Android/4x/logo.png')}></Image>
                        </View>
                        <View style={{ backgroundColor: '#ffffff', width: '75%', height: '70%', borderRadius: width / 50, padding: '1%', justifyContent: 'space-between' }}>
                            <View style={{ height: '10%' }}>
                                <View style={{ padding: '2%' }}>
                                    <Text style={{ color: '#ef3f7d', alignSelf: 'center', fontSize: fontScale * 18 }}>Log Into your Account</Text>
                                </View>
                            </View>

                            <View style={{ height: '10%' }}>
                                <TextInput placeholderTextColor='#999999' placeholder='       Email Address' underlineColorAndroid='transparent' onChangeText={username => this.setState({ username })} style={{ borderRadius: width / 70, alignSelf: 'center', borderColor: '#e6e6e6', borderWidth: 1, width: '80%' }} />
                            </View>

                            <View style={{ height: '10%' }}>
                                <TextInput placeholderTextColor='#999999' placeholder='       Password' secureTextEntry={true} underlineColorAndroid='transparent' onChangeText={password => this.setState({ password })} style={{ borderRadius: width / 70, alignSelf: 'center', borderColor: '#e6e6e6', borderWidth: 1, width: '80%' }} />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignSelf: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", width: "40%" }}>
                                    <TouchableOpacity onPress={() => this.state.icon ? this.setState({ icon: '' }) : this.setState({ icon: 'checkmark' })}>
                                        <View style={{ borderRadius: width / 95, borderColor: '#e6e6e6', borderWidth: 1, width: width / 30, height: width / 30 }}>
                                            <Icon style={{ fontSize: fontScale * 13, alignSelf: 'center', color: '#ef3f7d' }} name={this.state.icon} />
                                        </View>
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={{ color: '#999999', fontSize: fontScale * 12 }}> remember me</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: '#999999', fontSize: fontScale * 12 }}>Forgot Password?</Text>
                                </View>
                            </View>

                            <View style={{ width: '80%', alignSelf: 'center', height: '8%' }}>
                                <TouchableOpacity activeOpacity={0.5} onPress={this.signIn123} style={{ height: '100%', backgroundColor: '#ef3f7d', justifyContent: 'center', alignItems: 'center', borderRadius: width / 70 }}>
                                    <Text style={{ color: '#ffffff' }}>Signin</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ height: '8%', borderColor: '#ffffff', borderTopColor: '#e6e6e6', width: '80%', borderWidth: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#999999', fontSize: fontScale * 12 }}>or sign in with one of these services</Text>
                            </View>

                            <View style={{ width: '80%', alignSelf: 'center', height: '8%' }}>
                                <TouchableOpacity activeOpacity={0.5} style={{ height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: width / 70, borderColor: '#e6e6e6', borderWidth: 1 }}>
                                    <Icon style={{ fontSize: fontScale * 15, color: '#475993', marginRight: '1%' }} name="logo-facebook"></Icon>
                                    <Text style={{ color: '#999999', fontSize: fontScale * 12, marginLeft: '1%' }}>FACEBOOK</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '80%', alignSelf: 'center', height: '8%' }}>
                                <TouchableOpacity activeOpacity={0.5} style={{ height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: width / 70, borderColor: '#e6e6e6', borderWidth: 1 }}>
                                    <Image style={{ width: width / 40, height: width / 40 }} source={require('../../assets/Android/4x/search.png')}></Image>
                                    <Text style={{ color: '#999999', fontSize: fontScale * 12, marginLeft: '1%' }}>GOOGLE</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '80%', alignSelf: 'center', height: '8%' }}>
                                <TouchableOpacity activeOpacity={0.5} style={{ height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: width / 70, borderColor: '#e6e6e6', borderWidth: 1 }}>
                                    <Icon style={{ fontSize: fontScale * 15, color: '#475993', marginRight: '1%' }} name="logo-twitter"></Icon>
                                    <Text style={{ color: '#999999', fontSize: fontScale * 12 }}>TWITTER</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>
                </ImageBackground>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height
    },
});

export default SignIn;