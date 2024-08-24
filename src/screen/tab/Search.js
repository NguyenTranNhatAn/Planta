import { StyleSheet, Text, View, StatusBar, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import HeaderCustom from '../../components/HeaderCustom';
import { useDispatch, useSelector } from 'react-redux';
import { GetByName } from '../../reducers/searchProduct';

const Search = (props) => {
  const { navigation } = props
  const dispatch = useDispatch();
  const { getNameData, getNameStatus } = useSelector((state) => state.search);
  const change = (name) => {
    dispatch(GetByName(name));
  }
  const detail = (id) => {
    navigation.navigate('Detail', { id: id })
  }


  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => detail(item._id)} style={styles.itemContain} >
        <View style={styles.imgContain}>
          <Image style={styles.img} source={{ uri: item.image }} />
        </View>
        <View style={styles.itemBody}>
          <View style={styles.names}>
            <Text numberOfLines={1} style={styles.textName}>{item.name}</Text>

          </View>

          <Text style={styles.nameItem}>{item.price}đ</Text>
          <Text style={styles.nameItem}>Còn {item.quantity} sp</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.containter}>


      <HeaderCustom
        leftIcon={require('../../../assets/images/arrow-left.png')}
        title={'Tìm kiếm'}
        navigation={navigation}

      />

      <View style={styles.body}>
        <View style={styles.searchCon}>
          <TextInput onChangeText={(text) => change(text)} style={styles.input} placeholder='Tìm hiểu' />
          <TouchableOpacity>
            <Image source={require('../../../assets/images/search.png')} />
          </TouchableOpacity>
        </View>

        <FlatList


          data={getNameData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item._id}
        />

      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  textType: {
    lineHeight: 20,
    fontSize: 14,
    color: '#7b7b7b',
    fontFamily: 'Poppins-Regular'
  },
  textName: {
    lineHeight: 22,
    fontSize: 16,

    color: 'black',
    fontFamily: 'Poppins-Medium'
  },
  names: {
    flexDirection: 'row'
  },
  img: {
    width: 77,
    height: 77,
  },


  nameItem: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  itemBody: {
    marginVertical: 5.5,
    marginLeft: 15,
  },
  imgContain: {
    backgroundColor: '#dadada',
    borderRadius: 8,

  },
  itemContain: {
    flexDirection: 'row',
    marginVertical: 10,

  },
  containter: {
    backgroundColor: 'white',

    flex: 1,
  },
  input: {

    lineHeight: 20,

    fontSize: 18,
  },
  body: {
    paddingHorizontal: 48,
  },
  searchCon: {
    marginBottom: 40,
    height: 44,


    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
})