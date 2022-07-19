import { StyleSheet, Text, View ,SafeAreaView,StatusBar,Image,ImageBackground,TouchableOpacity,FlatList} from 'react-native'
import React from 'react'

const Paymentsuccessfull = () => {
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
            <Text style={{ color: 'white', fontSize: 18 }}>Bill Payment</Text>
            <Image style={{ right: 20, top:10 }} source={require('../assets/images/dotts.png')}></Image>
        </View>

        <View style={{ height: 731, width: 395, backgroundColor: 'white', borderRadius: 40, top: -80 }}>

            <View style={{justifyContent:'center',alignItems:'center',top:25}}>
                <Image style={{height:50,width:50,borderRadius:25}} source={require('../assets/images/checkcircletwo.png')}></Image>
                <Text style={{fontSize:22,color:'#438883',fontWeight:'600',top:24}}>Payment Successfully</Text>
                <Text style={{fontSize:16,fontWeight:'600',top:25}}>Youtube Premium</Text>
            </View>

            <View style={{paddingHorizontal:20,justifyContent:'space-between',alignItems:'center',top:60,flexDirection:'row'}}>
                <Text style={{fontSize:18,color:'black',fontWeight:'500'}}>Transaction details</Text>
                <Image source={require('../assets/images/downarrow.png')}></Image>
            </View>
            </View>
            </ImageBackground>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,top:70}}>
                <View>
                    <Text style={styles.detailone}>Payment Method</Text>
                    <Text style={styles.detailone}>Status</Text>
                    <Text style={styles.detailone}>Time</Text>
                    <Text style={styles.detailone}>Date</Text>
                    <Text style={styles.detailone}>Transaction ID</Text>
                    
                </View>
                <View>
                    <Text style={styles.detailtwo}>Debit Card</Text>
                    <Text style={{fontSize:16,color:'#438883',top:12,textAlign:'right'}}>Completed</Text>
                    <Text style={styles.detailtwo}>08:15 AM</Text>
                    <Text style={styles.detailtwo}>Feb 18, 2022</Text>
                    <Text style={styles.detailtwo}>2092913832472..</Text>
                    
                </View>
            </View>
            <Image style={{tintColor:'black',top:100,left:20}} source={require('../assets/images/line.png')}></Image>

            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,top:80}}>
                <View>
                    <Text style={styles.detailone}></Text>
                    <Text style={styles.detailone}>Price</Text>
                    <Text style={styles.detailone}>Fee</Text>
                    
                    
                </View>
                <View>
                    <Text style={{fontSize:16,color:'#438883',top:12,textAlign:'right'}}></Text>
                    <Text style={styles.detailtwo}>$ 85.00</Text>
                    <Text style={styles.detailtwo}>- $ 0.99</Text>
                    
                    
                </View>
            </View>
            <Image style={{tintColor:'black',top:110,left:20}} source={require('../assets/images/line.png')}></Image>

            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,top:110}}>
                <Text style={styles.detailone}>Total</Text>
                <Text style={styles.detailtwo}>$ 84.00</Text>
            </View>

            <TouchableOpacity style={{width:350,height:60,borderStyle:'solid',borderColor:'#549994',borderWidth:1,borderRadius:40,left:20,top:180,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'#549994'}}>Share Reciept</Text>

            </TouchableOpacity>
   </SafeAreaView>
  )
}

export default Paymentsuccessfull

const styles = StyleSheet.create({

    detailone:
    {
        fontSize:16,
        top:12
    },
    detailtwo:
    {
        fontSize:16,
        top:12,
        textAlign:'right',
        color:'black'

    }

})