import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import museum from '../assets/image/musuem.jpg'

const TransaksiPending = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={{width:65, height:36, borderRadius: 30, }} source={museum}/>
            </View>
            <View style={styles.fontContainer}>
                <Text styles={{ fontSize: 5, width: 75, height: 16,}}>Museum Fatahilah</Text>
                <Text styles={styles.fontTanggal}>11/29/2020</Text>
            </View>
            <View style={styles.statusContainer}>
                <Text style={styles.fontStatus}>Belum Bayar</Text>
            </View>
        </View>
    )
}

export default TransaksiPending

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
    },

    imageContainer:{
        justifyContent : 'center',
        alignItems:'center',
        marginLeft: 8,
    },

    fontContainer:{
        justifyContent : 'center',
        marginLeft: 10,
    },
    
    statusContainer:{
        justifyContent: "flex-end",
        marginBottom: 10,
    },

    fontStatus:{
        color: "red",
    },

   

})