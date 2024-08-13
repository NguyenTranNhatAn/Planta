import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import HeaderCustom from '../../Compoment/HeaderCustom'


const Question = (props) => {
    const { navigation } = props
    return (
        <View style={styles.con}>

            <HeaderCustom
                leftIcon={require('../../../assets/images/arrow-left.png')}
                title={'Q & A'}
                navigation={navigation}


            />
            <View style={styles.body}>
                <TouchableOpacity style={styles.btnCon}>
                    <Text style={styles.textBlack}>
                        Tôi trộn các chất dinh dưỡng theo thứ tự nào?
                    </Text>
                    <Image source={require('../../../assets/images/chevron-up.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCon}>
                    <Text style={styles.textBlack}>
                        Tôi có thể giữ dung dịch dinh dưỡng hỗn hợp trong bao lâu?
                    </Text>
                    <Image source={require('../../../assets/images/chevron-up.png')} />
                </TouchableOpacity>


                <TouchableOpacity style={styles.btnCon}>
                    <Text style={styles.textBlack}>
                        Khi nào tôi thêm bộ điều chỉnh pH?
                    </Text>
                    <Image source={require('../../../assets/images/chevron-up.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCon}>
                    <Text style={styles.textBlack}>
                        Các chất điều chỉnh tăng trưởng có được sử dụng trong các sản phẩm Planta không?
                    </Text>
                    <Image source={require('../../../assets/images/chevron-up.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCon}>
                    <Text style={styles.textBlack}>
                        Các sản phẩm Planta có phải là hữu cơ không?
                    </Text>
                    <Image source={require('../../../assets/images/chevron-up.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Question

const styles = StyleSheet.create({
    textBlack: {
        width: 245,
        color: 'black',
        fontSize: 16,
    },
    body: {
        marginHorizontal: 48,
        marginTop: 30,
    },
    btnCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,

    },
    con: {
        backgroundColor: 'white',
        flex: 1,
    },
})