import { StyleSheet, Text, View, TextInput, Button, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DangKyTaiKhoan } from '../Asm/reducer/registerSlice';

const AppAsm = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { registerData, registerStatus } = useSelector((state) => state.register);
  const [username, setUsername] = useState('') ;
  const [password, setPassword] = useState('');
const [fullname, setFullname] = useState(''); 
  useEffect(() => {
    if (registerStatus == "succeeded") {
      if (registerData.code == 1) {
        navigation.navigate('Tab');
      }
      ToastAndroid.show(registerData.message, ToastAndroid.SHORT);
     
    }
  }, [registerStatus])


  const dangky = () => {
    dispatch(DangKyTaiKhoan({ username, password, fullname }));
   
  }


  return (
    <View>
      <Text>AppAsm</Text>
      <TextInput onChangeText={text => setUsername(text)} placeholder='user' />
      <TextInput onChangeText={text => setPassword(text)} placeholder='pass' />
      <TextInput onChangeText={text => setFullname(text)} placeholder='fullname' />
      <Button title='dang  ki' onPress={dangky} />
    </View>
  )
}

export default AppAsm

const styles = StyleSheet.create({})