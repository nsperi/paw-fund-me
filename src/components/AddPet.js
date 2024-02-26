import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const AddPet = ({petName, 
                onHandlerName, 
                description, 
                onHandlerDescription, 
                addPet}) => {
  return (
    <View style={styles.container}>
        <TextInput 
        value={petName} 
        onChangeText={onHandlerName} 
        placeholder='Ingresar nombre de la mascota' 
        placeholderTextColor='white'
        maxLength={25}
        style={styles.input}/>
        <TextInput 
        value={description} 
        onChangeText={onHandlerDescription} 
        placeholder='Ingresar descripcion' 
        placeholderTextColor='white'
        multiline
        numberOfLines={4}
        maxLength={100}
        style={styles.input}/>
        <ButtonPrimary title='Agregar mascota' onPress={addPet}/>
    </View>
  )
}

export default AddPet

const styles = StyleSheet.create({
    input:{
        width:'100%',
        borderWidth:2,
        borderColor:'white', 
        marginVertical:5, 
        paddingVertical:5, 
        paddingHorizontal:10,
        color:'#FBA0FE',
        fontSize:16,
        borderRadius:5,
        textAlignVertical:'top'
      },
      container:{
       
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#715BFF',
        padding:10
      }
})