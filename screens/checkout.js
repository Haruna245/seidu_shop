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
        <View style={{position:"absolute",top:120}}>
        <Text style={{fontSize:32,fontWeight:"500",fontFamily: "Baskerville",
            color:"#272640"
        }}>Billing info</Text>
        </View>
        <View style={{marginTop:10}}>
        <TextInput style={styles.textinput} placeholder="Full name "/>
            <TextInput style={styles.textinput} placeholder="Address"/>
            <TextInput style={styles.textinput} placeholder="Phone"/>
            <TextInput style={styles.textinput} placeholder="Email"/>
            <TextInput style={styles.textinput} placeholder="Creditcard Number"/>
            <TextInput style={styles.textinput} placeholder="Credit exp.date"/>
        
            </View>
            
            
            <View style={{position:"absolute",bottom:50}}>
                <TouchableOpacity style={{borderWidth:2,height:40,width:200,justifyContent:"center",
                alignItems:"center",borderRadius:10,backgroundColor:"#6c757d"
            }}  onPress = {()=> alert("Payment Successful")}>
                    <Text style={{color:"#fff",fontFamily: "Baskerville"}}>Check out</Text>
                </TouchableOpacity>
            </View>
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