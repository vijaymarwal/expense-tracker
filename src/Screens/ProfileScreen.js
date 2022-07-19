import { View, Text ,StyleSheet,SafeAreaView,StatusBar,ImageBackground,Image,FlatList } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
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
        <Text style={{color:'white',fontSize:18}}>Profile</Text>
        <Image style={{right:20,top:-5}} source={require('../assets/images/belll.png')}></Image>
    </View>

    <View style={{justifyContent:'center',alignItems:'center',top:-15}}>
        <Image style={{backgroundColor:'white',borderRadius:200}} source={require('../assets/images/woman.png')}></Image>
        <Text style={{fontSize:20,color:'black',top:20}}>Enjelin Morgeana</Text>
        <Text style={{top:20,fontSize:14,color:'#438883'}}>@enjelin_morgeana</Text>
    </View>
    </ImageBackground>
    
    </View>

    <View style={s.container}>
      <FlatList

      
        data={[
          {key: 'Invite Friends',vijay:require('../assets/images/diamond.png')},
          {key: 'Account info',vijay:require('../assets/images/userprofile.png')},
          {key: 'Personal profile',vijay:require('../assets/images/userprofiletwo.png')},
          {key: 'Message center',vijay:require('../assets/images/envelop.png')},
          {key: 'Login and security',vijay:require('../assets/images/shield.png')},
          {key: 'Data and privacy',vijay:require('../assets/images/lockkey.png')},
          
        ]}
        renderItem={({item}) => 
        <View style={{flexDirection:'row',paddingHorizontal:20,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',paddingVertical:10}}>
            <Image style={{width:30,height:30,borderRadius:15}} source={item.vijay}  />
            <View style={{left:32.69}}>
            <Text style={{fontSize:16,color:'black'}}>{item.key}</Text>
            
            </View>
            </View>
            
            
        </View>}
      />
      </View>
    

    </SafeAreaView>
  )
};

const s = StyleSheet.create({

    container:
    {
        top:130,
        
    }

})

export default ProfileScreen