import React from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, PanResponder, Image, Dimensions } from 'react-native';
import * as NB from 'native-base';

const { fontScale, width, height } = Dimensions.get('window')

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropDown: false,
            placeholder: this.props.placeholder
        }
    }
    isOpenDropDown = () => {
        this.state.dropDown && this.setState({
            dropDown: false
        })
    }

    onValueChanged = (item) => {
        this.props.onValue(item);
        this.setState({
            placeholder: item,
            dropDown: false
        })
    }
    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentWillMount() {

        let a = window.onBodyPress
        window.onBodyPress = () => {
            this.mounted && this.setState({ dropDown: false });
            a && a()
        };
        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            // onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderTerminate: (evt, gestureState) => console.log(evt),
        });
    }

    render() {
        return (
            <View style={[this.props.containerSyle, { position: 'relative', width: '100%' }]}>
                <TouchableOpacity onPress={() => { window.onBodyPress && window.onBodyPress(); this.setState({ dropDown: !this.state.dropDown }) }}>
                    <View style={{ marginLeft: '2%', position: 'relative', elevation: 1, flexDirection: 'row', justifyContent: 'space-between', width: '95%', alignItems: 'center' }}>
                        <Image source={require('../../../assets/Android/4x/settings_seclectedxxxhdpi.png')} style={{ width: width / 22, height: height / 35 }} />
                        <Text style={{ color: '#999999', fontSize: fontScale * 12 }}>{!this.state.dropDown ? this.state.placeholder : " "}</Text>
                        <Image source={require('../../../assets/Android/4x/down-arrow.png')} style={{ width: width / 40, height: height / 64 }} />
                    </View>
                </TouchableOpacity>
                {this.state.dropDown && <View style={this.props.itemView}>
                    {this.props.items.map((item, key) => <Text onPress={() => this.onValueChanged(item)} key={key} style={{ color: '#8DAAB9', padding: 10, zIndex: 1000000 }}>{item}</Text>
                    )}
                </View>}
            </View>
        );
    }
}