import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,color,TextInput, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const check =({ navigation })=>{

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{position:"absolute",top:30,left:10}}
        onPress = {()=> navigation.goBack()}
        >
        <MaterialCommunityIcons name="arrow-left" style={styles.arrow} color={color} size={30} />
        </TouchableOpacity>
        <View style={{position:"absolute",top:150}}>
        <Text style={{fontSize:30,fontWeight:"400"}}>checkout</Text>
        </View>
        
        <TextInput style={styles.textinput} placeholder="Full name "/>
            <TextInput style={styles.textinput} placeholder="Address"/>
            <TextInput style={styles.textinput} placeholder="Phone"/>
            <TextInput style={styles.textinput} placeholder="Email"/>
        </SafeAreaView>
        
    )

}


const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        },
        textinput:{
            borderWidth:2,
            height:40,
            width:300,
            borderRadius:10,
            marginTop:10,
            margin:5,
            padding:5
        }
})

export default check;