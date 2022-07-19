import { View, Text ,SafeAreaView,StatusBar,ImageBackground,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const Connectwalletaccounts = () => {
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

                <TouchableOpacity style={{ width: 150, height: 40, borderRadius: 40, justifyContent: 'center', alignItems: 'center', top: 4 }}>
                    <Text style={{ color: 'black' }}>Cards</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 150, height: 40, borderRadius: 40, left: 5, justifyContent: 'center', alignItems: 'center', top: 4, backgroundColor: 'white' }}>
                    <Text style={{ color: 'black' }}>Accounts</Text>
                </TouchableOpacity>


            </View>
            <View style={{paddingHorizontal:25,top:50}}>
                <TouchableOpacity style={{width:344,height:100,backgroundColor: 'rgba(67, 136, 131, 0.1)',borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                    <Image style={{left:20}} source={require('../assets/images/banklogo.png')}></Image>
                    <View>
                    <Text style={{left:35,fontSize:18,color:'#438883',fontWeight:'500'}}>Bank Link</Text>
                    <Text style={{left:35,fontSize:12,color:'#438883'}}>Connect your bank </Text>
                    <Text style={{left:35,fontSize:12,color:'#438883'}}>account to deposit & fund</Text>
                    </View>
                    <Image style={{left:95}} source={require('../assets/images/checkcircle.png')}></Image>
                    


                </TouchableOpacity>
            </View>

            <View style={{paddingHorizontal:25,top:70}}>
                <TouchableOpacity style={{width:344,height:100,backgroundColor: '#FAFAFA',borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                    <Image style={{left:30}} source={require('../assets/images/currencycircle.png')}></Image>
                    <View>
                    <Text style={{left:57,fontSize:18,fontWeight:'500'}}>Microdeposits</Text>
                    <Text style={{left:57,fontSize:12,}}>Connect bank in 5-7 days </Text>
                    
                    </View>
                    
                    


                </TouchableOpacity>
            </View>

            <View style={{paddingHorizontal:25,top:90}}>
                <TouchableOpacity style={{width:344,height:100,backgroundColor: '#FAFAFA',borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                    <Image style={{left:30}} source={require('../assets/images/paypal.png')}></Image>
                    <View>
                    <Text style={{left:57,fontSize:18,fontWeight:'500'}}>Paypal</Text>
                    <Text style={{left:57,fontSize:12,}}>Connect your paypal account </Text>
                    
                    </View>
                    
                    


                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{width:350,height:60,borderWidth:1,borderColor:'#549994',borderRadius:40,left:22,top:150,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'#549994'}}>Next</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
            </View>


    </SafeAreaView>
  )
}

export default Connectwalletaccounts