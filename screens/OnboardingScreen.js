import { Text, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Home from '../screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';


export default function OnboardingScreen(){
const navigation = useNavigation();
const handleDone = () => {
  navigation.navigate('Home');
}

  return(
    <View style={styles.container}>

      <Onboarding
        
    onDone={handleDone}
    onSkip={handleDone}        
    containerStyles={{paddingHorizontal: 15}}
      pages={[
        {
          backgroundColor: '#FFFFF0',
          image: (
           <View style={styles.onboardingstyle}> 
            <Image source={require('../assets/students.png')} style={styles.onImage} />
           </View>      
                 ),
          title: 'Objective',
          subtitle: 'I am learning React Native',
        },
        {
          backgroundColor: '#ADD8E6',
          image: (
           <View style={styles.onboardingstyle}> 
            <Image source={require('../assets/work.png')} style={styles.onImage} />
           </View>     
                ),
          title: 'Code Seamlessly',
          subtitle: 'I hope i get it this time',
        },
        {
          backgroundColor: '#f08080',
          image: (
           <View style={styles.onboardingstyle}> 
            <Image source={require('../assets/money.png')} style={styles.onImage} />
           </View>
          ),
          title: 'Achieve a Higher Goal',
          subtitle: 'I want to earn money at the end of it all',
        },
        ]}
    />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  onboardingstyle:{
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -230,
    height: 270,
    width: 350,
  },
  onImage:{
    height: 250,
    width: 315,
    marginLeft: 40,
    marginRight: 40
  },
})