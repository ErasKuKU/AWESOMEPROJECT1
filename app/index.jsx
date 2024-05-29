import { StyleSheet, Text, View , Image,  ScrollView,  } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native'
import {images} from '../constants'
import  Button  from '../components/Button'




const index = () => {
  return (
    <SafeAreaView style={styles.view}>
        <ScrollView>
        <View style={styles.view1}>
        <Image  source={images.logo} style={styles.logo}>  
        </Image>

        <Image source={images.cards} style={styles.cards}>

        </Image>
        <View style={styles.view2}>
            <Text style={styles.text2}>
                Discover Amazing 
            </Text>
            <Text style={styles.text2}>
            Wallpapers with Aora
            </Text>

            <Text style={styles.text3}>
                Where creativity meets innovation: explore with us!
            </Text>

            <Button 
            title  = 'Explore'
            handlePress={()=>router.push('/Home')}
            />

           
        </View>
        </View>
      
        </ScrollView>
    </SafeAreaView>
   
  )
}

export default index

const styles = StyleSheet.create({
   view : {
    backgroundColor : '#161622',
    flex:1 ,
    
   },
   logo:{
    resizeMode:'contain',
    width: 130,
    height: 84,
    alignItems: 'center',
    justifyContent:'center'
   },
   view1:{
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 50
    
   },
   cards:{
    resizeMode: 'contain',
    width: 380,
    height: 300
   },
   view2:{
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 5,
    

   },
   text2:{
    fontSize: 25,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
   },
   text3:{
    color: 'white',
    marginTop: 15
   }

})