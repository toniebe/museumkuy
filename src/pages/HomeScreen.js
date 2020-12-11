import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable'
import Profile from '../assets/image/FotoProfil.png'
import LogoSearch from '../assets/logo/loupe.png'
import ButtonLihatSemua from '../components/ButtonLihatSemua'
import City from '../components/City'
import Museum from '../components/Museum'
import MuseumPopuler from '../components/MuseumPopuler'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Animatable.View 
            animation="fadeInDownBig"
            style={styles.up}>
                <View style={styles.userMessage}>
                    <View style={styles.left}>
                        <Text style={styles.hi}>Hi, User</Text>
                        <Text style={styles.message}>Choose the</Text>
                        <Text style={styles.message}>Museum you want</Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={Profile} style={{width:47,height:47}} />
                    </View>
                </View>
                <View style={styles.userSearch}>
                    <View style={styles.searchInput}>
                        <TextInput placeholder="search" style={styles.textInput}/>
                    </View>
                    <View style={styles.searchLogo}>
                        <Image source={LogoSearch} style={{width:30,height:30,}} />
                    </View>
                </View>
            </Animatable.View>
            <Animatable.View
             animation="fadeInUpBig"
             style={styles.down}>
                <ScrollView>
                    <Text style={styles.fontMostPopuler}>The Most Populer Museum</Text>
                    <ScrollView horizontal>
                        <TouchableOpacity > 
                            <MuseumPopuler />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MuseumPopuler />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MuseumPopuler />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MuseumPopuler />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MuseumPopuler />
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={{borderColor:'#C4C4C4', borderWidth:1,marginTop:20}}/>
                        <Text style={styles.fontCity}>The City of DKI Jakarta</Text>
                        <ScrollView horizontal>
                            <TouchableOpacity>
                                <City name="Jakarta Barat" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <City name="Jakarta Timur" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <City name="Jakarta Selatan" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <City name="Jakarta Utara" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <City name="Jakarta Pusat" />
                            </TouchableOpacity>
                        </ScrollView>
                    <View style={{borderColor:'#C4C4C4', borderWidth:1, marginTop:10}}/>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('DescMuseum')} >
                            <Museum />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('DescMuseum')}>
                            <Museum />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('DescMuseum')}>
                            <Museum />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('DescMuseum')}>
                            <Museum />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('DescMuseum')}>
                            <Museum />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.buttonLihatSemua} onPress={() => navigation.navigate('AllMuseum')}>
                        <ButtonLihatSemua />
                    </TouchableOpacity>
                </ScrollView>
            </Animatable.View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#A01F1F'
    },
    up:{
        flex:1,
        backgroundColor:'#A01F1F',
    },
    down:{
        flex:2,
        backgroundColor:'white',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        paddingTop:20,
        paddingHorizontal:20,
    },
    userMessage:{
        flex:1,
        flexDirection:'row',
        marginTop:20,
        marginHorizontal:20
    },
    userSearch:{
        flex:1,
        // backgroundColor: 'grey',
        marginHorizontal: 20,
        flexDirection:'row'
    },
    searchInput:{
      marginRight:10,  
    },

    searchLogo:{
        marginVertical: 15,
    },

    left:{
        flex:3,
        justifyContent:'center'
    },
    right:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
        
    },
    hi:{
        color:'white'
    },
    message:{
        color:'white',
        fontSize:20
    },
    textInput:{
        marginTop:10,
        borderWidth: 1,
        backgroundColor:'white',
        borderColor:'#DBD7D2',
        borderRadius:20,
        width:255,
        height:40,
        paddingLeft: 10
    },
    fontMostPopuler:{
        fontSize:14,
        color:'#A01F1F',
        marginBottom:10,
    },
    fontCity:{
        marginVertical:20,
        fontSize:14,
        color:'#A01F1F'
    },
    buttonLihatSemua:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 20
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
            }
})
