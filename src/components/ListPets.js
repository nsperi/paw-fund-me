import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CartPetList from './CartPetList'

const ListPets = ({pets,
                    onHandlerModalDelete,
                    screenWidth}) => {
  return (
    <View style={styles.petsContainer}>
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          data={pets}
          keyExtractor={item => item.id}
          renderItem={({item})=>(
                            <CartPetList item={item}
                                            onHandlerModalDelete={onHandlerModalDelete}
                                            screenWidth={screenWidth}
                            />
          )}
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