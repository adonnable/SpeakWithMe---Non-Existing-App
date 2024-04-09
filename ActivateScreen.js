import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,Text, ImageBackground, Platform} from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  

export default function Active({ navigation }) {
    const insets = useSafeAreaInsets();

    const navigateBack = () => {
        navigation.navigate('Emer');
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,paddingLeft: insets.left,paddingRight: insets.right,}]}>
            <TouchableOpacity style={styles.header} onPress={navigateBack}>
                <Image source={require('./images/sidearrow.png')} style={{marginRight:20,}}></Image>   
            </TouchableOpacity>
            
            <View style={styles.content}>
                <View style={styles.box}>
                    <View style={styles.sendto}>
                        <Text style={{fontWeight:"bold", fontSize:18,}}>Send to:</Text>
                        <View>
                            <Text>Mom / 09345829109</Text>
                            <Text>Macy / 09849201031</Text>
                        </View>
                    </View>
                    <TextInput style={styles.inputText} placeholder='Message...' textAlignVertical="top"/>
                </View>

                <TouchableOpacity style={styles.send} onPress={navigateBack}>
                    <Text style={{color:"#FFFFFF", fontSize:20, fontWeight:"bold"}}>Send</Text>
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
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"100%",
    flex:1,
   },
   box:{
    width:"80%",
    height:"65%",
    borderColor:"#3E3E3E",
    borderWidth:1.5,
    borderRadius:10,
   },
   sendto:{
    width:"100%",
    height:"20%",
    borderBottomColor:"#3E3E3E",
    borderWidth:1.5,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderTopWidth:0,
    padding:10,
    flexDirection:"row",
    gap:10,
   },
    inputText:{
        width:"100%",
        height:"100%",
        padding:20,
    },
    send:{
        backgroundColor:"#A80D03",
        height:50,
        width:160,
        marginTop:20,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
    },
});