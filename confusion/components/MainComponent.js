import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DIshdetailComponent';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class  MenuNavigator extends Component{
    render() {
        return(
            <Stack.Navigator initialRouteName= 'Menu'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }} >
                <Stack.Screen 
                 name='Menu'
                 component={Menu}
                  />
                <Stack.Screen 
                 name='Dishdetail'
                 component={Dishdetail}
                  />  
            </Stack.Navigator>
        );
    }
}

class HomeNavigator extends Component{
    render() {
        return(
            <Stack.Navigator
            screenOptions= {{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }} >
                <Stack.Screen 
                 name='Home'
                 component={Home}
                  />
            </Stack.Navigator>
        );
    }
}

class ContactNavigator extends Component{
    render() {
        return(
            <Stack.Navigator
            screenOptions= {{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }} >
                <Stack.Screen 
                 name='Contact'
                 component={Contact}
                  />
            </Stack.Navigator>
        );
    }
}

class AboutNavigator extends Component{
    render() {
        return(
            <Stack.Navigator
            screenOptions= {{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }} >
                <Stack.Screen 
                 name='About'
                 component={About}
                  />
            </Stack.Navigator>
        );
    }
}

class MainNavigator extends Component {
    render() {
        return(
            <Drawer.Navigator drawerStyle={{
                backgroundColor: '#D1C4E9',                
              }}>
                <Drawer.Screen name='Home' component={HomeNavigator}
                    options={{
                        title : 'Home',
                        drawerLabel : 'Home'
                    }} />
                <Drawer.Screen name='Menu' component={MenuNavigator}
                    options={{
                        title : 'Menu',
                        drawerLabel : 'Menu'
                    }}  />
                <Drawer.Screen name='Contact Us' component={ContactNavigator}
                    options={{
                        title : 'Contact Us',
                        drawerLabel : 'Contact us'
                    }}  />
                <Drawer.Screen name='About Us' component={AboutNavigator}
                    options={{
                        title : 'About Us',
                        drawerLabel : 'About us'
                    }}  />         
            </Drawer.Navigator>
        );
    }
}

class Main extends Component {

    render() {
        return(
            <View style={{ flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight  }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;