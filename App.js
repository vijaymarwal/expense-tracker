import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './src/Screens/tab';
import walletupcomingbills from './src/Screens/walletupcomingbills';
import AsyncStorage from '@react-native-async-storage/async-storage'
import WalletScreen from './src/Screens/WalletScreen';


function App () {
    
    return(

        

        <NavigationContainer>
            <Tabs/>
            
            



        </NavigationContainer>
    );
}

export default App;