import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,Text, ImageBackground,Alert, ToastAndroid} from 'react-native';
import 'react-native-gesture-handler';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  

export default function Home({ navigation }) {
    const insets = useSafeAreaInsets();

    const LogOutToast = () => {
        console.log("Log out Toast is clicked...");
        ToastAndroid.show("Successfully Sign Out", ToastAndroid.SHORT); 
    }

    const TextModeToast = () => {
        console.log("Text Mode Toast is clicked...");
        ToastAndroid.show("You are now in the Text Mode.", ToastAndroid.SHORT); 
    }

    const AudioModeToast = () => {
        console.log("Text Mode Toast is clicked...");
        ToastAndroid.show("You are now in the Audio Mode.", ToastAndroid.SHORT); 
    }

    const EmerModeToast = () => {
        console.log("Text Mode Toast is clicked...");
        ToastAndroid.show("You are now in the Emergency Mode.", ToastAndroid.SHORT); 
    }

    const TextModeAlert = () => {
        Alert.alert(
          'Text Mode',
          'Confirm to proceed Text Mode',
          [
            {
                text: 'No',
                onPress: () => {
                  console.log('No Pressed');
                }
            },

            {
              text: 'Yes',         
              onPress: () => {
                navigation.navigate('Text');
                TextModeToast();
              }
            },         
          ]
        );
    };

    const AudioModeAlert = () => {
        Alert.alert(
          'Audio Mode',
          'Confirm to proceed Audio Mode',
          [
            {
                text: 'No',
                onPress: () => {
                  console.log('No Pressed');
                }
            },

            {
              text: 'Yes',         
              onPress: () => {
                navigation.navigate('AudMode');
                AudioModeToast();
              }
            },         
          ]
        );
    };

    const EmerModeAlert = () => {
        Alert.alert(
          'Emergency Mode',
          'Confirm to proceed Emergency Mode',
          [
            {
                text: 'No',
                onPress: () => {
                  console.log('No Pressed');
                }
            },

            {
              text: 'Yes',         
              onPress: () => {
                navigation.navigate('Emer');
                EmerModeToast()
              }
            },         
          ]
        );
    };

    const LogOut = () => {
        Alert.alert(
          'Sign Out',
          'Confirm to Sign Out',
          [
            {
                text: 'No',
                onPress: () => {
                  console.log('No Pressed');
                }
            },

            {
              text: 'Yes',         
              onPress: () => {
                navigation.navigate('In');
                LogOutToast();
              }
            },         
          ]
        );
    };


    return (
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,paddingLeft: insets.left,paddingRight: insets.right,}]}>
            <ImageBackground source={require('./images/bg2.png')} style={styles.backgroundImage}>
                <View style={styles.innercontent}>
                    <View style={{flexDirection:"row", justifyContent:"space-between", paddingLeft:15, paddingRight:15,paddingTop:20,paddingBottom:15,}}>
                        <Image source={require('./images/person.png')} style={{width:95,resizeMode:"contain", marginTop:20, marginRight:5}}></Image>
                        <View style={{flexDirection:"column",marginTop:30}}>
                            <Text style={{fontSize:24, fontWeight:"bold", marginLeft:5,}}>Hi Steve!</Text>
                            <View style={{flexDirection:"row",}}>
                                <TouchableOpacity onPress={TextModeAlert}>
                                    <Image source={require('./images/message.png')} style={{width:60,resizeMode:"contain"}}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={AudioModeAlert}>
                                    <Image source={require('./images/audio.png')} style={{width:60,resizeMode:"contain"}}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={EmerModeAlert}>
                                    <Image source={require('./images/emergency.png')} style={{width:60,resizeMode:"contain"}}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={LogOut}>
                                    <Image source={require('./images/LogOut.png')} style={{width:60,resizeMode:"contain"}}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mywords}>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={{fontSize:20, fontWeight:"bold"}}>My Words</Text>
                            <View style={{flexDirection:"row",gap:10}}>
                                <Image source={require('./images/plus.png')}></Image>
                                <Image source={require('./images/delete.png')} ></Image>
                            </View>
                        </View>

                        <ScrollView style={{ paddingTop:10,paddingBottom:10}}>
                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> I am Steve</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> Help!</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> What is your name?</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> Hi</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> How are you?</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> Thank you</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> I love you</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> It's good to see you</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> It is delicious</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> Mhhmn...</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> Nice</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> Goodbye</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>

                            <ImageBackground source={require('./images/Rectangle.png')} style={styles.rec}>
                                <Text style={{fontSize:16,}}> Hahahaha</Text>
                                <Image source={require('./images/edit.png')} style={{width:25,height:25, resizeMode:"contain"}}></Image>
                            </ImageBackground>
                        </ScrollView>
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
        backgroundColor:"transparent", 
        flexDirection:"column", 
    },
    mywords:{
        width:"100%",
        height:"100%",
        backgroundColor:"#FFFFFF",
        paddingLeft:15, paddingRight:15,paddingTop:20,paddingBottom:15,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
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