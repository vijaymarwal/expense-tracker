import { View, Text,SafeAreaView, ImageBackground ,StatusBar,Image,StyleSheet,TextInput,TouchableOpacity,ScrollView,} from 'react-native'
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'






const Addexpence = () => {
  

  
    
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#E5E5E5'}}>

<StatusBar translucent backgroundColor="transparent" />

<View style={{width:'100%'}}>
<ImageBackground style={{height:287,width:414}} source={require('../assets/images/homepaged.png')}>
    <View style={{flexDirection:'row'}}>
    <Image source={require('../assets/images/roundone.png')}></Image>
    <Image style={{right:120}} source={require('../assets/images/roundtwo.png')}></Image>
    <Image style={{right:202}} source={require('../assets/images/roundthree.png')}></Image>
    </View>
    <View style={{flexDirection:'row',paddingHorizontal:20,justifyContent:'space-between',bottom:120}}>
        <Image style={{top:5}} source={require('../assets/images/backback.png')} ></Image>
        <Text style={{color:'white',fontSize:18}}>Add Expense</Text>
        <Image style={{right:20,top:10}} source={require('../assets/images/dotts.png')}></Image>
    </View>
    </ImageBackground>
    </View>

    <View style={{height:800,width:335,backgroundColor:'white',bottom:120,left:28,borderRadius:20}}>
    
    

<View style={{top:30}}>
<Text style={s.detail}>NAME</Text>
<TextInput style={s.input} placeholder="name"
 
></TextInput> 
</View>

<View style={{top:70}}>
<Text style={s.detail}>AMOUNT</Text>
<TextInput style={s.input} placeholder="Amount" keyboardType="numeric" 

></TextInput> 
</View>

<View style={{top:110}}>
<Text style={s.detail}>DATE</Text>
<TextInput style={s.input} placeholder="Date" keyboardType="numeric" 
></TextInput> 
</View>

<View style={{top:140}}>
<Text style={s.detail}>INVOICE</Text>
<TouchableOpacity style={s.inputtwo}  
  >
  <Image source={require('../assets/images/plustwo.png')}></Image>
  <Text style={{left:14}}>ADD INVOICE</Text></TouchableOpacity> 
</View>








    

    </View>
    

    </SafeAreaView>


  )
};

const s = StyleSheet.create({

  detail:
  {
    
    left:20,
    fontSize:12

  },
  input:
  {
    width:298,
    height:50,
    borderWidth:1,
    top:10,
    paddingHorizontal:20,
    left:20,
  borderRadius:6,
  justifyContent:'space-between'
  },
  inputtwo:
  {
    width:298,
    height:50,
    borderWidth:1,
    top:10,
    paddingHorizontal:20,
    left:20,
  borderRadius:6,
  justifyContent:'center',
  borderStyle:'dashed',
  alignItems:'center',
  flexDirection:'row',
  
  }

});

export default Addexpence;