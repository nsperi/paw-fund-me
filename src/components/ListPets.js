import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CartPetList from './CartPetList'
import pets from '../utils/data/pets.json'
import PetDetail from '../screens/PetDetail'

const ListPets = ({navigation}) => {
  return (
    <View style={styles.petsContainer}>
        <FlatList
          data={pets}
          keyExtractor={item=>item}
          renderItem={({item})=><PetDetail item={item} navigation={navigation}/>}
        />
    </View>
  )
}

export default ListPets

const styles = StyleSheet.create({
    petsContainer:{
        padding:10
      }
      
})