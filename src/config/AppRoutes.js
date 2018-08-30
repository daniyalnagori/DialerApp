import React from 'react'
import {
  App, CallingScreen, CallScreen, DialerScreen, FooterTabsIconTextExample
} from './../components/index';
import { StackNavigator, DrawerNavigator } from "react-navigation";


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
  Footer: {
    screen: FooterTabsIconTextExample,
    navigationOptions: {
      header: null
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