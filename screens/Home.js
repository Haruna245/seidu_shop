import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image, ScrollView,SafeAreaView,Dimensions, TextInput} from 'react-native';
import Products from '../components/products';


const Home =({ navigation })=>{
    return(
        <SafeAreaView style={styles.cont}>
           <ScrollView style={{flex:1}}>
            

           <Products />

           </ScrollView>
           
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    cont: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txtV:{
        position:"absolute",
        top:15,
        left:20,
        fontSize:30,
        marginLeft:25,
        
        
    },
    txt:{
        borderWidth:1,
        height:30,
        width:300,
        borderRadius:10,
        marginBottom:10,
        backgroundColor:"#d8e2dc",
        alignContent: 'center',
        justifyContent:"center"
        
    
    },
    
    stretch:{
        borderColor:"#b7b7a4",
        borderWidth:1,
        borderRadius:5
    },
    img:{
        width:100,
        height:Dimensions.get('window').height,
    },
    
  });
export default Home;