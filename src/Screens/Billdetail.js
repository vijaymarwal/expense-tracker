import { StyleSheet, Text, View ,SafeAreaView,StatusBar,Image,ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'

const Billdetail = () => {
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
            <Text style={{ color: 'white', fontSize: 18 }}>Bill Details</Text>
            <Image style={{ right: 20, top:10 }} source={require('../assets/images/dotts.png')}></Image>
        </View>

        </ImageBackground>
            </View>

        <View style={{ height: 731, width: 395, backgroundColor: 'white', borderRadius: 40, top: -130 }}>

            <View style={{flexDirection:'row',paddingHorizontal:30,paddingVertical:30}}>

                <Image style={{width:80,height:80,borderRadius:40}} source={require('../assets/images/youtubelogo.png')}></Image>
                <View style={{top:17}}>
                    <Text style={{fontSize:18,left:15,color:'black'}}>Youtube Premium</Text>
                    <Text style={{left:15}}>Feb 28, 2022</Text>
                </View>

            </View>
            <View style={{flexDirection:'row',paddingHorizontal:30,justifyContent:'space-between'}}>
                <View>
                    <Text style={styles.detailone}>Price</Text>
                    <Text style={styles.detailone}>Fee</Text>
                </View>
                <View>
                    <Text style={styles.detailtwo}>$ 11.99</Text>
                    <Text style={styles.detailtwo}>$ 1.99</Text>
                </View>
            </View>
            <Image style={{tintColor:'black',top:30,left:20}} source={require('../assets/images/line.png')}></Image>

            <View style={{flexDirection:'row',paddingHorizontal:30,justifyContent:'space-between',top:30}}>
                <Text style={styles.detailone}>Total</Text>
                <Text style={styles.detailtwo}>$ 13.98</Text>
            </View>
            <Text style={{paddingVertical:60,paddingHorizontal:30,fontSize:18,color:'black',fontWeight:'500'}}>Select payment method</Text>

            <View style={{paddingHorizontal:25,top:-50}}>
                <TouchableOpacity style={{width:344,height:90,backgroundColor: 'rgba(67, 136, 131, 0.1)',borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                    <Image style={{left:20}} source={require('../assets/images/creditcard.png')}></Image>
                    <View>
                    <Text style={{left:35,fontSize:16,color:'#438883',fontWeight:'500'}}>Debit Card</Text>
                    
                    
                    </View>
                    <Image style={{left:171}} source={require('../assets/images/dotcircle.png')}></Image>
                    


                </TouchableOpacity>
            </View>

            <View style={{paddingHorizontal:25,top:-35}}>
                <TouchableOpacity style={{width:344,height:90,backgroundColor: '#FAFAFA',borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                    <Image style={{left:30}} source={require('../assets/images/paypal.png')}></Image>
                    <View>
                    <Text style={{left:60,fontSize:16,color:'#438883',fontWeight:'500'}}>Debit Card</Text>
                    
                    
                    </View>
                    <Image style={{left:195}} source={require('../assets/images/paypalcircle.png')}></Image>
                    


                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{width:350,height:60,borderStyle:'solid',borderColor:'#549994',borderWidth:1,borderRadius:40,left:20,alignItems:'center',justifyContent:'center',top:-20,backgroundColor:'#69AEA9'}}>
                <Text style={{fontSize:18,color:'white'}}>Pay Now</Text>

            </TouchableOpacity>
            </View>
            
   </SafeAreaView>
  )
}

export default Billdetail

const styles = StyleSheet.create({

    detailone:
    {
        fontSize:16,
        top:12,
        fontWeight:'500'
    },
    detailtwo:
    {
        fontSize:16,
        top:12,
        color:'black',
        textAlign:'right',
        fontWeight:'500'
    }
})