import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderCustom from '../../components/HeaderCustom'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUser } from '../../reducers/updateUserSlice';
import { DangNhapTaiKhoan } from '../../reducers/loginSlice';
import { FindUser } from '../../reducers/findUser';
const AdjPersonal = (props) => {
    const dispatch = useDispatch();
    const { loginData } = useSelector((state) => state.login)
    const { findUserData, findUserStatus } = useSelector((state) => state.findUser)
    const { navigation } = props;
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [adress, setadress] = useState("");
    const [phone, setphone] = useState("");
    const [id, setid] = useState(loginData.user._id);

    const Luu = () => {


        dispatch(UpdateUser({ _id: loginData.user._id, name: name, email: email, address: adress, phone: phone }))
        dispatch(FindUser(loginData.user._id));
        ToastAndroid.show("Lưu thành công", ToastAndroid.SHORT);

    }

    useEffect(() => {

        dispatch(FindUser(id));

    }, [dispatch]);

    useEffect(() => {


        setname(findUserData.name)
        setemail(findUserData.email)
        setadress(findUserData.address)
        setphone(findUserData.phone);
    }, [dispatch, findUserStatus]);


    return (
        <View style={styles.container}>
            <HeaderCustom
                leftIcon={require('../../../assets/images/arrow-left.png')}
                title={'CHỈNH SỬA THÔNG TIN'}
                navigation={navigation}

            />
            <Image style={styles.avata} source={require('../../../assets/images/Avatar.png')} />
            <View style={styles.body}>
                <Text style={styles.noti}>
                    Thông tin sẽ được lưu cho lần mua kế tiếp.
                    Bấm vào thông tin chi tiết để chỉnh sửa.
                </Text>
                <TextInput onChangeText={text => setname(text)} value={name} placeholderTextColor={'#7b7b7b'} style={[styles.input, { height: 30 }]} />
                <TextInput onChangeText={text => setemail(text)} value={email} placeholderTextColor={'#7b7b7b'} style={[styles.input, { height: 30 }]} />

                <TextInput onChangeText={text => setadress(text)} value={adress} placeholderTextColor={'#7b7b7b'} style={[styles.input, { height: 30 }]} />
                <TextInput onChangeText={text => setphone(text)} value={phone} placeholderTextColor={'#7b7b7b'} style={[styles.input, { height: 30 }]} />


            </View>
            <TouchableOpacity onPress={Luu} style={styles.btnPay}>
                <Text style={styles.textPay}>LƯU THÔNG TIN</Text>

            </TouchableOpacity>
        </View>
    )
}

export default AdjPersonal

const styles = StyleSheet.create({
    textPay: {
        lineHeight: 20,
        fontSize: 16,
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'Poppins-Medium'
    },
    btnPay: {
        height: 50,
        marginHorizontal: 24,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: '#7B7B7B',
        alignItems: 'center',
        marginTop: 15,

        justifyContent: 'center',



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
    noti: {
        color: 'black',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 38,
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    avata: {
        alignSelf: 'center',
        marginTop: 24,
    },
    body: {
        marginHorizontal: 48,
        marginTop: 25,
        flex: 1,

    }
})