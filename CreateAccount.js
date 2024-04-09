import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ImageBackground, Platform } from 'react-native';
import { TextInput } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Create({ navigation }) {
    const insets = useSafeAreaInsets();
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const navigateToSignin = () => {
        navigation.navigate('In');
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right }]}>
            <ImageBackground source={require('./images/bg.png')} style={styles.backgroundImage}>
                <View style={styles.innercontent}>
                    <Image source={require('./images/speakwithme.png')} style={{ width: 120, resizeMode: "contain", marginTop: 10, }}></Image>

                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 5, }}>
                        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Already have an account?</Text>
                        <TouchableOpacity onPress={navigateToSignin}>
                            <Text style={{ color: "#8A2B03", fontWeight: "bold", textDecorationLine: "underline" }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TextInput style={styles.textInput1} placeholder="First Name" />
                        <TextInput style={styles.textInput2} placeholder="Last Name" />
                        <TextInput style={styles.textInput2} placeholder="Email Address" />
                        <TextInput style={styles.textInput2} placeholder="Mobile Number" />
                        <TextInput style={styles.textInput2} placeholder="Password" secureTextEntry={true} />

                        <View style={{flexDirection:"row", gap:10,marginTop:10,marginLeft:10,}}>
                            <TouchableOpacity onPress={handleToggle} style={[styles.checkBox, isChecked ? styles.checkedBox : null]}>
                                {isChecked && <View style={styles.checkBoxIcon}></View>}
                            </TouchableOpacity>
                            <Text style={{color:"#FFFFFF", fontSize:13,fontWeight:"bold"}}>I accept all the terms & conditions  </Text>
                        </View>

                        <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: 50, justifyContent:"center", alignItems:"center", }}>
                            <TouchableOpacity onPress={navigateToSignin}>
                                <ImageBackground source={require('./images/button.png')} style={styles.btn}>
                                    <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 18, }}>SIGN UP</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        <View style={{width:"100%", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:10, marginTop:15,}}>
                            <Text style={{color:"#FFFFFF", fontWeight:"bold",fontSize:13}}>Or create account using social media</Text>
                            <Image source={require('./images/socialmedia.png')} style={{ width: 130, resizeMode: "contain", marginTop: 5,}}></Image>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    innercontent: {
        width: "100%",
        height: "100%",
        padding: 20,
        backgroundColor: "transparent",
        flexDirection: "column",
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
        paddingLeft: 20,
        marginTop: 25,
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
        paddingLeft: 20,
        marginTop: 15,
    },
    btn: {
        width: 210,
        height: 60,
        alignItems: "center",
        paddingTop: 13,
    },
    checkBox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:"#FFFFFF",
    },
    checkedBox: {
        backgroundColor: '#3f7ce0', 
    },
    checkBoxIcon: {
        width: 5,
        height: 5,
        backgroundColor: '#FFFFFF', 
        borderRadius: 2,
    },
});
