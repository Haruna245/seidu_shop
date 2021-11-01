import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image, ScrollView,SafeAreaView} from 'react-native';
import Products from '../components/products';


const Home =({ navigation })=>{
    return(
        <SafeAreaView style={styles.cont}>
            <ScrollView contentInsetAdjustmentBehavior="automatic"  style={{ height: '100%'}}>
            <View style={styles.txtV}>
                <Text style={styles.txt}>Popular</Text>
            </View>

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
    },
    
  });
export default Home;