import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button,
    Image
} from 'react-native';
import { createStackNavigator } from "react-navigation";
const { width } = Dimensions.get('window');


class All extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={{ height: "8%", justifyContent: 'center', borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>
                    <View style={{ width: width / 2, alignSelf: 'center', flexDirection: "row", justifyContent: "space-around", borderRadius: 4, height: width / 15, borderWidth: 2, borderColor: '#ef3f7d' }}>
                        <View style={{ width: width / 4, backgroundColor: '#ef3f7d', justifyContent: "center" }}><Text style={{ color: 'white', alignSelf: 'center', }}>All</Text></View>
                        <View style={{ width: width / 4, justifyContent: "center" }}><Text style={{ color: '#ef3f7d', alignSelf: 'center' }}>Missed</Text></View>
                    </View>
                </View>


                <View style={{ justifyContent: 'space-between', alignSelf: 'center', flexDirection: "row", width: width, height: "10%", borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>

                    <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Call_selectedxxxhdpi.png')} style={{ width: width / 30, height: width / 30 }} />
                        </View>

                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sheron 3</Text>
                            <Text style={{ fontSize: 10, color: 'gray' }}>mobile</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: 'gray', fontWeight: 'bold' }}>12:57 PM</Text>
                        </View>

                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Infoxxxhdpi.png')} style={{ width: width / 27, height: width / 27 }} />
                        </View>
                    </View>

                </View>




                <View style={{ justifyContent: 'space-between', alignSelf: 'center', flexDirection: "row", width: width, height: "10%", borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>

                    <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Call_selectedxxxhdpi.png')} style={{ width: width / 30, height: width / 30 }} />
                        </View>

                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sheron 3</Text>
                            <Text style={{ fontSize: 10, color: 'gray' }}>mobile</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: 'gray', fontWeight: 'bold' }}>12:57 PM</Text>
                        </View>

                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Infoxxxhdpi.png')} style={{ width: width / 27, height: width / 27 }} />
                        </View>
                    </View>

                </View>





                <View style={{ justifyContent: 'space-between', alignSelf: 'center', flexDirection: "row", width: width, height: "10%", borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>

                    <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Call_selectedxxxhdpi.png')} style={{ width: width / 30, height: width / 30 }} />
                        </View>

                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sheron 3</Text>
                            <Text style={{ fontSize: 10, color: 'gray' }}>mobile</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: 'gray', fontWeight: 'bold' }}>12:57 PM</Text>
                        </View>

                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Infoxxxhdpi.png')} style={{ width: width / 27, height: width / 27 }} />
                        </View>
                    </View>

                </View>




                <View style={{ justifyContent: 'space-between', alignSelf: 'center', flexDirection: "row", width: width, height: "10%", borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>

                    <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Call_selectedxxxhdpi.png')} style={{ width: width / 30, height: width / 30 }} />
                        </View>

                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sheron 3</Text>
                            <Text style={{ fontSize: 10, color: 'gray' }}>mobile</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: 'gray', fontWeight: 'bold' }}>12:57 PM</Text>
                        </View>

                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Infoxxxhdpi.png')} style={{ width: width / 27, height: width / 27 }} />
                        </View>
                    </View>

                </View>




                <View style={{ justifyContent: 'space-between', alignSelf: 'center', flexDirection: "row", width: width, height: "10%", borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>

                    <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Call_selectedxxxhdpi.png')} style={{ width: width / 30, height: width / 30 }} />
                        </View>

                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sheron 3</Text>
                            <Text style={{ fontSize: 10, color: 'gray' }}>mobile</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: 'gray', fontWeight: 'bold' }}>12:57 PM</Text>
                        </View>

                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Infoxxxhdpi.png')} style={{ width: width / 27, height: width / 27 }} />
                        </View>
                    </View>

                </View>




                <View style={{ justifyContent: 'space-between', alignSelf: 'center', flexDirection: "row", width: width, height: "10%", borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>

                    <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Call_selectedxxxhdpi.png')} style={{ width: width / 30, height: width / 30 }} />
                        </View>

                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sheron 3</Text>
                            <Text style={{ fontSize: 10, color: 'gray' }}>mobile</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: 'gray', fontWeight: 'bold' }}>12:57 PM</Text>
                        </View>

                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Infoxxxhdpi.png')} style={{ width: width / 27, height: width / 27 }} />
                        </View>
                    </View>

                </View>



                <View style={{ justifyContent: 'space-between', alignSelf: 'center', flexDirection: "row", width: width, height: "10%", borderBottomColor: '#e6e6e6', borderBottomWidth: 0.5 }}>

                    <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Call_selectedxxxhdpi.png')} style={{ width: width / 30, height: width / 30 }} />
                        </View>

                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Madhura Cheers Cinnamon Gra...</Text>
                            <Text style={{ fontSize: 10, color: 'gray' }}>Whatsapp Audio</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: 'gray', fontWeight: 'bold' }}>12:57 PM</Text>
                        </View>

                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Image source={require('../../../assets/Android/4x/Infoxxxhdpi.png')} style={{ width: width / 27, height: width / 27 }} />
                        </View>
                    </View>

                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default All;