import * as React from 'react';
import {  View, Text,TouchableOpacity,ImageBackground, Image,StyleSheet,color, SafeAreaView, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
const Trial =({ navigation,route })=>{
    const data = route.params;
   
    return(
        
        <SafeAreaView style={styles.dwrapper}>
        
        <View style={styles.imgWrap} >
        <Image style={styles.timg} source={data.image}/>

        <TouchableOpacity style={{position:"absolute",}}
        onPress = {()=> navigation.goBack()}
        >
        <MaterialCommunityIcons name="arrow-left" style={styles.arrow} color={color} size={30} />
        </TouchableOpacity>
        </View>
        <View style={styles.textWrapper} >
        <Text style={styles.textWrap}> {data.title}</Text>
        
        <Text style={styles.textW}>GHS {data.price}</Text>
        <Text style={{position:"absolute",bottom:175,fontSize:30,
        fontWeight:"600",
        paddingLeft:25,}} >About </Text>
        <Text style={{fontSize:12,position:"absolute",position:"absolute",
        bottom:130,paddingLeft:15
    
    }}>{data.review}</Text>
        
        <View style={styles.cartWrapper}>
            <TouchableOpacity style={styles.cart} >
                <Text style={{fontSize:20}}>Add to Carts</Text>
                
            </TouchableOpacity>
        </View>
        </View>
        </SafeAreaView>
    )
};

const styles=StyleSheet.create({
    dwrapper:{
        
    },
    timg:{
        height:300,
        width:"100%",
    },
    dtext:{
        position:"absolute",
        top:250,
    },
    textWrapper:{
        borderWidth:2,
        height:350,
        borderRadius:10,
        padding:10,
        
        borderBottomColor:"#e9f5db"
    
       
    },
    textW:{
        fontSize:30,
        fontWeight:"600",
        position:"absolute",
        right:10,
        bottom:200
    },
    textWrap:{
        fontSize:30,
        fontWeight:"600",
        paddingLeft:25,
    },
    imgWrap:{
        
    },
    cart:{
        display:"flex",
        flexDirection:"row",
        borderWidth:3,
        height:50,
        borderRadius:10,
        alignItems:"center",
        backgroundColor:"#b7e4c7",
        justifyContent:"center",
    },
    cartWrapper:{
        position:"absolute",
        bottom:50,
        width:"100%",
        paddingLeft:10,
        marginLeft:10,
        
},
arrow:{
    position:"absolute",
    top:10,
    marginLeft:15
}


})
export default Trial;