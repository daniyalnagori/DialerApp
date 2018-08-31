import React from 'react'
import {
  App, CallingScreen, CallScreen, DialerScreen, FooterTabs, FooterTabs1
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
    screen: FooterTabs,
    navigationOptions:{
      headerMode:"none",
      header: null,
    },

  },
  Footer1: {
    screen: FooterTabs1,
    navigationOptions: {
      header: null,
      headerMode: null,
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