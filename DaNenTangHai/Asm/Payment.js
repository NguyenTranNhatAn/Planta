import { StyleSheet, Text, View, StatusBar, TextInput, ToastAndroid, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderCustom from '../Compoment/HeaderCustom'
import { AddBill } from '../Asm/reducer/addBill';
import { DeleteCartAll } from '../Asm/reducer/removeCart';
import { FindUser } from '../Asm/reducer/findUser';
import { useDispatch, useSelector } from 'react-redux';

const Payment = (props) => {
  const [total, settotal] = useState("");
  const { updateUserData, updateUserStatus } = useSelector((state) => state.updateUser);

  const { addbillData, addbillStatus } = useSelector((state) => state.addBill);
  const { deleteAllStatus } = useSelector((state) => state.removeCart);
  const { cartData, cartStatus } = useSelector((state) => state.cart);
  const { findUserData } = useSelector((state) => state.findUser);
  const { loginData } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const { navigation } = props;
  const pay = () => {

    const day = new Date()
    navigation.navigate('Payment')
    dispatch(AddBill({ userId: loginData.user._id, cart: cartData, status: 'Đã thêm', orderDate: day }))

    dispatch(DeleteCartAll(loginData.user._id));
    ToastAndroid.show("Thanh toán thành công", ToastAndroid.SHORT);
    navigation.navigate('Tab')


  }
  useEffect(() => {
    dispatch(FindUser(loginData.user._id))
  }, [dispatch, updateUserStatus])

  useEffect(() => {

    const tong = cartData.reduce((tong, current) => tong + current.price, 0);

    settotal(tong)
  }, [total, cartData]);
  return (
    <View style={styles.con}>


      <HeaderCustom
        leftIcon={require('../../assets/images/arrow-left.png')}
        title={'Thanh Toán'}
        navigation={navigation}


      />
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
                {findUserData.name}
              </Text>
            </View>

            <View style={styles.underLineSub}>
              <Text style={styles.txtSub}>
                {findUserData.email}
              </Text>
            </View>

            <View style={styles.underLineSub}>
              <Text style={styles.txtSub}>
                {findUserData.address ? findUserData.address : "Địa chỉ"}
              </Text>
            </View>
            <View style={styles.underLineSub}>
              <Text style={styles.txtSub}>
                {findUserData.phone}
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
                <Text style={styles.txtGreen}>
                  Giao hàng nhanh - 15.000đ
                </Text>
                <Text style={styles.txtSub}>
                  Dự kiên giao hàng 5-7/9
                </Text>
              </View>
              <Image source={require('../../assets/images/check.png')} />
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
              <Text style={styles.txtGreen}>
                THẺ VISA/MASTERCARD
              </Text>
              <Image source={require('../../assets/images/check.png')} />


            </View>

            <View style={styles.underLineSub}>
              <Text style={styles.txtNor}>
                Thẻ ATM
              </Text>

            </View>


          </View>



        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.headerFooter}>
          <Text style={styles.textTinh}>Tạm tính</Text>
          <Text style={styles.textPriceTo}>{total}Đ</Text>
        </View>
        <View style={styles.headerFooter}>
          <Text style={styles.textTinhSmall}>Phí vận chuyển</Text>
          <Text style={styles.textPriceTo}>15.000đ</Text>
        </View>
        <View style={styles.headerFooter}>
          <Text style={styles.textTinh}>Tổng cộng</Text>
          <Text style={styles.txtGreenBig}>{total}Đ</Text>
        </View>
        <TouchableOpacity onPress={pay} style={styles.btnPay}>
          <Text style={styles.textPay}>THANH TOÁN</Text>

        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
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
  con: {
    backgroundColor: 'white',

    flex: 1,
  }
})