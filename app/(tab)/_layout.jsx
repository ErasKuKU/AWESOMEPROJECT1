import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants'




const TabIcon = ({icon,color,name,focused}) =>{
    return (
        <View style={styles.container}>
            <Image
                source={icon}  style={styles.image}
                tintColor={color}
            />
            <Text style={styles.name}>
               {name}
            </Text>
        </View>
    )
}



const Tablayout = () => {
  return (
    <>
    <Tabs
           screenOptions={{
           
            tabBarShowLabel:false,
            tabBarStyle: {
                backgroundColor: '#000000',
                borderTopWidth:1,
                borderTopColor: '#232533'
            }
        }
        }>
     

        <Tabs.Screen
         name='Home'
         options={{
            title : 'Home',
            headerShown: false,
            tabBarIcon : ({color, focused})=>(
            <TabIcon 
                icon={icons.home}
                color={color}
                name='Home'
                focused={focused}
            />
            )
         }} />
         <Tabs.Screen
         name='Bookmark'
         options={{
            title : 'Bookmark',
            headerShown: false,
            tabBarIcon : ({color, focused})=>(
            <TabIcon 
                icon={icons.bookmark}
                color={color}
                name='Bookmark'
                focused={focused}
            />
            )
         }} />
         <Tabs.Screen
         name='Create'
         options={{
            title : 'Create',
            headerShown: false,
            tabBarIcon : ({color, focused})=>(
            <TabIcon 
                icon={icons.plus}
                color={color}
                name='Create'
                focused={focused}
            />
            )
         }} />
         <Tabs.Screen
         name='Profile'
         options={{
            title : 'Profile',
            headerShown: false,
            tabBarIcon : ({color, focused})=>(
            <TabIcon 
                icon={icons.profile}
                color={color}
                name='Profile'
                focused={focused}
            />
            )
         }} />
    </Tabs>
    </>
  )
}

export default Tablayout

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        gap: 4,
        alignItems: 'center'
    },
    image : {
        resizeMode: 'contain',
        width: 23,
        height: 22,
        justifyContent: 'center'

        
    },
    name:{
        fontSize: 10,
        justifyContent: 'center',
        color: 'white'
    }
   
})