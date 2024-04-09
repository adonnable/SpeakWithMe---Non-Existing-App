import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,Text, ImageBackground, Platform} from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  

export default function Signin({ navigation }) {
    const insets = useSafeAreaInsets();

    const navigateToCreate = () => {
        navigation.navigate('Acct');
    };

    const navigateToHome = () => {
        navigation.navigate('HS');
    };


    return (
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,paddingLeft: insets.left,paddingRight: insets.right,}]}>
            <ImageBackground source={require('./images/bg.png')} style={styles.backgroundImage}>
                <View style={styles.innercontent}>
                    <Image source={require('./images/speakwithme.png')} style={{width:120,resizeMode:"contain", marginTop:20}}></Image>
                    <View style={{marginTop:35,}}>
                        <Image source={require('./images/Hello.png')} style={{width:120, resizeMode:"contain", marginLeft:10,}}></Image>
                        <Text style={{color:"#FFFFFF", fontWeight:"bold", fontSize:14,marginLeft:10,}}>Sign in to your account</Text>

                        <TextInput style={styles.textInput1} placeholder="Email Address"/>
                        <TextInput style={styles.textInput2} placeholder="Password" secureTextEntry={true}/>
                        <Text style={styles.forgot}>Forgot your password?</Text>

                        <View style={{width:"100%", justifyContent:"center", alignItems:"center", marginTop:100,}}>
                            <TouchableOpacity onPress={navigateToHome}>
                                <ImageBackground source={require('./images/button.png')} style={styles.btn}>
                                    <Text style={{color:"#FFFFFF", fontWeight:"bold", fontSize:18,}}>SIGN IN</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        <View style={{width:"100%", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:5, marginTop:50,}}>
                            <Text style={{color:"#FFFFFF", fontWeight:"bold"}}>Don't have an account?</Text>
                            <TouchableOpacity onPress={navigateToCreate}>
                                <Text style={{color:"#8A2B03", fontWeight:"bold", textDecorationLine:"underline"}}>Create</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backgroundImage:{
        flex:1,
        width:"100%",
        height:"100%",
    },
    innercontent:{
        width:"100%",
        height:"100%",
        padding:20,
        backgroundColor:"transparent", 
        flexDirection:"column", 
    },
    textInput1: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.10, 
        shadowRadius: 50, 
        elevation: Platform.OS === 'android' ? 4 : 0, 
        paddingLeft:20,
        marginTop:50,
    },
    textInput2: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.10, 
        shadowRadius: 50, 
        elevation: Platform.OS === 'android' ? 4 : 0, 
        paddingLeft:20,
        marginTop:15,
    },
    forgot:{
        color:"#FFFFFF",
        fontSize:13,
        textDecorationLine: 'underline',
        fontWeight:"bold",
        textAlign:"right",
        marginTop:5,
        marginRight:20,
    },
    btn:{
        width:210,
        height:60,
        alignItems:"center",
        paddingTop:13,
    },
});