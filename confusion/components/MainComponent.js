import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DIshdetailComponent';

import { ScrollView, Text, View, Platform, Image, StyleSheet, SafeAreaView } from 'react-native';
import { createStackNavigator  } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

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
                 options= {({navigation})=> ({headerLeft: (()=><Icon name='menu' size={24}
                    color='white' onPress={() => navigation.toggleDrawer()} />)}) }
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
                 options= {
                     ({navigation})=> ({headerLeft: (()=><Icon name='menu' size={24}
                    color='white' onPress={() => navigation.toggleDrawer()} />)}) }
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
                 options= {({navigation})=> ({headerLeft: (()=><Icon name='menu' size={24}
                    color='white' onPress={() => navigation.toggleDrawer()} />)}) }
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
                 options= {
                     ({navigation})=> ({
                         headerLeft: (()=><Icon name='menu' size={24}
                    color='white' onPress={() => navigation.toggleDrawer()} />)
                }) }
                   />
            </Stack.Navigator>
        );
    }
}

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <View style={styles.drawerHeader}>
            <View style={{flex: 1}}>
                <Image 
                    source={require('./images/logo.png')}
                    style={styles.drawerImage}
                />
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.drawerHeaderText}>
                    Ristorante Con Fusion
                </Text>
            </View>
        </View>
        <DrawerItemList {...props}/>
    </ScrollView>
);
class MainNavigator extends Component {
    render() {
        return(
            <Drawer.Navigator drawerStyle={{
                backgroundColor: '#D1C4E9',                
              }} drawerContent={props => <CustomDrawerContentComponent {...props} />}>
                <Drawer.Screen name='Home' component={HomeNavigator}
                    options={{
                        title : 'Home',
                        drawerLabel : 'Home',
                        drawerIcon: ({ tintColor }) => (
                            <Icon name='home' type='font-awesome' size={24} color={tintColor} /> 
                        )
                    }} />
                <Drawer.Screen name='Menu' component={MenuNavigator}
                    options={{
                        title : 'Menu',
                        drawerLabel : 'Menu',
                        drawerIcon: ({ tintColor }) => (
                            <Icon name='list' type='font-awesome' size={24} color={tintColor} /> 
                        )
                    }}  />
                <Drawer.Screen name='Contact Us' component={ContactNavigator}
                    options={{
                        title : 'Contact Us',
                        drawerLabel : 'Contact us',
                        drawerIcon: ({ tintColor }) => (
                            <Icon name='address-card' type='font-awesome' size={22} color={tintColor} /> 
                        )
                    }}  />
                <Drawer.Screen name='About Us' component={AboutNavigator}
                    options={{
                        title : 'About Us',
                        drawerLabel : 'About us',
                        drawerIcon: ({ tintColor }) => (
                            <Icon name='info-circle' type='font-awesome' size={24} color={tintColor} /> 
                        )
                    }}  />         
            </Drawer.Navigator>
        );
    }
}

class Main extends Component {

    render() {
        return(
            <NavigationContainer>
                <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                    <MainNavigator />
                </View>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
  });

export default Main;