import { StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductSection from '../../Compoment/ProductSection';
import HeaderCustom from '../../Compoment/HeaderCustom';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCategory } from '../../reducer/categoryGetallSlice';
import { GetProByTypeCategory } from '../../reducer/productByType';
const Regular = (props) => {
    const dispatch = useDispatch();
    const { cateAllData, cateAllStatus } = useSelector((state) => state.cateGetAll);
    const { typeProStatus, typeProData } = useSelector((state) => state.proByType);
    const [id, setid] = useState("")
    const [title, settitle] = useState("");
    const [selectItem, setselectItem] = useState("")
    const { navigation } = props;
    const select = (item, id) => {

        setselectItem(id);
        console.log(item._id)
        setid(item._id);
    }
    useEffect(() => {
        setselectItem(0)

    }, []);
    useEffect(() => {
        dispatch(GetProByTypeCategory(id))
        console.log('run')
    }, [dispatch, id]);
    const { productData, productStatus } = useSelector((state) => state.product);
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => select(item, index)} style={index == selectItem ? styles.typeBtn : styles.typeBtnUn}>
                <Text style={index == selectItem ? styles.name : styles.nameUn}>{item.name}</Text>
            </TouchableOpacity>
        )
    };
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>

            <HeaderCustom
                leftIcon={require('../../../assets/images/arrow-left.png')}
                title={'CÂY TRỒNG'}
                navigation={navigation}
                rightIcon={require('../../../assets/images/shopping-cart.png')}


            />
            <View style={styles.flashlistcon}>
                <FlatList
                    style={styles.flashList}
                    horizontal={true}
                    data={cateAllData}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item._id}
                />


            </View>
            <ScrollView>
                <View style={styles.list}>
                    <ProductSection data={typeProData} navigation={navigation} />

                </View>
            </ScrollView>
        </View>
    )
}

export default Regular

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 24,
    },
    name: {
        color: 'white',
        lineHeight: 20,
        fontSize: 14,

        fontFamily: 'Poppins-Regular'
    },
    nameUn: {
        color: '#7D7B7B',
        lineHeight: 20,
        fontSize: 14,

        fontFamily: 'Poppins-Regular'
    },
    typeBtn: {
        marginRight: 8,
        backgroundColor: '#009245',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    typeBtnUn: {
        marginRight: 8,

        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    flashList: {
        paddingHorizontal: 3,
    },
    flashlistcon: {
        paddingHorizontal: 24,
        paddingVertical: 15,

    }
});
