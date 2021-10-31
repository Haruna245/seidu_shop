import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native';




const Products=()=>{
    return(
        <View style={styles.touch}>
            <TouchableOpacity style={styles.stretch}>
            <Image style={styles.img}
            source={require('../assets/d1.jpg')}
            />

            <View>
                <Text>Black bluetooth</Text>
                <Text>GHS 90</Text>
            </View>

            
            </TouchableOpacity>
            <View style={{marginLeft:10}} >
            <TouchableOpacity style={styles.stretch}>
            <Image style={styles.img}
            source={require('../assets/hd2.jpg')}
            />

            <View>
                <Text>Black bluetooth</Text>
                <Text>GHS 80</Text>
            </View>
            

            </TouchableOpacity>
            </View>

            <View style={{marginLeft:10}}>
            <TouchableOpacity style={styles.stretch}>
            <Image style={styles.img}
            source={require('../assets/img1.jpg')}
            />

            <View >
                <Text>Black bluetooth</Text>
                <Text>GHS 70</Text>
            </View>


            </TouchableOpacity>
            </View>

           </View>
    )
}

const styles = StyleSheet.create({

    touch:{
        position:"absolute",
        top:75,
        left:30,
        display:"flex",
        flexDirection:"row",
        alignContent:"space-between",
        
       
    
    },
    stretch:{
        borderColor:"#b7b7a4",
        borderWidth:1,
        borderRadius:5,
        backgroundColor:"#e8e8e4",
    },
    img:{
        width:120,
        height:150,
    }

});

export default Products;