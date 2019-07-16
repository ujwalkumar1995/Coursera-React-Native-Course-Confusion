import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import { View,Platform } from 'react-native';
import Home from './HomeComponent'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Contact from './ContactComponent'
import About from './AboutComponent'

const MenuNavigator = createStackNavigator({
    Menu: { screen : Menu},
    Dishdetail : {screen : Dishdetail }
},{
    initialRouteName: 'Menu',
    navigationOptions: {
      headerStyle:{
        backgroundColor: '#512DAB'
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
        color: '#fff'
      }

    }
})

const AboutNavigator = createStackNavigator({
    About: { screen : About},

},{
    initialRouteName: 'About',
    navigationOptions: {
      headerStyle:{
        backgroundColor: '#512DAB'
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
        color: '#fff'
      }

    }
})

const ContactNavigator = createStackNavigator({
    Contact: { screen : Contact},

},{
    initialRouteName: 'Contact',
    navigationOptions: {
      headerStyle:{
        backgroundColor: '#512DAB'
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
        color: '#fff'
      }

    }
})

const HomeNavigator = createStackNavigator({
Home: { screen : Home},

},{
navigationOptions: {
  headerStyle:{
    backgroundColor: '#512DAB'
  },
  headerTintColor:'#fff',
  headerTitleStyle: {
    color: '#fff'
  }

}
})

const MainNavigator = createDrawerNavigator(
  {
    Home : {
      screen:HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home'
      }
    },
    About : {
      screen:AboutNavigator,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us'
      }
    },
    Menu:
       { screen: MenuNavigator,
         navigationOptions: {
           title: 'Menu',
           drawerLabel: 'Menu'
         },
       },
    Contact : {
      screen:ContactNavigator,
      navigationOptions: {
        title: 'Contact Us',
        drawerLabel: 'Contact Us'
      }
    },




 }, {
   drawerBackgroundColor: '#D1C4E9'
 });


class Main extends Component {

  render() {

    return (
      <View style={{flex:1,paddingTop:Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
              <MainNavigator/>
          </View>
    );
  }
}

export default Main;
