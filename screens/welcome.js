import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';




const Welcome =({ navigation })=>{
    return(
        <View style={styles.imgCont}>

        <ImageBackground source={require("../assets/img1.jpg")} 
        style={{height:"100%", width:"100%",position:"absolute",resizeMode:"cover"}} 
        
  
        />
  
        <View style={styles.tlt}>
        <Text style={styles.title} >
          Welcome to
        </Text>
  
        <Text style={styles.sub}>
          Headphones hub
        </Text>
  
        
  
        </View>

        <View style={styles.signWrapper}>
          <View>
          <TouchableOpacity style={styles.tsgn} 
          onPress = {()=> navigation.navigate('Login')}
          >
            <Text>Sign In</Text>
          </TouchableOpacity>
          </View>

         
        </View>
  
      <View style={styles.Tbtn}>
        <TouchableOpacity style={styles.btn}
        onPress = {()=> navigation.navigate('Home')}
            >
          <Text >Shop now</Text>
        </TouchableOpacity>
        </View>
      </View>
  
    )
}





const styles = StyleSheet.create({
    imgCont:{
        height:"100%",
        width:"100%",
    
      },
      tlt:{
        marginTop:"10%",
        width:"100%",
        
        left:120,
    
      },
      title:{
        fontSize:32,
        fontWeight:"bold",
       color:"#03045e",
      },
      sub:{
        fontSize:20,
        color:"#03045e"
      },
      btn:{
        
        borderWidth:2,
        width:150,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        backgroundColor:"#f6f4d2"
      },
      Tbtn:{
        position:"absolute",
        bottom:20,
        right:20,
         },
         signWrapper:{
          position:"absolute",
         left:130,
          flex:1,
           top:115,
         },
         tsgn:{
          borderWidth:2, 
          alignItems:"center",
        justifyContent:"center",
          width:"270%",
          height:40,
          borderRadius:10,
          marginTop:15,
          backgroundColor:'#ede0d4'
         }


});

export default Welcome;