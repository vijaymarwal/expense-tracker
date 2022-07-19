import React from 'react';
import { ImageBackground, Text, View, SafeAreaView, StyleSheet,Image, TouchableOpacity,StatusBar } from 'react-native';


const Onboarding = ({}) => {
    
  return (
    
    <SafeAreaView style={{flex:1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <View >
            <ImageBackground style={{height:600,width:414,top:-30}} source={require('../assets/images/backex.png')}>
               <View style={{height:461.93,width:277.05,top:126.91,left:61.03}}>
                <Image source={require('../assets/images/Man.png')}></Image>
                <Image style={{bottom:400.6,left:207.33}} source={require('../assets/images/Donut.png')}></Image>
                <Image style={{bottom:540.6}} source={require('../assets/images/Coint.png')}></Image>
               </View>
                
            </ImageBackground>
            <View style={{justifyContent:'center',alignItems:'center',top:-30}}>

            <Text style={s.spend}>Spend Smarter</Text>
            <Text style={s.spend}>Save More</Text>

            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{height:64,width:358,backgroundColor:'#3F8782',borderRadius:40,justifyContent:'center',alignItems:'center',top:-20}}>
                <Text style={{fontSize:18,color:'white'}}>Get Started</Text>
            </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:14,bottom:15}}>Allready Have Account?<Text style={{color:'#3F8782'}}>Login</Text></Text>
            </View>
            
            
            
        </View>
        
    </SafeAreaView>
   
  );
};

const s = StyleSheet.create({

    man:
    {
        top:126.91,
        width:277.05,
        height:461.93,
        left:50
    },
    spend:
    {
        color:'#438883',
        fontSize:36,
        fontWeight:'700'

    }
 
});

export default Onboarding;