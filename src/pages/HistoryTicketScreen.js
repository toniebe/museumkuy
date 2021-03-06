import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MenuTransaksi from '../components/MenuTransaksi'
import Transaksi from '../components/Transaksi'


import gambarTransaksi from '../assets/image/MenuTransaksi.png'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable'


const HistoryTicketScreen = ({navigation}) => {
    
    
    return (
        <View style={styles.container}>
            {/* <Animatable.View 
            animation="fadeInDownBig"
            style={styles.containerTop}>
                <Image style={{width: 242, height:171}} source={gambarTransaksi}/>
                <Text style={styles.title}> History Transaksi </Text>
            </Animatable.View> */}
            <View 
            
            style={styles.containerBottom}>
                {/* <View style={styles.bottomTop}>
                    <ScrollView horizontal >
                        <TouchableOpacity>
                            <MenuTransaksi name="Transaksi Pending" />  
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.push('HistorySuccess')}>
                            <MenuTransaksi name="Transaksi Berhasil" /> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('HistoryFailed')}>
                            <MenuTransaksi name="Transaksi Gagal" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MenuTransaksi name="Semua Transaksi" />
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={styles.midBottom}>
                    <View style={{borderColor:'#C4C4C4', borderWidth:1, marginTop:20, width:320}}/>
                </View> */}
                
                <ScrollView style={{marginTop: 15,}}>
                    <View style={styles.bottomBottom}>
                        <TouchableOpacity style={styles.BtnTransaksi} onPress={() => navigation.navigate('PesananBerhasil')}>
                            <Transaksi status="Belum Lunas"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BtnTransaksi} onPress={() => navigation.navigate('TransaksiSukses')}> 
                            <Transaksi status="Menunggu Verifikasi"/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                
            </View>
        </View>
    )
}

export default HistoryTicketScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A01F1F',
    },

    // containerTop:{
    //     flex: 1.5,
    //     backgroundColor: 'white',
    //     borderBottomRightRadius: 30,
    //     borderBottomLeftRadius: 30,
    //     justifyContent:"center",
    //     alignItems:"center",
    // },

    // title:{
    //     fontSize: 18,
    //     fontWeight: '400',
    //     marginTop: 15,
    // },

    containerBottom:{
        flex: 2,
        backgroundColor: 'white',
        // alignItems:"center",
    },

    bottomTop:{
        height: 30,
        // backgroundColor:'grey',
        width: 320,
    },

    bottomBottom:{
    }, 

    BtnTransaksi:{
        flex:1,
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 2,
        paddingVertical: 5,
        paddingHorizontal: 5,
        // paddingVertical: 10,
        borderRadius: 10,
        borderColor: '#C4C4C4',
        
    }
})
