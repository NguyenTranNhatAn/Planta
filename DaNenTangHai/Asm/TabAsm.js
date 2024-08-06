import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeAsm from './HomeAsm'
import DetailAsm from './DetailAsm'
import Search from './Search'
import Regular from './Regular'
import Payment from './Payment'
import CartAsm from './CartAsm'
import Profile from './Profile'
import AppAsm from './AppAsm'
const Tab = createBottomTabNavigator();
const TabAsm = (props) => {
  const{navigation} =props
  return (

    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarIcon: ({ focused, color, size }) => {


          if (route.name === 'Home') {
            if (focused) {
              return <Image source={require('../../assets/images/homeAsm.png')} />
            }
            return <Image source={require('../../assets/images/homeNormal.png')} />
          } else if (route.name === 'Search') {
            if (focused) {
              return <Image source={require('../../assets/images/searchHover.png')} />
            }
            return <Image source={require('../../assets/images/search.png')} />
          } else if (route.name === 'Noti') {
            if (focused) {
              return <Image source={require('../../assets/images/notiHover.png')} />
            }
            return <Image source={require('../../assets/images/noti.png')} />
          } else if (route.name === 'Per') {
            if (focused) {
              return <Image source={require('../../assets/images/perHover.png')} />
            }
            return <Image source={require('../../assets/images/per.png')} />
          }



        },
      })}
    >
      <Tab.Screen name="Home" component={HomeAsm} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Noti" component={CartAsm} />
      <Tab.Screen name="Per" component={Profile} />
    </Tab.Navigator>

  )
}

export default TabAsm

const styles = StyleSheet.create({})