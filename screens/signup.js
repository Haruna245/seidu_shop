import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,color } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const Signup=({ navigation })=>{
        return(
            <View style={styles.signupWraper} >

        <TouchableOpacity style={{position:"absolute",top:10,left:10}}
        onPress = {()=> navigation.goBack()}
        >
        <MaterialCommunityIcons name="arrow-left" style={styles.arrow} color={color} size={30} />
        </TouchableOpacity>
        

                <View style={styles.stlt}>
            <Text style={styles.stxt}>Signup</Text>
            </View>
            
            <View style={styles.sview}>

            <TextInput style={styles.suser} placeholder="Firstname"/>
            <TextInput style={styles.suser} placeholder="Lastname"/>
            <TextInput style={styles.suser} placeholder="email"/>
            <TextInput style={styles.suser} placeholder="password"/>
            <TextInput style={styles.suser} placeholder="Confirm password"/>

            <TouchableOpacity style={{marginTop:10,borderWidth:1,height:30,width:100,left:100,
            justifyContent:"center",alignItems:"center",borderRadius:10,backgroundColor:"#edf2fb",}} 
            onPress = {()=> navigation.navigate('Login')}
            >
                    <Text>Submit</Text>
                </TouchableOpacity>

            
            </View>
            </View>

        )

};

const styles = StyleSheet.create({
    signupWraper: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e5e5e5',
      },
      suser:{
        borderWidth:1,
        paddingTop:10,
        marginTop:10,
        width:300,
        borderRadius:10,
        height:40,
        display:"flex",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor:"#14213d"
      },
      stxt:{
        fontSize:40,
        fontWeight:"500",
        fontFamily:"AppleSDGothicNeo-Bold",
    },
    stlt:{
      position:"absolute",
      top:70
    },
    stouch:{
      
    }
    
});
export default Signup;