import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LaySanPham } from '../Asm/reducer/ProductSlice'
import ProductSection from '../Compoment/ProductSection'

const HomeAsm = (props) => {
    const dispatch = useDispatch();
    const { productData, productStatus } = useSelector((state) => state.product);
    const { navigation } = props;
    const [load, setload] = useState(false);

    useEffect(() => {


        dispatch(LaySanPham());

    }, [dispatch])

    useEffect(() => {
        if (productStatus == 'loading') {
            setload(true)
            setTimeout(() => {
                setload(false)

            }, 1000);
        }



    }, [productStatus])
    const toCart = () => {
        navigation.navigate('Cart');
    }

    return (
        <View style={styles.container}>

            <ScrollView

            >
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Planta - toả sáng không gian nhà bạn
                    </Text>
                    <TouchableOpacity onPress={toCart} style={styles.btnCart}>
                        <Image style={styles.imgstyle} source={require('../../assets/images/shopping-cart.png')} />
                    </TouchableOpacity>
                </View>
                <ImageBackground style={styles.background} source={require('../../assets/images/nenHome.png')}>
                    <TouchableOpacity style={styles.btnNewPro}>
                        <Text style={styles.newProduct}>Xem hàng mới về</Text>
                        <Image source={require('../../assets/images/fi_arrow-right.png')} />
                    </TouchableOpacity>

                </ImageBackground>
                <View style={styles.body}>
                    {load ?
                        <Text>Loading...</Text>
                        :
                        <ProductSection title={'Cây trồng'} data={productData} more={'true'} navigation={navigation} />

                    }

                    <View >
                        <Text style={styles.bodySection}>Combo Chăm sóc (mới)</Text>

                        <TouchableOpacity style={styles.bodyCombo}>
                            <View style={styles.leftCombo}>
                                <Text style={styles.nameCombo}>Lemon Balm Grow Kit </Text>
                                <Text numberOfLines={3} style={styles.decrip}>
                                    Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...
                                </Text>
                            </View>
                            <Image style={styles.rightCombo} source={require('../../assets/images/rightCombo.png')} />
                        </TouchableOpacity>


                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeAsm

const styles = StyleSheet.create({
    decrip: {
        color: '#7b7b7b',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 20,
        width: 176,
    },
    rightCombo: {
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8
    },
    conBody: {
        borderRadius: 8,

    },
    nameCombo: {
        color: 'black',
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        lineHeight: 22,
    },
    leftCombo: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    bodyCombo: {
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: '#F6F6F6',
        flexDirection: 'row'


    },
    bodySection: {
        color: '#221F1F',
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        lineHeight: 34,

        marginBottom: 15,
    },
    body: {
        paddingTop: 30,
        paddingHorizontal: 24,
        backgroundColor: 'white',
    },
    btnNewPro: {
        flexDirection: 'row',
        alignItems: 'center',

        marginTop: 50,

    },
    newProduct: {

        marginRight: 4,
        fontFamily: 'Poppins-Medium',
        color: '#007537',
        textAlign: 'center',
        fontSize: 16,
    },
    background: {
        paddingHorizontal: 25,
        marginTop: -35,
        zIndex: -1,
        height: 205,
    },
    imgstyle: {
        width: 24,
        height: 24,
        marginRight: 13,
        marginLeft: 11,
        marginTop: 14,
        marginBottom: 8
    },
    btnCart: {
        backgroundColor: 'white',
        height: 48,
        width: 46,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9999,

    },
    header: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',

        backgroundColor: '#F6F6F6'
    },
    container: {
        paddingTop: 40,
        backgroundColor: '#F6F6F6',

    },
    title: {
        fontFamily: 'Poppins-Medium',
        color: 'black',
        fontSize: 24,
        width: 250,
    }
});


