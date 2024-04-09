import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,Text, ImageBackground, Platform} from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  

export default function ConvertAudio({ navigation }) {
    const insets = useSafeAreaInsets();

    const navigateBack = () => {
        navigation.navigate('Text');
    };
    return (
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,paddingLeft: insets.left,paddingRight: insets.right,}]}>
            <View style={styles.header}>
                <View style={{flexDirection:"row", gap:5}}>
               
                <Image source={require('./images/sidearrow.png')} style={{marginRight:20,}}></Image>
                
                <Text style={{color:"#FFFFFF", fontSize:20, fontWeight:"bold"}}>Text Mode</Text>
                <Image source={require('./images/mesicon.png')}></Image>
                </View>
            </View>
            <View style={styles.content}>
                <TextInput placeholder='Type here...' style={styles.textbox} textAlignVertical="top"/>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color:"#FFFFFF",fontSize:14,fontWeight:"bold"}}>Convert to Audio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color:"#FFFFFF",fontSize:14,fontWeight:"bold"}}>Display Text</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.overlay, {paddingTop: insets.top,paddingBottom: insets.bottom,paddingLeft: insets.left,paddingRight: insets.right,}]}>
                <View style={styles.audiobox}>
                    <TouchableOpacity style={styles.cancel} onPress={navigateBack}>
                    <Image source={require('./images/cancel.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={{width:"100%", fontSize:20, fontWeight:"bold", color:"#FFFFFF"}}>Hello, I am Steve.</Text>
                    <Image source={require('./images/sound.png')} style={styles.sound}></Image>
                    <Image source={require('./images/play.png')} style={styles.play}></Image>
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
        height:"100%",
        backgroundColor:"#ECECEC",
        alignItems:"center",
        padding:15,
    },
    textbox:{
        width:"100%",
        height:"70%",
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        padding:10,
    },
    btns:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-around",
    },
    btn:{
        backgroundColor:"#FE8A01",
        width:135,
        height:45,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
        zIndex: 999, // Higher zIndex to ensure it overlays other elements
        justifyContent:"center",
        alignItems:"center",
    },
    audiobox:{
        borderWidth:2,
        borderColor:"#FE8A01",
        borderRadius:10,
        backgroundColor:"#FFB24E",
        width:"90%",
        height:"78%",
        alignItems:"center",
        padding:20,
    },
    cancel:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-end",
    },
    sound:{
        marginTop:80,
    },
    play:{
        marginTop:60,
    },
});