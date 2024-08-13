import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderCustom from '../../Compoment/HeaderCustom'
import { useDispatch, useSelector } from 'react-redux';
import { ListBill } from '../../reducer/billListSlice';
const History = (props) => {
    const dispatch = useDispatch();
    const { listBillData, listBillStatus } = useSelector((state) => state.listBill);
    const { loginData } = useSelector((state) => state.login);
    const { navigation } = props;
    const date = (dateOrder) => {
        const date = new Date(dateOrder);

        const dayOfWeek = date.getDay();


        const dayNames = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
        const dayName = dayNames[dayOfWeek];


        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();


        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return (`${dayName}, ${day}/${month}/${year}, ${hours}:${minutes}.`);
    }
    useEffect(() => {
        dispatch(ListBill(loginData.user._id))
    }, [dispatch]);
    const detail = (item) => {
        navigation.navigate('DeHistory', { item: item })
    }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => detail(item)} style={styles.item}>
                <View style={styles.underLineSub}>
                    <Text style={styles.txtDeMain}>
                        {date(item.orderDate)}
                    </Text>
                </View>
                {item.cart.map((cartItem, index) => (
                    <View key={cartItem._id} style={styles.itemContain} >
                        <View style={styles.imgContain}>
                            <Image style={styles.img} source={{ uri: cartItem.image }} />
                        </View>
                        <View style={styles.itemBody}>
                            <Text style={styles.green}>Đặt hàng thành công</Text>
                            <View style={styles.names}>
                                <Text numberOfLines={1} style={styles.textName}>{cartItem.name}</Text>
                                <Text> | </Text>
                                <Text style={styles.textType}>{cartItem.type}</Text>
                            </View>

                            <Text style={styles.nameItem}>{cartItem.qty} sản phẩm</Text>
                        </View>
                    </View>
                ))}




            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.con}>
            <HeaderCustom
                leftIcon={require('../../../assets/images/arrow-left.png')}
                title={'Lịch sử giao dịch'}
                navigation={navigation}

            />
            <View style={styles.body}>
                <FlatList


                    data={listBillData}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    
                    keyExtractor={item => item._id}
                />
               
            </View>
        </View>
    )
}

export default History

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
        width: '52%',
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
        marginTop: 15,
        flexDirection: 'row',

    },
    body: {
        marginHorizontal: 48,
        flex:1
    },
    txtDeMain: {
        color: 'black',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Poppins-Medium',
    },
    green: {
        color: '#007537',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Poppins-Medium',
    },
    red: {
        color: '#FF0000',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Poppins-Medium',
    },
    txtGray: {
        color: 'gray',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Poppins-Medium',
    },
    underLineSub: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ababab',
        paddingBottom: 4,
    },
    item: {

    },
    con: {
        flex: 1,
        backgroundColor: 'white'
    }
})