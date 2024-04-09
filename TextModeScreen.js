import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,Text, ImageBackground, Platform} from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  

export default function TextMode({ navigation }) {
    const insets = useSafeAreaInsets();

    const navigateToConvertAudio = () => {
        navigation.navigate('Aud');
    };

    const navigateToMessage = () => {
        navigation.navigate('Mess');
    };

    const navigateBack = () => {
        navigation.navigate('HS');
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,paddingLeft: insets.left,paddingRight: insets.right,}]}>
            <View style={styles.header}>
                <View style={{flexDirection:"row", gap:5}}>
                <TouchableOpacity onPress={navigateBack}>
                    <Image source={require('./images/sidearrow.png')} style={{marginRight:20,}}></Image>
                </TouchableOpacity>
                <Text style={{color:"#FFFFFF", fontSize:20, fontWeight:"bold"}}>Text Mode</Text>
                <Image source={require('./images/mesicon.png')}></Image>
                </View>
            </View>
            <View style={styles.content}>
                <TextInput placeholder='Type here...' style={styles.textbox} textAlignVertical="top"/>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={navigateToConvertAudio}>
                        <Text style={{color:"#FFFFFF",fontSize:14,fontWeight:"bold"}}>Convert to Audio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={navigateToMessage}>
                        <Text style={{color:"#FFFFFF",fontSize:14,fontWeight:"bold"}}>Display Text</Text>
                    </TouchableOpacity>
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
});