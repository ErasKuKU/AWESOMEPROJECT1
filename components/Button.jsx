import { TouchableOpacity,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = ({title,handlePress}) => {
  return (
    <TouchableOpacity 
    onPress= {handlePress}
    activeOpacity={0.7}
    style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: 9,
        height: 40,
        resizeMode: 'contain',
        marginTop: 25
        
    },
    text:{
        fontSize: 20,
        fontWeight: '700'
    }
})