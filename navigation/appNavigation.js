import React,{useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import Onboarding from '../screens/OnboardingScreen';


const Stack = createNativeStackNavigator();


export default function AppNavigation(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName = 'Onboarding'>
      <Stack.Screen name="Onboarding"  options={{headerShown: false}} component={Onboarding} />
      <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}