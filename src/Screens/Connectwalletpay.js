import { SafeAreaView, StyleSheet, Text, View, StatusBar, ImageBackground, Image, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'

const Connectwalletpay = () => {
    return (
        <SafeAreaView>


            <StatusBar translucent backgroundColor="transparent" />

            <View style={{ width: '100%' }}>
                <ImageBackground style={{ height: 287, width: 414 }} source={require('../assets/images/homepaged.png')}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/images/roundone.png')}></Image>
                        <Image style={{ right: 120 }} source={require('../assets/images/roundtwo.png')}></Image>
                        <Image style={{ right: 202 }} source={require('../assets/images/roundthree.png')}></Image>
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', bottom: 120 }}>
                        <Image style={{ top: 5 }} source={require('../assets/images/backback.png')} ></Image>
                        <Text style={{ color: 'white', fontSize: 18 }}>Connect Wallet</Text>
                        <Image style={{ right: 20, top: -5 }} source={require('../assets/images/belll.png')}></Image>
                    </View>

                    <View style={{ height: 731, width: 395, backgroundColor: 'white', borderRadius: 40, top: -80 }}>

                        <View style={{ height: 48, width: 320, backgroundColor: '#F4F7F6', left: 35, top: 20, borderRadius: 40, justifyContent: 'center', flexDirection: 'row' }}>

                            <TouchableOpacity style={{ width: 150, height: 40, borderRadius: 40, justifyContent: 'center', backgroundColor: 'white', alignItems: 'center', top: 4 }}>
                                <Text style={{ color: 'black' }}>Cards</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 150, height: 40, borderRadius: 40, left: 5, justifyContent: 'center', alignItems: 'center', top: 4 }}>
                                <Text style={{ color: 'black' }}>Accounts</Text>
                            </TouchableOpacity>


                        </View>

                        <View>
                            <View style={styles.cardone}>
                                <ImageBackground style={{height:209,width:324}} source={require('../assets/images/Effects.png')}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,top:24}}>
                                        <View>
                                        <Text style={{color:'white'}}>Debit</Text>
                                        <Text style={{color:'white'}}>Card</Text>
                                        </View>
                                        <Text style={{color:'white',fontSize:14}}>Mono</Text>
                                        
                                    </View>
                                    <Image style={{left:20,top:55}} source={require('../assets/images/chip.png')}></Image>

                                    <View style={{width:277,height:18,left:20,top:80}}>
                                        <Text style={{color:'white'}}>6219              8610              2888            8075</Text>
                                        <View style={{flexDirection:'row',justifyContent:'space-between',top:10}}>
                                            <Text style={{color:'white'}}>IRVAN MOSES</Text>
                                            <Text style={{color:'white'}}>22/01</Text>
                                        </View>

                                    </View>
                                    
                                </ImageBackground >
                                
                            </View>
                            

                        </View>
                        <View style={{left:20,top:93,}}>
                            <Text style={{fontSize:16,color:'black'}}>Add Your debit card</Text>
                            <Text style={{}}>This card must be connected to a bank </Text>
                            <Text>account under your name</Text>

                            

      <View style={{top:10}}>
      
      <TextInput style={styles.input} placeholder="ENTER YOUR NAME"></TextInput> 
      </View>
      <View style={{flexDirection:'row',top:15,}}>

      <TextInput style={styles.inputone} placeholder="DEBIT CARD NUMBER"></TextInput> 
      <TextInput style={styles.inputtwo} placeholder="CVC"></TextInput> 

      </View>

      <View style={{flexDirection:'row',top:20,}}>

      <TextInput style={styles.inputone} placeholder="EXPIRATION MM/YY"></TextInput> 
      <TextInput style={styles.inputtwo} placeholder="ZIP"></TextInput> 

      </View>
      
                        </View>
                    </View>
                </ImageBackground>
                
            </View>
            
        </SafeAreaView>
        
    )
}

export default Connectwalletpay

const styles = StyleSheet.create({

    cardone:
    {
        width:284,
        height:183,
        justifyContent:'center',
        alignItems:'center',
        left:55,
        top:70
    },
    detail:
  {
    
    left:20,
    fontSize:12

  },
  input:
  {
    width:354,
    height:50,
    borderWidth:1,
    top:10,
    paddingHorizontal:20,
    borderColor:'#438883',
  borderRadius:6,
  justifyContent:'space-between'
  },
  inputone:
  {
    width:220,
    height:50,
    borderWidth:1,
    top:10,
    paddingHorizontal:20,
    
  borderRadius:6,
  justifyContent:'space-between'
  },
  inputtwo:
  {
    width:130,
    height:50,
    borderWidth:1,
    top:10,
    paddingHorizontal:20,
    
  borderRadius:6,
  justifyContent:'space-between',
  left:5
  }
})