import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,Text, ImageBackground, Platform} from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  

export default function EmergencyMode({ navigation }) {
    const insets = useSafeAreaInsets();

    const navigateToHome = () => {
        navigation.navigate('HS');
    };

    const activateEmergency = () => {
        navigation.navigate('Actv');
    };
    

    return (
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,paddingLeft: insets.left,paddingRight: insets.right,}]}>
            <View style={styles.header}>
                <View style={{flexDirection:"row", gap:5}}>
                <TouchableOpacity onPress={navigateToHome}>
                <Image source={require('./images/sidearrow.png')} style={{marginRight:20,}}></Image>
                </TouchableOpacity>
                <Text style={{color:"#FFFFFF", fontSize:20, fontWeight:"bold"}}>Emergency Mode</Text>
                <Image source={require('./images/emer.png')}></Image>
                </View>
            </View>
            <View style={styles.content}>
            <TouchableOpacity onPress={activateEmergency}>
            <Image source={require('./images/emergency.png')} style={styles.emer}></Image>
            </TouchableOpacity>
            </View>
            <View style={styles.contacts}>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Emergency Contacts</Text>
                    <View style={{flexDirection:"row", gap:10}}>
                    <Image source={require('./images/emerAdd.png')}></Image>
                    <Image source={require('./images/emerDelete.png')}></Image>
                    </View>
                </View>

                <View style={{marginTop:20,}}>
                    <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                        <Text style={{fontSize:16,}}> Mom / 09345829109</Text>
                        <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                    </ImageBackground>

                    <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                        <Text style={{fontSize:16,}}> Macy / 09849201031</Text>
                        <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        width:"100%",
        height:"10%",
        backgroundColor:"#FFB24E",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        padding:10,
    },
    content:{
        width:"100%",
        height:"23%",
        backgroundColor:"#ECECEC",
        alignItems:"center",
        padding:15,
    },
    emer:{
        width:130,
        height:130,
    },
    contacts:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderColor:"#908C8C",
        borderWidth:2,
        height:"100%",
        width:"100%",
        padding:15,
    },
    rec:{
        width:330,
        height:50,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:5,
        marginBottom:5,
    },
});