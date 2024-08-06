import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, StatusBar, FlatList, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderCustom from '../Compoment/HeaderCustom'
import { useDispatch, useSelector } from 'react-redux';
import { GetCart } from './reducer/cartSlice';
import { MinusCart } from './reducer/minusCart';
import { AddCart } from '../Asm/reducer/cartAdd';
import { DeleteCart } from '../Asm/reducer/deleteCart';
import { AddBill } from '../Asm/reducer/addBill';
import { DeleteCartAll } from '../Asm/reducer/removeCart';
const CartAsm = (props) => {
    const dispatch = useDispatch();
    const { addcartData, addcartStatus } = useSelector((state) => state.addCart);
    const { cartData, cartStatus } = useSelector((state) => state.cart);
    const { deleteCartData, deleteCartStatus } = useSelector((state) => state.deleteCart);
    const { minuscartData, minuscartStatus } = useSelector((state) => state.minusCart);
    const { deleteAllStatus } = useSelector((state) => state.removeCart);
    const { loginData, loginStatus } = useSelector((state) => state.login);
    const [total, settotal] = useState("");
    const { navigation } = props;

    const pay = () => {

        const day = new Date()
        navigation.navigate('Payment')
        // dispatch(AddBill({ userId: loginData.user._id, cart: cartData, status: 'Đã thêm', orderDate: day }))
        // dispatch(DeleteCartAll(loginData.user._id));
        // ToastAndroid.show("Thanh toán thành công", ToastAndroid.SHORT);

    }
    const btnMinus = (_id, id, userId) => {
        dispatch(MinusCart({ _id: _id, id: id, userId: userId }))

    }
    const deleteCartItem = (_id) => {
        dispatch(DeleteCart(_id))

    }
    const btnAdd = (id) => {


        dispatch(AddCart({ userId: loginData.user._id, qty: 1, id: id }));

    }

    useEffect(() => {
        dispatch(GetCart(loginData.user._id))
    }, [dispatch, minuscartStatus, addcartStatus, deleteCartStatus, total, deleteAllStatus]);

    useEffect(() => {

        const tong = cartData.reduce((tong, current) => tong + current.price, 0);

        settotal(tong)
    }, [total, cartData]);
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.cartItem}>
                <TouchableOpacity style={styles.chkBox} >
                    <Image source={require('../../assets/images/boxNonCheck.png')} />
                </TouchableOpacity>
                <View style={styles.imgCon}>
                    <Image style={styles.img} source={{ uri: item.image }} />
                </View>

                <View style={styles.right}>

                    <View>
                        <View style={styles.names}>
                            <Text numberOfLines={1} style={styles.textName}>{item.name}</Text>
                            <Text> | </Text>
                            <Text style={styles.textType}>{item.type}</Text>
                        </View>
                        <Text style={styles.textPrice}>{item.price}Đ</Text>
                    </View>

                    <View style={styles.bottom}>
                        <View style={styles.minMax}>
                            <TouchableOpacity onPress={() => btnMinus(item._id, item.productId, loginData.user._id)} style={[styles.btnMP, { borderColor: '#7D7B7B', marginRight: 18.5 }]}>
                                <Image source={require('../../assets/images/minus.png')} />
                            </TouchableOpacity>
                            <Text>
                                {item.qty}
                            </Text>
                            <TouchableOpacity onPress={() => btnAdd(item.productId)} style={[styles.btnMP, { borderColor: 'black', marginLeft: 18.5 }]}>
                                <Image source={require('../../assets/images/plus.png')} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => { deleteCartItem(item._id) }} style={styles.conDelete}>
                            <Text style={styles.textDelete}>Xoá</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <HeaderCustom
                leftIcon={require('../../assets/images/arrow-left.png')}
                title={'GIỎ HÀNG'}
                navigation={navigation}
                rightIcon={require('../../assets/images/trash.png')}


            />
            <View style={styles.body}>
                <FlatList


                    data={cartData}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item._id}
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.headerFooter}>
                    <Text style={styles.textTinh}>Tạm tính</Text>
                    <Text style={styles.textPriceTo}>{total}Đ</Text>
                </View>
                <TouchableOpacity disabled={!total > 0} onPress={pay} style={total > 0 ? styles.btnPay : styles.cant}>
                    <Text style={styles.textPay}>Tiến hành thanh toán</Text>
                    <Image source={require('../../assets/images/chevron-right.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartAsm

const styles = StyleSheet.create({
    textPay: {
        lineHeight: 20,
        fontSize: 14,
        color: 'white',
        fontFamily: 'Poppins-Medium'
    },
    btnPay: {
        height: 50,
        borderRadius: 8,
        backgroundColor: '#007537',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 13,

    },
    cant: {
        height: 50,
        borderRadius: 8,
        backgroundColor: '#ABABAB',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 13,

    },
    textPriceTo: {
        lineHeight: 22,
        fontSize: 16,
        color: 'black',
        fontFamily: 'Poppins-Medium'
    },
    textTinh: {
        lineHeight: 20,
        fontSize: 16,

        fontFamily: 'Poppins-Regular'
    },
    headerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    body: {
        flex: 7,

    },
    textDelete: {

        lineHeight: 20,
        fontSize: 16,
        color: 'black',
        fontFamily: 'Poppins-Medium'
    },
    conDelete: {
        alignSelf: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginLeft: 38,
    },
    btnMP: {
        borderWidth: 1.5,
        height: 22.5,
        width: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        padding: 11,
    },
    minMax: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottom: {

        flexDirection: 'row',
    },
    textPrice: {

        lineHeight: 22,
        fontSize: 16,
        color: '#007537',
        fontFamily: 'Poppins-Medium'
    },
    textType: {
        lineHeight: 20,
        fontSize: 14,
        color: '#7b7b7b',
        fontFamily: 'Poppins-Regular'
    },
    textName: {
        lineHeight: 22,
        fontSize: 16,
        width: '37%',
        color: 'black',
        fontFamily: 'Poppins-Medium'
    },
    names: {
        flexDirection: 'row'
    },
    right: {

        alignSelf: 'flex-start',
        height: 77,
        justifyContent: 'space-between'
    },
    chkBox: {
        marginRight: 28
    },
    img: {
        width: 77,
        height: 77,
    },
    imgCon: {
        backgroundColor: '#f0f0f0',
        width: 77,
        height: 77,
        borderRadius: 8,
        marginRight: 15,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 24,
        paddingVertical: 15,

    }
})