import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DIshdetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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

class Main extends Component {

    render() {
        return(
            <View style={{ flex:1, paddingTop: Platform.OS ==='ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MenuNavigator />
            </View>
        );
    }
}

export default Main;