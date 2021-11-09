import * as React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity  onPress = {()=> navigation.navigate('Login')}>
                    <Text>Submit</Text>
                </TouchableOpacity>
      
    </View>
  );
}



