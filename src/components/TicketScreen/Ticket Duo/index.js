import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


class TicketDuo extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                Ticket Duo
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

export default TicketDuo;