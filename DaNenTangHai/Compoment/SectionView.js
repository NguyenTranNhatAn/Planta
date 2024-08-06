import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'


const SectionView = ({ title, data }) => {
    return (
        <View>
             <Text style={styles.text}>{title}</Text>
             <View style={styles.con}>
             <ScrollView 
             style={styles.bentrong}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
              {renderItem(data)}

           

          
        
        </ScrollView>
        </View>
        </View>
    )
       
       
      
        
}
const renderItem = (data) => {
    return data.map((item, index) => (
        <View style={styles.noidung} key={index}>
            <View style={styles.in4type}>
                <Text style={styles.textTitle}>Địa điểm</Text>
                <Text style={styles.textdata}>{item.address}</Text>
            </View>

            <View style={styles.in4type}>
                <Text style={styles.textTitle}>Thời gian</Text>
                <Text style={styles.textdata}>{item.time}</Text>
            </View>

            <View style={styles.in4type}>
                <Text style={styles.textTitle}>Phương tiện di chuyển    </Text>
                <Text style={styles.textdata}>{item.trans}</Text>
            </View>

            <View style={styles.in4type}>
                <Text style={styles.textTitle}>Thời gian</Text>
                <Text style={styles.textdata}>{item.time2}</Text>
            </View>

            <View style={styles.in4type}>
                <Text style={styles.textTitle}>Hình ảnh</Text>
                <Image style={styles.anh} source={item.anh} />
            </View>


        </View>
    ));
}
export default SectionView

const styles = StyleSheet.create({
   
    anh:{
        width:'100%',
        height:150
    },
    in4type: {
        marginBottom: 5
    },
    textdata: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    noidung: {
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowColor: '1px 2px 9px #F4AAB9',
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        margin:5,
        

    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'gray',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        margin:10,

    },
    con: {
        padding: 10,
        justifyContent: 'space-between',
       

    },
})