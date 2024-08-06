import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native'
import LoginAsm from './LoginAsm';
import RegisterAsm from './RegisterAsm';

import TabAsm from './TabAsm';
import DetailAsm from './DetailAsm';
import CartAsm from './CartAsm';
import Regular from './Regular';
import Search from './Search';
import Payment from './Payment';
import AdjPersonal from './AdjPersonal';
import AppAsm from './AppAsm';
import Profile from './Profile';
import History from './History';
import Question from './Question';
import DangkiTest from './DangkiTest';
import DetailHistory from './DetailHistory';
const StackAsm = (props) => {
  return (
    <NavigationContainer
    >
      <Stack.Navigator
        screenOptions={{ headerShown: false, }}
        initialRouteName='Login'>
        <Stack.Screen name="App" component={AppAsm} />
        <Stack.Screen name="Test" component={DangkiTest} />
        <Stack.Screen name="Register" component={RegisterAsm} />
        <Stack.Screen name="Login" component={LoginAsm} />
        {/* <Stack.Screen name="Screen3" component={Bai1} />
        <Stack.Screen name="Screen4" component={Bai2} /> */}
        <Stack.Screen name="Tab" component={TabAsm} />
        <Stack.Screen name="Cart" component={CartAsm} />
        <Stack.Screen name="More" component={Regular} />
        <Stack.Screen name="Detail" component={DetailAsm} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Adj" component={AdjPersonal} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="DeHistory" component={DetailHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackAsm

const styles = StyleSheet.create({})