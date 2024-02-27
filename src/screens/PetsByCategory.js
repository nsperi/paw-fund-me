import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Header } from '../components/Header'
import pets from '../utils/data/pets.json'
import { useEffect, useState } from 'react'
import PetByCategory from '../components/PetByCategory'

const PetsByCategory = ({navigation, route}) => {

 const {petSelected} =route.params


  return (
    <>
      <Header title={'Pets'}/>
      <FlatList
        data={pets}
        keyExtractor={item => item.id}
        renderItem={({item})=><PetByCategory navigation={navigation} item={item}/>}
      />
    </>
  )
}

export default PetsByCategory

const styles = StyleSheet.create({})