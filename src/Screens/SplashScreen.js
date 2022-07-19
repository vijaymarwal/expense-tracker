import { View, Text ,Image,StyleSheet,SafeAreaView,StatusBar} from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    

        

<View  style={style.container}>
      <Image style={{}} source={require('../assets/images/splash.png')}></Image>
    </View>
    
    
  )
};
const style=StyleSheet.create({
    
        container:
        {
            flex:1,
            justifyContent:'center',
            alignItems:'center'

        }

    
})