import React from 'react';
import {Text,View,StyleSheet} from 'react-native';


const Home =({ navigation })=>{
    return(
        <View style={styles.cont}>
            <Text>
                Hello Seidu
            </Text>

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
  });
export default Home;