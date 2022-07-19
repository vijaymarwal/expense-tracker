import React from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './Homepage';
import Statics from './Statics';
import ProfileScreen from './ProfileScreen';
import WalletScreen from './WalletScreen';
import Addexpence from './Addexpence';





const Tab = createBottomTabNavigator();

const CustomTabBarButton=({children,onPress})=>(
<TouchableOpacity 
style={{top:-30,
justifyContent:'center',
alignItems:'center'}}
onPress={onPress}
>
    
<View style={{

    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'#398481'
}}>
    {children}
</View>

</TouchableOpacity>

);

const Tabs=()=>{

    return(
<Tab.Navigator 

screenOptions={{
    tabBarShowLabel:false,
    headerShown:false,
   
    
}}> 

    <Tab.Screen name="Home" component={Homepage}
    
    options={{tabBarIcon:({focused})=>(
        <View>
           <Image source={require('../assets/images/vectorhome.png')}
           resizeMode="contain" style={{width:25,height:25,tintColor:focused?'#398481':'lightgrey' }}></Image>
           
        </View>
    )
    }}
    />
    <Tab.Screen name="Statics" component={Statics}
     options={{tabBarIcon:({focused})=>(
        <View>
           <Image source={require('../assets/images/vectorstati.png')}
           resizeMode="contain" style={{width:25,height:25,tintColor:focused?'#398481':'lightgrey' }}></Image>
           
        </View>
    )
    }}/>

<Tab.Screen name="post" component={Addexpence}
   options={{
    tabBarIcon:({focused})=>(
    <Image  source={require('../assets/images/plusone.png')}
    resizeMode="contain"
    style={{width:30,
        height:30,
        tintColor:'white'
}}
    />
    ),
tabBarButton: (props) =>(
    <CustomTabBarButton {...props}/>
)
   }}
   />
    <Tab.Screen name="Wallet" component={WalletScreen}
     options={{tabBarIcon:({focused})=>(
        <View>
           <Image source={require('../assets/images/vectorwallet.png')}
           resizeMode="contain" style={{width:25,height:25,tintColor:focused?'#398481':'lightgrey' }}></Image>
           
        </View>
    )
    }}/>
    
    
    <Tab.Screen name="profile" component={ProfileScreen}
     options={{tabBarIcon:({focused})=>(
        <View>
           <Image source={require('../assets/images/vectorprofile.png')}
           resizeMode="contain" style={{width:25,height:25,tintColor:focused?'#398481':'lightgrey' }}></Image>
           
        </View>
    )
    }}/>
</Tab.Navigator>

    );
}
export default Tabs;