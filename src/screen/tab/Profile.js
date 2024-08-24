import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderCustom from '../../components/HeaderCustom'


const Profile = (props) => {
    const { navigation } = props;
    const goToAdj = () => {
        navigation.navigate('Adj')
    }
    const goToHis = () => {
        navigation.navigate('History')
    }
    const goToQuestion = () => {
        navigation.navigate('Question')
    }
    const logOut = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <HeaderCustom

                title={'PROFILE'}


            />
            <View style={styles.headerPro}>
                <Image style={styles.avataimg} source={require('../../../assets/images/Avatar.png')} />
                <View style={styles.right}>
                    <Text style={styles.name}>
                        Nguyễn Trần Nhật An
                    </Text>
                    <Text style={styles.email}>
                        nan@gmail.com
                    </Text>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.chung}>
                    <View style={styles.underLineSub}>
                        <Text style={styles.txtSub}>
                            Chung
                        </Text>
                    </View>
                    <TouchableOpacity onPress={goToAdj} style={styles.btnCon}>
                        <Text style={styles.textBlack}>
                            Chỉnh sửa thông tin
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCon}>
                        <Text style={styles.textBlack}>
                            Cẩm nang trồng cây
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToHis} style={styles.btnCon}>
                        <Text style={styles.textBlack}>
                            Lịch sử giao dịch
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToQuestion} style={styles.btnCon}>
                        <Text style={styles.textBlack}>
                            Q & A
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bm}>
                    <View style={styles.underLineSub}>
                        <Text style={styles.txtSub}>
                            Bảo mật và Điều khoản
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.btnCon}>
                        <Text style={styles.textBlack}>
                            Điều khoản và điều kiện
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCon}>
                        <Text style={styles.textBlack}>
                            Chính sách quyền riêng tư
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCon}>
                        <Text style={styles.textBlack}>
                            Lịch sử giao dịch
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={logOut} style={styles.btnCon}>
                        <Text style={styles.textRed}>
                            Đăng xuất
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    bm: {
        marginTop: 30,
    },
    btnCon: {
        marginTop: 16.2,
    },
    textRed: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold',
        color: '#FF0000'
    },
    textBlack: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    txtSub: {
        color: '#7b7b7b',
        fontSize: 14,

        lineHeight: 20,
        fontFamily: 'Poppins-Regular',
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
    body: {
        marginTop: 30,
        marginHorizontal: 48,
    },
    name: {
        fontSize: 16,
        lineHeight: 22,

        color: 'black'
    },

    avataimg: {
        width: 39,
        height: 39,
        marginRight: 26,
    },
    headerPro: {
        flexDirection: 'row',
        paddingHorizontal: 48,
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
})