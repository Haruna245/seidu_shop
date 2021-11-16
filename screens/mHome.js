import * as React from 'react';
import { color, View, Text,TouchableOpacity,ImageBackground, size,FlatList,StyleSheet, TextInput, SafeAreaView } from 'react-native';
import Data from "../components/productdata";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';




const product =({ navigation })=>{
    const Item = ({ data }) =>{ 
    return(
        <TouchableOpacity style={styles.touchWrapper} onPress={() => navigation.navigate("trial",data)}>
          <ImageBackground style={styles.touchimg} source={data.image}/>
          <Text >{data.title}</Text>
          <Text style={{fontSize:10}} >Tap for details</Text>
          <MaterialCommunityIcons name="chevron-right-circle-outline" style={{position:'absolute',right:10,bottom:10}} color={color} size={20} />
        </TouchableOpacity>
      )};
    return(
        <SafeAreaView style={{ flex: 1, position:"absolute" }}>
            <TouchableOpacity style={{position:"absolute",marginBottom:15,top:20,marginLeft:10}}
        onPress = {()=> navigation.goBack()}
        >
        <MaterialCommunityIcons name="arrow-left" style={styles.arrow} color={color} size={30} />
        </TouchableOpacity>
       

            <View style={styles.txtWrapper}><Text style={styles.txtf}>Products</Text></View>

            <View style={styles.inputWrapper}>
            <Text> <Icon name="search-outline" size={30} color={color} /></Text>
                <TextInput placeholder="enter" style={{ height:35,padding:5,width:300}} />
            </View>
            <View style={styles.flatWrapper}>
            <FlatList data={Data} numColumns={2}
            renderItem={({item})=><Item data={item} />}

            keyExtractor={item=>item.id}
            />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    touchWrapper:{ //container for the products
        borderWidth:1,
        borderRadius:10,
        margin:10,
        marginTop:30,
        height:170,
        width:155,
       
       padding:5,
       
    },
    touchimg:{ // styling for the product image
        height:120,
        borderRadius:10,
        width:146,
    },
    txtWrapper:{
        marginTop:35,
        marginLeft:10,
    },
    inputWrapper:{
        flex:1,
        flexDirection:"row",
        marginTop:20,
        marginLeft:20,
        borderWidth:2,
        borderRadius:10,
    },
    flatWrapper:{
        marginLeft:15
    },
    txtf:{ //it style the product title
        fontSize:40,
        fontWeight:"500",
    }

})
export default product;