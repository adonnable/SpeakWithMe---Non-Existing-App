import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,Text, ImageBackground, Platform} from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  

export default function AudioReply({ navigation }) {
    const insets = useSafeAreaInsets();

    const navigateAudioMode = () => {
        navigation.navigate('AudMode');
    };

    const navigateHome = () => {
        navigation.navigate('HS');
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,paddingLeft: insets.left,paddingRight: insets.right,}]}>
            <View style={styles.header}>
                <View style={{flexDirection:"row", gap:5}}>
                <TouchableOpacity onPress={navigateHome}>
                <Image source={require('./images/sidearrow.png')} style={{marginRight:20,}}></Image>
                </TouchableOpacity>
                <Text style={{color:"#FFFFFF", fontSize:20, fontWeight:"bold"}}>Audio Mode</Text>
                <Image source={require('./images/whitemic.png')}></Image>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.audiobox}>
                    <Text style={{width:"100%", fontSize:60,}}>Hello, Steve.</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={navigateAudioMode}>
                    <Text style={{fontWeight:"bold", fontSize:16}}>Reply</Text>
                </TouchableOpacity>
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
        height:"100%",
        backgroundColor:"#FFB24E",
        alignItems:"center",
        padding:15,
    },
    audiobox:{
        borderRadius:10,
        backgroundColor:"#FFFFFF",
        width:"90%",
        height:"70%",
        alignItems:"center",
        padding:20,
    },
    cancel:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-end",
    },
    text1:{
        fontWeight:"bold",
        fontSize:18,
    },
    recbtn:{
        width:120,
        height:120,
        marginTop:120,
    },
    mic:{
        marginTop:50,
    },
    btn:{
        backgroundColor:"#FFFFFF",
        height:50,
        width:150,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
    },
});