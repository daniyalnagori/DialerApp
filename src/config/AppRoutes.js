import React from 'react'
import {
  App, CallingScreen, CallScreen, DialerScreen, FooterTabsIconTextExample
} from './../components/index';
import { StackNavigator, DrawerNavigator, NavigationActions, TabNavigator } from "react-navigation";


const Drawer = DrawerNavigator({
  CallingScreen: {
    screen: CallingScreen
  },
  CallScreen: {
    screen: CallScreen
  },
  DialerScreen: {
    screen: DialerScreen
  }
}, { drawerWidth: 200 })

const NavigationApp = StackNavigator({
  DialerScreen: {
    screen: FooterTabsIconTextExample,
    navigationOptions: {
      header: null,
    }
  },
  CallScreen: {
    screen: CallScreen,
    navigationOptions: {
      header: null,
    }
  },
  CallingScreen: {
    screen: CallingScreen,
    navigationOptions: {
      header: null,
    }
  },
}
)

export default NavigationApp;