import {  Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';

const Home = () => {
  const{top} = useSafeAreaInsets
  const paddingTop = top>0? top+10:30;
  return (
    <SafeAreaView>
       <View style={[styles.container,{paddingTop}]}>
        <View style={styles.header}>
          <Pressable>
            <Text style={styles.header}>
               Aoran
            </Text>
          </Pressable>
          <Pressable>
          <AntDesign name="menufold" size={24} color="black" />
          </Pressable>

        </View>

       </View>
    </SafeAreaView>
     
  
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    gap:15
  }
  
})