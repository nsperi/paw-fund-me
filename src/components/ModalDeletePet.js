import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

const ModalDeletePet = ({petSelected, 
                        deletePet, 
                        onHandlerModalDelete, 
                        modalVisible}) => {

  return (
    
        <Modal
          visible={modalVisible}
          animationType='fade'
          onRequestClose={()=>onHandlerModalDelete({})}
        >
            <View>
                <Text>Esta seguro que quiere eliminar la mascota: {petSelected.name}?</Text>
                <Button title='SI' onPress={deletePet}/>
                <Button title='NO' onPress={()=>onHandlerModalDelete({})}/>
            </View>
        </Modal>
  )
}

export default ModalDeletePet

const styles = StyleSheet.create({})