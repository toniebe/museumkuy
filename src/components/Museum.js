import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import museum from '../assets/image/musuem.jpg'
import rating from '../assets/logo/star.png'

const Museum = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={museum}  style={{width:106,height:69,borderRadius:20}} />
            </View>
            <View style={styles.fontContainer}>
                <Text style={styles.fontMuseum}>Museum Fatahilah</Text>
                <Text style={styles.fontKota}>Jakarta Barat</Text>
            </View>
            <View style={styles.ratingContainer}>
                <Image source={rating} style={styles.ratingImage} />
                <Text style={styles.fontRating}>5.0</Text>
            </View>    
        </View>
    )
}

export default Museum

const styles = StyleSheet.create({
    container:{
        marginTop:5,
        borderWidth:1,
        borderColor:'#DBD7D2',
        borderRadius: 30,
        flex:1,
        flexDirection:'row'
    },
    imageContainer:{
        flex:2,
        paddingVertical:10,
        paddingLeft:10
    },
    fontContainer:{
        flex:3,
        // backgroundColor: 'blue',
        marginLeft:20,
        marginTop:10
    },
    fontMuseum:{
        fontSize:14,
        fontWeight:'bold'
    },
    fontKota:{
        fontSize:10,
        color:'#C4C4C4'
    },
    ratingContainer:{
        flex:1,
        // backgroundColor: 'blue',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingVertical:20,
        flexDirection:'row',
        marginRight: 10,
    },
    ratingImage:{
        width:15,
        height:15,
        // backgroundColor: 'red',
        
    },
    fontRating:{
        height: 18,
        // backgroundColor: 'red',
        fontSize:15,
        fontWeight:'bold',
        marginLeft:4,
    }
})