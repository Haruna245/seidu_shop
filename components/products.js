import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image,FlatList, ScrollView, Dimensions} from 'react-native';
import Productsdata from './productdata';
import Categorydata from './categorydata';




const Products=()=>{
    const renderItem = ({ item }) => (
        <View style={[styles.touchWrapper,{marginLeft: item.id ==1?20:0}]} >
        <TouchableOpacity style={styles.touch}>
        <Image style={styles.img} source={item.image} />
        <Text style={styles.txtF}>{item.title}</Text>
        <Text style={styles.txtF}>price: GHS {item.price}</Text>
        </TouchableOpacity>

        
        </View>
      );

      

    return(
        
        <View style={styles.mview}>
            
            <FlatList
        data={Productsdata}
        renderItem={renderItem}
        horizontal = {true}
        keyExtractor={item => item.id}
      />

        
        <View style={{position:"absolute", top:287,left:20}}>
                <Text style={styles.txtp}>Categories</Text>  
                 <View style={{display:"flex",flexDirection:"row",alignContent:"space-between",marginTop:10}}>
                <TouchableOpacity style={{paddingBottom:5}} >
                <Image style={styles.timg} source={require("../assets/pics/p1.jpg")}/>
                <Text style={styles.txtF}>wireless Headphone</Text>
                <Text style={styles.txtF}>price: GHS 80</Text>

                </TouchableOpacity >
                <TouchableOpacity style={{paddingBottom:5,paddingHorizontal:15,marginLeft:25,}} >
                <Image style={styles.timg} source={require("../assets/pics/p3.jpg")}/>
                <Text style={styles.txtF}>wireless Headphone</Text>
                <Text style={styles.txtF}>price: GHS 50</Text>

                </TouchableOpacity>
                </View>
                <View style={{display:"flex",flexDirection:"row",paddingBottom:15}}>
                <TouchableOpacity style={{paddingBottom:15,}} >
                <Image style={styles.timg} source={require("../assets/pics/im1.jpg")}/>
                <Text style={styles.txtF}>wireless Headphone</Text>
                <Text style={styles.txtF}>price: GHS 70</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{paddingBottom:15,paddingHorizontal:15,marginLeft:25}} >
                <Image style={styles.timg} source={require("../assets/pics/p5.jpg")}/>
                <Text style={styles.txtF}>wireless Headphone</Text>
                <Text style={styles.txtF}>price: GHS 60</Text>

                </TouchableOpacity>
                </View>





               

                 
         </View>

         

    </View> 
          
    )
}

const styles = StyleSheet.create({

    touchWrapper:{
        marginTop:55,
        paddingTop:10,
        marginRight:20,
       
    },
    mview:{
    
    },
    touch:{
      
    
        backgroundColor:"#e8e8e4",
        borderRadius:10,
        

    },
    stretch:{
        borderColor:"#b7b7a4",
        borderWidth:1,
        borderRadius:5,
        
        
    },
    img:{
        width:120,
        height:150,
        borderRadius:10,
    },
    txtF:{
        margin:5
    },
    txtp:{
        fontSize:30,
        fontWeight:"800",
    },
    catWrap:{
       paddingTop:15
       
    },
    timg:{
        width:100,
        height:100,
    }

});

export default Products;