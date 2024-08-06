import {
  StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView,
  KeyboardAvoidingView, Alert, ToastAndroid
} from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { DangNhapTaiKhoan } from '../Asm/reducer/loginSlice';
const LoginAsm = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { loginData, loginStatus } = useSelector((state) => state.login);
  const [email, setemail] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [err, setErr] = useState({email:''})
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [ok, setok] = useState(false);
  const [focus, setfocus] = useState(false);
  const [passfocus, setpassfocus] = useState(false)
  const [secure, setSecure] = useState(true)



  useEffect(() => {

    if (loginStatus == "succeeded" && ok === true) {

      if (loginData.status === "true") {

        setPasswordErr('');
        setemailErr('')
        navigation.navigate('Tab');
        ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);

      }
    }
    if (loginStatus == 'failed') {
      setPasswordErr('Email hoặc mật khẩu sai');
      setemailErr('Email hoặc mật khẩu sai');
      ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.SHORT);
    }


  }, [loginStatus])

  const regis = () => {
    navigation.navigate('Register')
  }
  const changeEmail = (data) => {

    setemail(data);
    setemailErr("");
  }
  const changepassword = (data) => {

    setPassword(data);
    setPasswordErr("");
  }
  const lookPass = () => {
    setSecure(!secure)
  }
  const addData = () => {
    var check = true
    if (email == "") {
      setemailErr('Email không được để trống');
      check = false;
    }
    if (password == "") {
      setPasswordErr('Password không được để trống')
      check = false;
    }

    if (check === true) {
      dispatch(DangNhapTaiKhoan({ email, password }))
      setok(true)
    }

  }
  return (
    <View style={{ flex: 1 }}>
   
        <ScrollView>
          <Image style={styles.anhnen} source={require('../../assets/images/nen.png')} />

          <View style={styles.than}>
            <Text style={styles.title}>Chào Mừng Bạn</Text>
            <Text style={styles.annou} >Đăng nhập tài khoản</Text>

            <View style={styles.conText}>


              <View

                style={[
                  !!emailErr ? styles.textInconErr : styles.textInCon,
                  !emailErr && focus && { borderColor: 'green' }
                ]}>
                <TextInput
                  onFocus={() => setfocus(true)}
                  onBlur={() => setfocus(false)}
                  onChangeText={(data) => changeEmail(data)} style={styles.input}
                  placeholder='Nhập email hoặc Số điện thoại' />
              </View>

              {!!emailErr && <Text style={styles.textRed}>{emailErr} </Text>}

              <View

                style={[
                  !!passwordErr ? styles.textInconErr : styles.textInCon,
                  !passwordErr && passfocus && { borderColor: 'green' }

                ]}>
                <TextInput
                  onFocus={() => setpassfocus(true)}
                  onBlur={() => setpassfocus(false)}
                  secureTextEntry={secure}
                  onChangeText={(data) => changepassword(data)}
                  style={styles.input} placeholder='Mật khẩu' />
                <TouchableOpacity onPress={lookPass}>
                  {secure ? <Image source={require('../../assets/images/eye.png')} />
                    : <Image source={require('../../assets/images/eyeoff.png')} />}
                </TouchableOpacity>
              </View>

              {!!passwordErr && <Text style={styles.textRed}>{passwordErr} </Text>}


            </View>

            <View style={styles.bottom}>
              <View style={styles.remember}>
                <TouchableOpacity>
                  <Image source={require('../../assets/images/ri_checkbox-circle-line.png')} />
                </TouchableOpacity>
                <Text style={styles.rememtext}>Nhớ tài khoản</Text>
              </View>

              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot password ? </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={addData} style={styles.btnSign}>
              <LinearGradient
                colors={['#007537', '#4CAF50']} // Màu xanh đậm và xanh nhạt
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}
              >
                <Text style={styles.Signin}>Đăng Nhập</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.another}>
              <View style={styles.line}></View>
              <Text style={styles.textHoac}>Hoặc</Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.account}>
              <TouchableOpacity>
                <Image style={styles.accountImg} source={require('../../assets/images/ggg.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.accountImg} source={require('../../assets/images/facebook.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.end}>
            <Text style={styles.black}>
              Bạn không có tài khoản
            </Text>
            <TouchableOpacity onPress={regis}>
              <Text style={styles.green}>
                Tạo tài khoán
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    
    </View>
  )
}

export default LoginAsm


const styles = StyleSheet.create({
  textRed: {
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
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

  forgot: {
    color: '#009245',
  },
  rememtext: {
    marginLeft: 5,
    color: '#949090',
    fontSize: 11,
    fontFamily: 'Poppins-Medium',

  },
  remember: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  input: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    lineHeight: 18,
    width: '80%'
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
    height: 300,
    resizeMode: 'stretch'



  },
})