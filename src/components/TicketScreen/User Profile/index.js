import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


class UserProfile extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    User Profile
            </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

export default UserProfile;