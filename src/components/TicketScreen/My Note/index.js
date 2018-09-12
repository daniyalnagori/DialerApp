import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


class MyNote extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    My Note
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

export default MyNote;