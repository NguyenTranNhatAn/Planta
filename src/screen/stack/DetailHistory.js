import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HeaderCustom from '../../components/HeaderCustom'

const DetailHistory = (props) => {
    const { navigation } = props
    const [total, settotal] = useState("");
    const { loginData } = useSelector((state) => state.login);
    const { addbillData, addbillStatus } = useSelector((state) => state.addBill);
    const item = props.route?.params?.item;
    useEffect(() => {

        const tong = item.cart.reduce((tong, current) => tong + current.price, 0);

        settotal(tong)
        console.log(total)
    }, [total, item]);
    console.log(item);
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
    return (
        <View style={styles.containter}>
            <HeaderCustom
                leftIcon={require('../../../assets/images/arrow-left.png')}
                title={'Lịch sử giao dịch'}
                navigation={navigation}

            />
            <View style={styles.textGGCon}>
                <Text style={styles.textGre}>
                    Bạn đã đặt hàng thành công
                </Text>
                <Text style={styles.textGre}>
                    {date(item.orderDate)}
                </Text>
            </View>
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.underLineSub}>
                        <Text style={styles.txtDeMain}>
                            Thông tin khách hàng
                        </Text>
                    </View>
                    <View style={styles.infor}>

                        <View style={styles.underLineSub}>
                            <Text style={styles.txtSub}>
                                {loginData.user.name}
                            </Text>
                        </View>

                        <View style={styles.underLineSub}>
                            <Text style={styles.txtSub}>
                                {loginData.user.email}
                            </Text>
                        </View>

                        <View style={styles.underLineSub}>
                            <Text style={styles.txtSub}>
                                {loginData.address ? loginData.address : "Địa chỉ"}
                            </Text>
                        </View>
                        <View style={styles.underLineSub}>
                            <Text style={styles.txtSub}>
                                {loginData.user.phone}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.ship}>
                        <View style={styles.underLineSub}>
                            <Text style={styles.txtDeMain}>
                                Phương thức vận chuyển
                            </Text>
                        </View>



                        <View style={styles.underLineSub}>
                            <View style={styles.inside}>
                                <Text style={styles.txtNor}>
                                    Giao hàng COD - 20.000đ
                                </Text>
                                <Text style={styles.txtSub}>
                                    Dự kiên giao hàng 5-7/9
                                </Text>
                            </View>
                        </View>


                    </View>
                    <View style={styles.payment}>
                        <View style={styles.underLineSub}>
                            <Text style={styles.txtDeMain}>
                                Hình thức thanh toán
                            </Text>
                        </View>


                        <View style={styles.underLineSub}>
                            <Text style={styles.txtNor}>
                                Thẻ ATM
                            </Text>

                        </View>


                    </View>

                    <View style={styles.payment}>
                        <View style={styles.underLineSub}>
                            <Text style={styles.txtDeMain}>
                                Đơn hàng đã chọn                          </Text>
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

                                    <View style={styles.row}>
                                        <Text style={[styles.nameItem, { marginRight: 30 }]}>{cartItem.qty} sản phẩm</Text>
                                        <Text style={styles.txtGreen}>{cartItem.price}đ</Text>
                                    </View>
                                </View>
                            </View>
                        ))}


                    </View>



                </ScrollView>
            </View>
            <View style={styles.footer}>

                <View style={styles.headerFooter}>
                    <Text style={styles.textTinh}>Tổng cộng</Text>
                    <Text style={styles.txtGreenBig}>{total}Đ</Text>
                </View>
                <TouchableOpacity style={styles.btnPay}>
                    <Text style={styles.textPay}>THANH TOÁN</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailHistory

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
    row: {
        flexDirection: 'row',
        alignItems: 'center',

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
    txtGreenBig: {
        color: '#007537',
        fontSize: 16,


        lineHeight: 22,
        fontFamily: 'Poppins-Medium',
    },
    textTinhSmall: {
        lineHeight: 20,
        fontSize: 14,

        fontFamily: 'Poppins-Regular'
    },
    textPay: {
        lineHeight: 20,
        fontSize: 16,
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'Poppins-Medium'
    },
    btnPay: {
        height: 50,
        borderRadius: 8,
        backgroundColor: '#007537',
        alignItems: 'center',
        marginTop: 15,

        justifyContent: 'center'


    },
    textPriceTo: {
        lineHeight: 20,
        fontSize: 14,
        color: 'black',
        fontFamily: 'Poppins-Medium'
    },
    textTinh: {
        lineHeight: 22,
        fontSize: 16,

        fontFamily: 'Poppins-Medium'
    },
    headerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    footer: {
        flex: 2,
        paddingHorizontal: 24,
        paddingVertical: 10,
        marginTop: 15,

    },
    inside: {
        flexDirection: 'column'
    },
    txtNor: {
        color: 'black',
        fontSize: 14,


        lineHeight: 20,
        fontFamily: 'Poppins-Regular',
    },
    ship: {
        marginBottom: 15,
        paddingBottom: 15,

    },
    payment: {
        paddingBottom: 15,
    },
    infor: {
        marginBottom: 15,
        paddingBottom: 15,
    },
    input: {
        marginTop: 8,
        color: '#7b7b7b',
        fontSize: 14,

        lineHeight: 22,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ababab',
        paddingHorizontal: 0,
        paddingBottom: 4,

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
    txtGreen: {
        color: '#007537',
        fontSize: 14,


        lineHeight: 20,
        fontFamily: 'Poppins-Regular',
    },
    txtSub: {
        color: '#7b7b7b',
        fontSize: 14,

        lineHeight: 20,
        fontFamily: 'Poppins-Regular',
    },
    underLineMain: {

        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#221F1F',
        paddingBottom: 4,
    },
    txtDeMain: {
        color: 'black',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Poppins-Medium',
    },
    body: {
        marginHorizontal: 48,
        flex: 7,


    },
    textGre: {
        color: '#007537',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Poppins-Regular'
    },
    textGGCon: {
        alignItems: 'center'
    },
    containter: {
        backgroundColor: 'white',

        flex: 1,
    },
})