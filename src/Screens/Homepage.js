import { View, Text,SafeAreaView,StatusBar, ImageBackground,Image,StyleSheet,FlatList } from 'react-native'
import React from 'react'

const Homepage = ({}) => {
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
            
            <View style={{flexDirection:'row',paddingHorizontal:24,justifyContent:'space-between',bottom:120}}>
                <View>
                    <Text style={{color:'white',fontSize:14}}>Good afternoon,</Text>
                    <Text style={{color:'white',fontSize:20}}>Enjelin Morgeana</Text>
                </View>
                <Image style={{right:24}} source={require('../assets/images/belll.png')}></Image>

            </View>
            <View style={s.card}>

                <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,top:25}}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                        <Text style={{color:'white',fontSize:16}}>Total Balance</Text>
                        <Text style={{color:'white',fontSize:30}}>$ 2,548.00</Text>
                        </View>
                        
                        <Image style={{top:6.3,left:6.5}} source={require('../assets/images/Icon.png')}></Image>

                    </View>
                    <Image style={{top:10}} source={require('../assets/images/dotts.png')}></Image>
                </View>
                <View style={{flexDirection:'row',top:67,paddingHorizontal:21,justifyContent:'space-between'}}>

                    <View style={{flexDirection:'row'}}>
                        <Image style={{top:2.81}} source={require('../assets/images/downone.png')}></Image>
                        <Text style={{color:'white',fontSize:16,left:6}}>Income</Text>
                        
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Image style={{top:2.81}} source={require('../assets/images/upone.png')}></Image>
                        <Text style={{color:'white',fontSize:16,left:6}}>Expenses</Text>
                    </View>

                </View>

                <View style={{flexDirection:'row',paddingHorizontal:21,justifyContent:'space-between',top:67}}>
                    <Text style={{color:'white',fontSize:20}}>$ 1,840.00</Text>
                    <Text style={{color:'white',fontSize:20}}>$ 284.00</Text>

                </View>

            </View>
        </ImageBackground>
        
        </View>

        <View style={s.transaction}>
                <Text style={s.tratxt}>Transaction History</Text>
                <Text style={s.see}>See all</Text>
                </View>

                
<View style={{top:80}}><FlatList

data={[
  
  {id:1,key:'Upwork',vijay:'https://www.apkmod.co/wp-content/uploads/2020/03/Upwork-for-Freelancers.png',time:'Today',transactiondetailplus:'+$ 850.00'},
  {id:2,key:'Transfer',vijay:'https://d1qp59yxlq7zhd.cloudfront.net/media/01-10-2019-latest-haircut-for-girls_medium_waves_with_bangs_1.PNG',time:'Yesterday',transactiondetailminus:'-$ 85.00'},
  {id:3,key:'Paypal',vijay:'https://1000logos.net/wp-content/uploads/2017/05/emblem-Paypal.jpg',time:'Jan30,2022',transactiondetailplus:'+$ 1,406.00'},
  {id:4,key:'Youtube',vijay:'https://thumbs.dreamstime.com/b/web-189206689.jpg',time:'Jan16,2022',transactiondetailminus:'-$ 11.99'},
 

]}

renderItem={({item})=>

<View style={s.flatlist}>

<View style={{flexDirection:'row'}}>

<Image style={{height:45,width:45,borderRadius:30,backgroundColor:'lightgrey',marginTop:5}} source={{uri:item.vijay}}></Image>

<View >
<Text style={{color:'black',fontSize:16,marginLeft:10,marginTop:10,fontWeight:'600'}}>{item.key}</Text>
<Text style={s.transactiontime}>{item.time}</Text>
</View>

<View style={{flex:1}}></View>
<Text style={s.tdetailplus}>{item.transactiondetailplus}</Text>
<Text style={s.tdetailminus}>{item.transactiondetailminus}</Text>

</View>



</View>




}


ItemSeparatorComponent={''}


></FlatList></View>

<View style={s.sendsee}>
                <Text style={s.sendagain}>Send Again</Text>
                <Text style={s.seeall}>See all</Text>
                </View>

                <View style={s.profiles}>
                    <Image style={s.profilegallery} source={require('../assets/images/userone.png')}></Image>
                    <Image style={s.profilegallery} source={require('../assets/images/usertwo.png')}></Image>
                    <Image style={s.profilegallery} source={require('../assets/images/userthree.png')}></Image>
                    <Image style={s.profilegallery} source={require('../assets/images/userfour.png')}></Image>
                    <Image style={s.profilegallery} source={require('../assets/images/userfive.png')}></Image>

                </View>


        
    </SafeAreaView>
    
  )
};
const s = StyleSheet.create({

    card:
    {
        width:354,
        height:201,
        backgroundColor:'#2F7E79',
        left:20,
        bottom:100,
        borderRadius:20

    },
    
transaction:
{
    marginRight:20,
    marginLeft:20,
    top:70,
    flexDirection:'row',
    
    
},
tratxt:
{
    fontSize:18,
    color:'black',
    fontWeight:'500'
},
see:
{
    fontSize:15,
    marginLeft:149
},
flatlist:
{
    flex:1,
    marginLeft:20,
    marginRight:20,
    
    
},
transactiontime:
{
    marginLeft:10,
    fontSize:12
},
tdetailplus:
{
    color:'#42b17c',
    fontWeight:'700',
    marginTop:20,
    fontSize:22,
    fontFamily:'sans-serif'
   
},
tdetailminus:
{
    color:'#f85b55',
    fontWeight:'700',
    marginTop:20,
    fontSize:22,
    fontFamily:'sans-serif'
   
    
    
},
sendagain:
{
    fontSize:18,
    color:'black',
    fontWeight:'500'
},
seeall:
{
    fontSize:15,
    marginLeft:215
},
sendsee:
{
    marginRight:20,
    marginLeft:20,
    marginTop:100,
    flexDirection:'row',
    
    
},
profiles:
{
    flexDirection:'row',
    left:10,
    marginRight:20,
    top:20
},
profilegallery:
{
    height:62,
    width:62,
    left:5,
    borderRadius:31,
    margin:5
},
});
export default Homepage;