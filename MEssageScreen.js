import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,Text, ImageBackground, Platform} from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  

export default function Message({ navigation }) {
    const insets = useSafeAreaInsets();

    const navigateBack = () => {
        navigation.navigate('Text');
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,paddingLeft: insets.left,paddingRight: insets.right,}]}>
            <TouchableOpacity style={styles.header} onPress={navigateBack}>
                <Image source={require('./images/blackarrow.png')} style={{marginRight:20,}}></Image>
            </TouchableOpacity>       
            <Text style={styles.text1}>Hello, I am Steve.</Text>   
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
        flexDirection:"row",
        justifyContent:"flex-start",
        padding:10,
        alignItems:'center',
    },
    text1:{
        fontSize:100,
        padding:20,
    },
   
});