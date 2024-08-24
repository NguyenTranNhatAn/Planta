import {
  StyleSheet, Text, View,
  KeyboardAvoidingView,
  Image, TouchableOpacity, TextInput, ScrollView, Alert, ToastAndroid
} from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { DangKyTaiKhoan } from '../../reducers/registerSlice';
import TextInputCom from '../../components/TextInputCom';
const RegisterAsm = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { registerData, registerStatus } = useSelector((state) => state.register);
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [nameErr, setnameErr] = useState("");
  const [sdtErr, setsdtErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [ok, setok] = useState(false);
  useEffect(() => {
    // console.log(registerStatus);
    if (registerStatus == "succeeded" && ok === true) {
      if (registerData.status === 'Email Failed') {
        setemailErr(registerData.mess);
      }
      if (registerData.status === 'Phone Failed') {
        setsdtErr(registerData.mess);
      }
      if (registerData.status === 'Exist') {
        setemailErr(registerData.mess);
        setsdtErr(registerData.mess);
      }
      if (registerData.status === "true") {
        navigation.navigate('Login');
        ToastAndroid.show("Đăng kí thành công", ToastAndroid.SHORT);
      }
    }

  }, [registerStatus])

  const login = () => {
    navigation.navigate('Login');
  }
  const validate = () => {
    var check = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]/
    const passwordRegex2 = /^[\w@!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/;
    if (name == "") {
      setnameErr('Họ tên không được để trống');
      check = false;
    }
    if (email == '') {
      setemailErr('Email không được để trống')
      check = false;
    }
    else if (!emailRegex.test(email)) {
      setemailErr('Email không đúng định dạng')
      check = false;
    }

    if (phone == "") {
      setsdtErr('Số điện thoại không được để trống')
      check = false
    }
    else if (phone.length !== 10) {
      setsdtErr('Số điện thoại phải đủ 10 số')
      check = false;
    }


    if (password == "") {
      setPasswordErr('Mật khẩu không được để trống')
      check = false
    }
    else if (!passwordRegex1.test(password)) {
      setPasswordErr('Mật khẩu phải có chữ hoa chữ thường và có kí tự in hoa')
      check = false
    }
    else if (!passwordRegex2.test(password)) {
      setPasswordErr('Mật khẩu không được chứa kí tự đặc biệt')
      check = false
    }
    else if (password.length < 8) {
      setPasswordErr('Mật khẩu phải có ít nhất 8 kí tự')
      check = false
    }


    return check
  }
  const addData = () => {

    if (validate() === true) {
      dispatch(DangKyTaiKhoan({ name, email, phone, password }));
      setok(true)
      setEmail('')
      setPassword('')
      setPhone('')
      setname('')
    }

  }
  return (
    <KeyboardAvoidingView behavior='position' style={{ flex: 1 }}>
      <ScrollView   >
        <Image style={styles.anhnen} source={require('../../../assets/images/nenregis.png')} />
        <View style={styles.than}>
          <Text style={styles.title}>Đăng kí</Text>
          <Text style={styles.annou} >Tạo Tài khoản</Text>


          <View style={styles.conText}>

            <TextInputCom
              placeholder={'Họ tên'}
              setText={setname}
              textErr={nameErr}
              setTextErr={setnameErr}
            />
            <TextInputCom
              placeholder={'E-mail'}
              setText={setEmail}
              textErr={emailErr}
              setTextErr={setemailErr}
            />
            <TextInputCom
              placeholder={'Số điện thoại'}
              keyboardtype={'numeric'}
              setText={setPhone}
              textErr={sdtErr}
              setTextErr={setsdtErr}
            />
            <TextInputCom
              placeholder={'Mật Khẩu'}
              setText={setPassword}
              textErr={passwordErr}
              setTextErr={setPasswordErr}
            />

          </View>


          <View style={styles.bottom}>
            <Text style={styles.luuy}>
              Để đăng ký tài khoản, bạn đồng ý <Text style={styles.luuyGreen}>Terms & Conditions</Text> and <Text style={styles.luuyGreen}>Privacy Policy</Text>
            </Text>
          </View>

          <TouchableOpacity onPress={addData} style={styles.btnSign}>
            <LinearGradient
              colors={['#007537', '#4CAF50']} // Màu xanh đậm và xanh nhạt
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}
            >
              <Text style={styles.Signin}>Đăng Kí</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.another}>
            <View style={styles.line}></View>
            <Text style={styles.textHoac}>Hoặc</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.account}>
            <TouchableOpacity>
              <Image style={styles.accountImg} source={require('../../../assets/images/ggg.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.accountImg} source={require('../../../assets/images/facebook.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.end}>
          <Text style={styles.black}>
            Bạn đã có tài khoản
          </Text>
          <TouchableOpacity onPress={login}>
            <Text style={styles.green}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default RegisterAsm
const styles = StyleSheet.create({
  textRed: {
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  green: {
    color: '#009245',
    marginLeft: 5,
    fontSize: 12,

    fontFamily: 'Poppins-Regular'
  },
  black: {
    color: 'black',

    fontSize: 12,

    fontFamily: 'Poppins-Regular'
  },
  end: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  accountImg: {
    width: 32,
    height: 32
  },
  textHoac: {

    color: 'black',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  account: {
    width: 94,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  line: {
    backgroundColor: '#009245',
    width: '40%',
    height: 1,
  },
  another: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  Signin: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,

  },
  linearGradient: {
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnSign: {
    height: 50,
    marginBottom: 22,

  },
  luuyGreen: {

    color: '#009245',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    textDecorationLine: 'underline',
    textDecorationColor: '#009245'

  },

  luuy: {

    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Medium',

  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    lineHeight: 18,
    width: '80%'
  },
  textInconErr: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInCon: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#8B8B8B',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'


  },
  annou: {
    color: 'black',
    lineHeight: 27,
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular'
  },
  title: {
    color: 'black',
    lineHeight: 45,
    fontSize: 30,
    alignSelf: 'center',
    fontFamily: 'Poppins-Bold'
  },
  conText: {
    marginTop: 20,
  },
  than: {
    marginHorizontal: 30,
  },
  anhnen: {
    width: '100%',

    resizeMode: 'stretch'



  },
})