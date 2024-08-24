import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderCustom from '../../components/HeaderCustom'
import { useDispatch, useSelector } from 'react-redux';
import { GetDetail } from '../../reducers/detailSlice';
import { GetDetailCategory } from '../../reducers/categorySlice';
import { GetParent } from '../../reducers/cateParentSlice';
import { AddCart } from '../../reducers/cartAdd';
import { GetCart } from '../../reducers/cartSlice';
const DetailAsm = (props) => {
  const dispatch = useDispatch();
  const { detailData, detailStatus } = useSelector((state) => state.detail);
  const { categoryData, categoryStatus } = useSelector((state) => state.category);
  const { parentData, parentStatus } = useSelector((state) => state.parent);
  const { addcartData, addcartStatus } = useSelector((state) => state.addCart);
  const { loginData, loginStatus } = useSelector((state) => state.login);
  const { cartData, cartStatus } = useSelector((state) => state.cart);
  const [qty, setqty] = useState(0);
  const [price, setprice] = useState(0);
  const [buy, setbuy] = useState(false);
  const { navigation } = props;
  const id = props.route?.params?.id;

  const btnMinus = () => {
    const value = qty - 1;
    const priceValue = value * detailData.price;

    if (value <= 0) {
      setqty(0);
      setprice(0);
      setbuy(false)
    }
    else {
      setqty(value);
      setprice(priceValue)
    }

  }
  const btnAdd = () => {
    const value = qty + 1;
    if (value > 0) {
      setbuy(true)
    }
    const priceValue = value * detailData.price
    setqty(value);
    setprice(priceValue)
  }
  const AddtoCart = () => {
    dispatch(AddCart({ userId: loginData.user._id, qty: qty, id: id }))
    navigation.navigate('Cart')


  }
  useEffect(() => {

    if (detailData && detailData.cat_id) {
      dispatch(GetDetailCategory(detailData.cat_id));
    }

  }, [dispatch, detailData]);
  useEffect(() => {

    if (categoryData && categoryData.parentId) {

      dispatch(GetParent(categoryData.parentId));

    }

  }, [dispatch, categoryData]);

  useEffect(() => {

    dispatch(GetDetail(id));
    dispatch(GetCart(loginData.user._id));


  }, [dispatch]);
  useEffect(() => {
    if (cartStatus === 'succeeded' && detailStatus === 'succeeded') {
      const productInCart = cartData.find(product => product.productId === detailData._id);
      if (productInCart) {
        setqty(productInCart.qty);
        setprice(productInCart.price * productInCart.qty);
        setbuy(true);
      } else {
        setqty(0);
        setprice(0);
        setbuy(false);
      }
    }
  }, [cartData, detailData, cartStatus, detailStatus]);

  return (
    <View style={styles.container}>

      <HeaderCustom
        leftIcon={require('../../../assets/images/arrow-left.png')}
        title={detailData.name}
        navigation={navigation}
        rightIcon={require('../../../assets/images/shopping-cart.png')}


      />
      <View style={styles.headerDetail}>
        {!!detailData.image && <Image style={styles.img} source={{ uri: detailData.image }} />}
      </View>
      <View style={styles.body}>
        <View style={styles.headerBody}>
          <View style={styles.type}>
            {!!categoryData.parentId && <View style={styles.typeBox}>
              <Text style={styles.txtType}>{parentData.name}</Text>
            </View>}
            <View style={styles.typeBox}>
              <Text style={styles.txtType}>{categoryData.name}</Text>
            </View>




          </View>
          <Text style={styles.Price}>
            {detailData.price}đ
          </Text>

          <View style={styles.underLineMain}>
            <Text style={styles.txtDeMain}>
              Chi tiết sản phẩm
            </Text>
          </View>

          <View style={styles.underLine}>
            <Text style={styles.txtDe}>
              Kích cỡ
            </Text>
            <Text style={styles.txtDe}>
              {detailData.size}
            </Text>
          </View>
          <View style={styles.underLine}>
            <Text style={styles.txtDe}>
              Xuất xứ
            </Text>
            <Text style={styles.txtDe}>
              {detailData.originer}
            </Text>
          </View>
          <View style={styles.underLine}>
            <Text style={styles.txtDe}>
              Tình trạng
            </Text>
            <Text style={styles.sanpham}>
              Còn  {detailData.quantity} sp
            </Text>
          </View>

        </View>
        <View style={styles.footerbody}>
          <View style={styles.rowfoot}>
            <Text style={[styles.textChoose, { paddingLeft: 4 }]}>
              Đã chọn {qty} sản phẩm
            </Text>
            <Text style={styles.textChoose}>
              Tạm tính
            </Text>
          </View>

          <View style={styles.rowfoot}>
            <View style={styles.left}>
              <TouchableOpacity onPress={btnMinus} style={[styles.btnMP, { borderColor: '#7D7B7B' }]}>
                <Image source={require('../../../assets/images/minus.png')} />
              </TouchableOpacity>
              <Text>
                {qty}
              </Text>
              <TouchableOpacity onPress={btnAdd} style={[styles.btnMP, { borderColor: 'black' }]}>
                <Image source={require('../../../assets/images/plus.png')} />
              </TouchableOpacity>
            </View>

            <Text style={styles.priceBuy}>
              {price}đ
            </Text>

          </View>
          <TouchableOpacity onPress={AddtoCart} disabled={!buy} style={buy ? styles.buyG : styles.buyCon}>
            <Text style={styles.buyText}>
              CHỌN MUA
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DetailAsm

const styles = StyleSheet.create({
  img: {
    height: 270,
    width: '100%'
  },
  buyText: {
    fontSize: 16,
    color: 'white',
    lineHeight: 20,
    fontFamily: 'Poppins-Medium',
  },
  buyCon: {

    backgroundColor: '#ABABAB',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15.5,
  },
  buyG: {

    backgroundColor: '#007537',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15.5,
  },
  priceBuy: {


    fontSize: 24,
    color: 'black',
    lineHeight: 34,
    fontFamily: 'Poppins-Medium',


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
  left: {
    padding: 4,
    width: '44%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textChoose: {

    fontSize: 14,

    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  rowfoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  underLine: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ABABAB',
    paddingBottom: 3,
  },
  sanpham: {
    color: '#007537',
    fontSize: 14,

    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  txtDe: {
    color: '#3a3a3a',
    fontSize: 14,

    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  underLineMain: {

    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#221F1F',
    paddingBottom: 4,
  },
  txtDeMain: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22,
    fontFamily: 'Poppins-Medium',
  },
  Price: {
    color: '#007537',
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Poppins-Medium',
    marginVertical: 15,
  },
  txtType: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular'
  },
  typeBox: {
    height: 28,
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#007537'
  },
  type: {
    flexDirection: 'row',
  },
  headerBody: {
    paddingHorizontal: 24,
    paddingVertical: 15,
  },
  body: {
    paddingHorizontal: 24,
  },

  headerDetail: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',

  },
  container: {
    flex: 1,

    backgroundColor: 'white'

  },
})