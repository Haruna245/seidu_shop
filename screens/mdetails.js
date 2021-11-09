import * as React from 'react';
import { Button, View, Text,TouchableOpacity,ImageBackground, Image,StyleSheet } from 'react-native';


const Trial =({ navigation,route })=>{
    const data = route.params;
   
    return(
        <View style={styles.dwrapper}>
        <Text style={{margin:10,fontSize:20}}>Detail</Text>
        <View style={styles.imgWrap} >
        <ImageBackground style={styles.timg} source={data.image}/>
        </View>
        <View style={styles.textWrap} >
        <Text style={styles.textWrap}>Title: {data.title}</Text>
        <Text style={styles.textWrap}>Price: {data.price}</Text>
        <Text style={styles.textWrap}>Review: {data.review}</Text>
        </View>
        <View style={styles.cartWrapper}>
            <TouchableOpacity style={styles.cart} >
                <Text style={{fontSize:20}}>Add to Carts</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
};

const styles=StyleSheet.create({
    dwrapper:{
        margin:10
    },
    timg:{
        height:300,
        width:"90%",
    },
    dtext:{
        position:"absolute",
        top:250
    },
    textWrap:{
        fontSize:20,
    },
    imgWrap:{
        marginBottom:10
    },
    cart:{
        borderWidth:3,
        height:50,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
    },
    cartWrapper:{
        position:"absolute",
        top:500,
        width:"100%",
        
        
    }

})
export default Trial;