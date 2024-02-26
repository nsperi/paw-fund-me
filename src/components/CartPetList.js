import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const CartPetList = ({item, onHandlerModalDelete, screenWidth}) => {
  return (
    <View style={[styles.petCard, {width:screenWidth-40}]}>
        <Text style={styles.text}>Nombre: {item.name}</Text>
        <Text style={styles.text}>Descripcion: {item.description}</Text>
        <ButtonPrimary title='DEL' onPress={()=>onHandlerModalDelete(item)}/>
    </View>
  )
}

export default CartPetList

const styles = StyleSheet.create({
    petCard:{
        backgroundColor:'#715BFF',
        padding:20,
        marginHorizontal:10,
        alignItems:'center',
        borderRadius:5,
        marginVertical:10,
        alignItems:'flex-start',
        gap:25,
        fontSize:18,
        width:'100%'
      },
      text:{
        width:'100%',
        fontSize:16,
        color:'#FBA0FE'
      }
})