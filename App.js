import React,{Component} from 'react';
import {View,Text,StyleSheet, SafeAreaView,Button, Alert} from 'react-native';
 
export default class App extends Component
{
  render()
  {
    return(
      <SafeAreaView style={styles.container1}>
      <View style={styles.container}>
      <View >
        <Text>
          Welcome to My World
        </Text>
        </View>
        <View>
        <Text>
         Prakash Pandey
        </Text>
        </View>
       <Button title="Next" onclick={alert("Best person in world")}/>
        </View>
     <View style={styles.body}>

        </View>
    </SafeAreaView>
);
      }
}
const styles=StyleSheet.create({
  container1:{
    flex:1,
    //justifyContent:'center',
    //alignItems:'center',
    //backgroundColor:"purple"
  },
  container:{
  flex:0.3,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:"purple"
},
body:{
  backgroundColor:'black',
  flex:0.7
}
});