import React from 'react';
import {Text,View,Button,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native';


const Statics= ({}) => {


    return(
        <View style={{flex:1,top:84}}>

            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <Image style={{right:30}} source={require('../assets/images/backarrow.png')}></Image>
                <Text style={{fontSize:18,color:'black'}}>Statistics</Text>
                <Image style={{left:30}} source={require('../assets/images/download.png')}></Image>
            </View>
            <View style={{flexDirection:'row',top:47,justifyContent:'space-around'}}>
                <TouchableOpacity style={{width:90,height:40,backgroundColor:'#438883',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white'}}>Day</Text>
                </TouchableOpacity>
                <Text style={s.text}>Weak</Text>
                <Text style={s.text}>Month</Text>
                <Text style={s.text}>Year</Text>
            </View>

            <View style={s.exdrawer}>

                <View style={{flexDirection:'row'}}>
                <Text>Expense</Text>
                <Image style={{left:10,top:3}} source={require('../assets/images/downarrow.png')}></Image>
                </View>

               

            </View>

            <View>
                <Image style={{top:100,left:14}} source={require('../assets/images/graphone.png')}></Image>
                <Image style={{bottom:46,left:11}} source={require('../assets/images/graphtwo.png')}></Image>
                <View style={{flexDirection:'row',justifyContent:'space-between',left:6,top:-40}}>
                    <Text>March</Text>
                    <Text>April</Text>
                    <Text>May</Text>
                    <Text>Jun</Text>
                    <Text>jul</Text>
                    <Text>Aug</Text>
                </View>
                <View style={{paddingHorizontal:20,justifyContent:'space-between',flexDirection:'row'}}>
                    <Text style={{fontSize:18,color:'black'}}>Top Spending</Text>
                    <Image source={require('../assets/images/updown.png')}></Image>
                </View>

                <View style={s.container}>
      <FlatList

      
        data={[
          {key: 'Starbucs',vijay:require('../assets/images/starbucs.png'),time:'Jan 12 , 2022',price:'- $ 150.00'},
          {key: 'Transfer',vijay:require('../assets/images/userone.png'),time:'Yesterday',price:'- $ 11.00'},
          {key: 'Youtube',vijay:require('../assets/images/youtubeimg.png'),time:'Jan 18 , 2022',price:'- $ 50.00'},
          
        ]}
        renderItem={({item}) => 
        <View style={{flexDirection:'row',paddingHorizontal:20,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',paddingVertical:10}}>
            <Image style={{width:30,height:30,borderRadius:15}} source={item.vijay}  />
            <View style={{left:16.5,top:-5}}>
            <Text>{item.key}</Text>
            <Text>{item.time}</Text>
            </View>
            </View>
            <Text style={{top:10,fontSize:18,color:'#F95B51'}}>{item.price}</Text>
            
        </View>}
      />
    </View>



            </View>
            
        </View>
    )
};
const s = StyleSheet.create({
    text:
    {
        top:10,
        color:'black',
        fontSize:13,
        opacity:0.7

    },
    exdrawer:
    {
        height:40,
        width:120,
        
        borderWidth:0.5,
        borderRadius:10,
        top:68.5,
        left:250,
        paddingHorizontal:24,
        justifyContent:'center',
        alignItems:'center'
    },
    container:
    {
        top:40,
        
    }
});

export default Statics;