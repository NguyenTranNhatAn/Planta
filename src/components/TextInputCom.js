import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const TextInputCom = ({
     setText,textErr, placeholder, setTextErr, keyboardtype
}) => {
    const [focus, setFocus] = useState(false)
    const changeErrText = (data) => {

        setText(data);
        setTextErr("");
      }
    return (

        <View>
            <View

                style={[
                    !!textErr ? styles.textInconErr : styles.textInCon,
                    !textErr && focus && { borderColor: 'green' }
                ]}>
                <TextInput
                    keyboardType={!!keyboardtype? keyboardtype:'default'}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChangeText={(data) => changeErrText(data)} style={styles.input}
                    placeholder={placeholder} />
            </View>

            {!!textErr && <Text style={styles.textRed}>{textErr} </Text>}
        </View>
    )
}

export default TextInputCom

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
})