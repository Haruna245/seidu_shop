import * as React from 'react';
import { Button, View, Text,TouchableOpacity,ImageBackground, Image,FlatList,StyleSheet, TextInput } from 'react-native';
import Data from "../components/productdata";




const product =({ navigation })=>{
    const Item = ({ data }) =>{ 
    return(
        <TouchableOpacity style={styles.touchWrapper} onPress={() => navigation.navigate("trial",data)}>
          <ImageBackground style={styles.touchimg} source={data.image}/>
          <Text >{data.title}</Text>
          <Text style={{fontSize:10}} >Tap for details</Text>
        </TouchableOpacity>
      )};
    return(
        <View style={{ flex: 1, position:"absolute" }}>
            <View style={styles.txtWrapper}><Text style={styles.txtf}>Products</Text></View>
            <View style={styles.inputWrapper}>
                <TextInput placeholder="enter" style={{borderWidth:2, height:35,
                borderRadius:10,padding:5}} />
            </View>
            <View style={styles.flatWrapper}>
            <FlatList data={Data} numColumns={2}
            renderItem={({item})=><Item data={item} />}

            keyExtractor={item=>item.id}
            />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    touchWrapper:{
        borderWidth:2,
        borderRadius:10,
        margin:10,
        height:200,
        width:155,
       marginTop:50,
       padding:5,
       
    },
    touchimg:{
        height:120,
        borderRadius:10,
        width:146,
    },
    txtWrapper:{
        marginTop:20,
        marginLeft:10,
    },
    inputWrapper:{
        marginTop:20,
        marginLeft:20,
        
    },
    flatWrapper:{
        marginLeft:15
    },
    txtf:{
        fontSize:40,
        fontWeight:"500",
    }

})
export default product;