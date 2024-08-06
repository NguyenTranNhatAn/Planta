import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const HeaderCustom = ({ leftIcon, title, rightIcon, navigation }) => {
  const navigate = () => {
    navigation.navigate('Screen4')
  }
  const back = () =>{
    navigation.goBack()
  }
  return (
    <View style={styles.con}>
      {!!leftIcon &&  <TouchableOpacity  onPress={back} style={styles.icon}>
       <Image style={styles.icon} source={leftIcon} />
      </TouchableOpacity>}
      <View style={styles.text}>
        {!!title && <Text style={styles.title}>{title}</Text>}

      </View>
      {!!rightIcon &&   <TouchableOpacity style={styles.icon}>
      <Image source={rightIcon} style={styles.icon} />

      </TouchableOpacity>}
          </View>
  )
}

export default HeaderCustom

const styles = StyleSheet.create({
  text: {
    height: 20,
  
  },
  title: {
    color: 'black',

    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Poppins-Medium'
  },
  con: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    height:50,

   
  

   
   

  },
  icon: {
    width: 20,
    height: 20,
  


  }
})