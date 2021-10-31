import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import Products from '../components/products';


const Home =({ navigation })=>{
    return(
        <View style={styles.cont}>

            <View style={styles.txtV}>
                <Text style={styles.txt}>Popular</Text>
            </View>

           <Products />
           
        </View>
        
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
        top:20,
        left:20,
        fontSize:30,
        
    
    },
    txt:{
        fontSize:30,
        fontWeight:"800",
    },
    
    stretch:{
        borderColor:"#b7b7a4",
        borderWidth:1,
        borderRadius:5
    },
    img:{
        width:100,
        height:100,
    }
  });
export default Home;