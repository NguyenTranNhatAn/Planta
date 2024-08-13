import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { GetAllCategory } from '../reducer/categoryGetallSlice';



const ProductSection = ({ idCate,title, data, more, navigation }) => {

    const detail = (id) => {
        navigation.navigate('Detail', { id: id });
    }
    const seeMore = () => {
        navigation.navigate('More',{idCate:idCate});

    }


    const dispatch = useDispatch();
    const { cateAllData, cateAllStatus } = useSelector((state) => state.cateGetAll);
    const { categoryData, categoryStatus } = useSelector((state) => state.category);
    useEffect(() => {
        dispatch(GetAllCategory());

    }, [dispatch]);
    const itemCount = more ? 4 : data.length;
    const renderitem = (data) => {

        return data.slice(0, itemCount).map((item, index) => {

            var type
            cateAllData.forEach(cateItem => {
                if (cateItem._id == item.cat_id) {
                    type = cateItem.name
                }
            });


            return (
                <TouchableOpacity onPress={() => detail(item._id)} style={styles.itemContain} key={index}>
                    <View style={styles.imgContain}>
                        <Image width={155} height={134} source={{ uri: item.image }} />

                    </View>
                    <View style={styles.itemBody}>
                        <Text style={styles.nameItem}>{item.name}</Text>
                        {!!type && <Text style={styles.typeItem}>{type}</Text>}

                        <Text style={styles.priceItem}>{item.price}đ</Text>
                    </View>
                </TouchableOpacity>
            )
        })


    }
    return (
        <View style={styles.sectionContainer}>
            {
                !!title &&
                <Text style={styles.bodySection}>
                    {title}
                </Text>
            }

            <View style={[styles.list]}>
                {renderitem(data)}
            </View>
            {
                !!more &&
                <TouchableOpacity onPress={seeMore}>
                    <Text style={styles.seeMore}>
                        Xem thêm {title}
                    </Text>
                </TouchableOpacity>
            }
        </View>
    )
}


export default ProductSection

const styles = StyleSheet.create({
    sectionContainer: {
        marginBottom: 40,

    },
    seeMore: {
        color: 'black',
        textDecorationLine: 'underline',
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        lineHeight: 22,
        alignSelf: 'flex-end'
    },
    priceItem: {
        color: '#007537',
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 15,

    },
    typeItem: {
        color: '#7D7B7B',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 20,

    },
    nameItem: {
        color: 'black',
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        lineHeight: 22,
    },
    itemBody: {
        marginTop: 4
    },
    imgContain: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,

        alignItems: 'center'
    },
    itemContain: {
        width: '48%',
        marginBottom: 15,




    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

    },
    bodySection: {
        color: '#221F1F',
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        lineHeight: 34,
        marginBottom: 15,
    }
})