import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';


const Login =({ navigation })=>{

    return(

        <View style={styles.mlog}>

       
            
            <View style={styles.ltlt}>
            <Text style={styles.ltxt}>Login</Text>
            </View>
            
            <View style={styles.lview}>

            <TextInput style={styles.luser} placeholder="username,email"/>
            <TextInput style={styles.luser} placeholder="passwpord"/>

            <TouchableOpacity style={styles.topa}>
                    <Text>Sign in</Text>
                </TouchableOpacity>

            </View>
            
            <View style={styles.lsup}>
                <Text>Don't have an account yet?</Text>
                <TouchableOpacity style={styles.topa}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>

            </View>
            


        </View>

    )

};

const styles = StyleSheet.create({

    mlog:{
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    luser:{
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
    lview:{
        justifyContent: 'center',
        position:"absolute",
        top:200
       
    },
    ltlt:{
        position:"absolute",
        top:120
    },
    ltxt:{
        fontSize:40,
        fontWeight:"500",
        fontFamily:"AppleSDGothicNeo-Bold"
    },
    lsup:{
        position:"absolute",
        bottom:70
    },
    topa:{
        borderWidth:1,
        marginTop:15,
        height:40,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#edf2fb"
    }


});





export default Login;