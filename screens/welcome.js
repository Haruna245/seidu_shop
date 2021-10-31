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
        marginTop:"15%",
        width:"100%",
        paddingLeft:15,
    
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
        
        
        
      }

});

export default Welcome;