import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image,ImageBackground,StatusBar ,FlatList} from 'react-native'
import React from 'react'

const walletupcomingbills = () => {
  return (
    <SafeAreaView>

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
<Text style={{color:'white',fontSize:18}}>Wallet</Text>
<Image style={{right:20,top:-5}} source={require('../assets/images/belll.png')}></Image>
</View>

<View style={{height:731,width:395,backgroundColor:'white',borderRadius:40,top:-80}}>

  <View style={{alignItems:'center',justifyContent:'center',top:50}}>
    <Text style={{fontSize:16,color:'black'}}>Total Balance</Text>
    <Text style={{fontSize:30,color:'black',fontWeight:'bold'}}>$ 2,548.00</Text>
  </View>

  <View style={{width:240,height:85,left:87,top:80,flexDirection:'row',justifyContent:'space-between'}}>
    <TouchableOpacity>
      <Image source={require('../assets/images/addplus.png')}></Image>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/images/payplus.png')}></Image>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/images/sendplus.png')}></Image>
    </TouchableOpacity>
  </View>

  <View style={{height:48,width:354,backgroundColor:'#F4F7F6',left:20,top:120,borderRadius:40,justifyContent:'center',flexDirection:'row'}}>

    <TouchableOpacity style={{width:170,height:40,borderRadius:40,justifyContent:'center',alignItems:'center',top:4}}>
      <Text style={{color:'black'}}>Transactions</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{width:170,height:40,borderRadius:40,backgroundColor:'white',left:5,justifyContent:'center',alignItems:'center',top:4}}>
      <Text style={{color:'black'}}>Upcoming Bills</Text>
    </TouchableOpacity>
    

  </View>
  
</View>

</ImageBackground>

</View>

               
<View style={{top:200}}><FlatList

data={[
  
  {id:1,key:'Upwork',vijay:require('../assets/images/upworklogo.png'),time:'Today',transactiondetailplus:'+$ 850.00'},
  {id:2,key:'Transfer',vijay:require('../assets/images/userone.png'),time:'Yesterday',transactiondetailminus:'-$ 85.00'},
  {id:3,key:'Paypal',vijay:require('../assets/images/paypallogo.png'),time:'Jan30,2022',transactiondetailplus:'+$ 1,406.00'},
  {id:4,key:'Youtube',vijay:require('../assets/images/youtubelogo.png'),time:'Jan16,2022',transactiondetailminus:'-$ 11.99'},
 

]}

renderItem={({item})=>

<View style={s.flatlist}>

<View style={{flexDirection:'row'}}>

<Image style={{height:50,width:50,borderRadius:8,backgroundColor:'lightgrey',marginTop:10}} source={item.vijay} />

<View >
<Text style={{color:'black',fontSize:16,marginLeft:10,marginTop:10,fontWeight:'600'}}>{getValue}</Text>
<Text style={s.transactiontime}>{item.time}</Text>
</View>

<View style={{flex:1}}></View>
<TouchableOpacity style={{top:10}}>
    <Image source={require('../assets/images/paytouch.png')}></Image>
</TouchableOpacity>

</View>



</View>




}

ItemSeparatorComponent={''}


></FlatList></View>


    </SafeAreaView>
  )
}

export default walletupcomingbills

const s = StyleSheet.create({

  
flatlist:
{
    flex:1,
    marginLeft:20,
    marginRight:20,
    
    
},
transactiontime:
{
    marginLeft:10,
    fontSize:12,
    top:5
},

tdetailplus:
{
    color:'#25A969',
    fontWeight:'700',
    marginTop:20,
    fontSize:18,
    fontFamily:'sans-serif'
   
},
tdetailminus:
{
    color:'#F95B51',
    fontWeight:'700',
    marginTop:20,
    fontSize:18,
    fontFamily:'sans-serif'
}
})