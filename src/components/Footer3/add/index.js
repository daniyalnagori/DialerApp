import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
import { Content, List, Left, Body, ListItem, Title, Container, Right, Header, Item, Center, Input, Icon, Button, Text, Drawer } from 'native-base'
// import SideBar from './yourPathToSideBar';
const { height, width, fontScale } = Dimensions.get('window');
import ApiAction from './../../../store/actions/ApiAction';
import { connect } from 'react-redux';
import SideBar from './Drawer';
import WorkSpace from './WorkSpace';
import Mail from './Mail'
import Collaboration from './Collaboration'

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            WorkSpace: true,
            Mail: false,
            Collaboration: false
        }
    }

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    StateChange = () => {
        this.setState({
            WorkSpace: false,
            Mail: false,
            Collaboration: true
        })
    }
    StateChange1 = () => {
        this.setState({
            WorkSpace: true,
            Mail: false,
            Collaboration: false,
            CollaborationWid: ''
        })
    }

    componentDidMount() {
        AsyncStorage.getItem('userID').then((id) => {
            console.log(id, 'component')
            this.props.WorkSpaceData(id)
        })
    }

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} closeDrawer={() => this.closeDrawer()} StateChange={() => this.StateChange()} />}
                onClose={() => this.closeDrawer()}
            >
                {this.state.WorkSpace ? <WorkSpace Data={this.props.WorkSpaceSuccess1} openDrawer={() => this.openDrawer()} StateChange={() => this.StateChange()} /> : null}
                {this.state.Mail ? <Mail StateChange={() => this.StateChange()} /> : null}
                {this.state.Collaboration ? <Collaboration Data={this.props.CollaborationSuccess1} StateChange={() => this.StateChange1()} /> : null}
            </Drawer>
        );
    }
}


function mapStateToProp(state) {
    return ({
        // SignInSuccess: state.userAuth.authUser,
        // isLoggedIn: state.userAuth.isLoggedIn,
        // isError: state.userAuth.isError,
        // error: state.userAuth.error
        isWorkSpaceSuccess1: state.ApiReducer.isWorkSpaceSuccess1,
        isWorkSpaceFailure1: state.ApiReducer.isWorkSpaceFailure,
        WorkSpaceSuccess1: state.ApiReducer.WorkSpaceSuccess,
        WorkSpaceError1: state.ApiReducer.WorkSpaceError1,


    })
}
function mapDispatchToProp(dispatch) {
    return {
        WorkSpaceData: (id) => {
            dispatch(ApiAction.WorkSpaceData(id))
        },
    };
}

export default connect(mapStateToProp, mapDispatchToProp)(Add);
