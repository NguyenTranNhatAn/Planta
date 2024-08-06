import { StyleSheet, Text, View,TextInput, Button } from 'react-native'
import React from 'react'

const DangkiTest = (props) => {
    const {navigation} = props;
  return (
    <View>
      <Text>AppAsm</Text>
      <TextInput placeholder='user'/>
      <TextInput placeholder='pass'/>
      <Button title='dang  ki' onPress={()=>{navigation.goBack()}}/>
    </View>
  )
}

export default DangkiTest

const styles = StyleSheet.create({})