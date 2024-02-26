import { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native'
import ModalDeletePet from '../components/ModalDeletePet'
import AddPet from '../components/AddPet'
import ListPets from '../components/ListPets'
import uuid from 'react-native-uuid'
import colors from '../utils/golbals/colors'


const PetRegistration = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [petSelected, setPetSelected] = useState({})  
  const [petName, setPetName] = useState('')
  const [description, setDescription] = useState('')
  const [pets, setPets] = useState([])
  const screenWidth = Dimensions.get('window').width
  const {width, height} = useWindowDimensions

  const addPet = ()=>{

    const newPet={
        id: uuid.v4(),
        name: petName,
        description: description
    }
    setPets([...pets, newPet])

    setPetName('')
    setDescription('')
  }

  const onHandlerName = (p)=>{

    setPetName(p)
  }

  const onHandlerDescription = (p)=>{
    setDescription(p)
  }

  const onHandlerModalDelete = (pet)=>{
    setPetSelected(pet)
    setModalVisible(!modalVisible)
  }

  const deletePet = ()=>{
    setPets(pets.filter(pet=> pet.id != petSelected.id))
    setModalVisible(!modalVisible)
  }


  return (
    <View style={styles.container}>
        <AddPet
            petName={petName} 
            onHandlerName={onHandlerName} 
            description={description} 
            onHandlerDescription={onHandlerDescription} 
            addPet={addPet}
            screenWidth={screenWidth}
        />
        <ListPets
            pets={pets}
            onHandlerModalDelete={onHandlerModalDelete}
        />
        <ModalDeletePet
            modalVisible={modalVisible}
            petSelected={petSelected}
            deletePet={deletePet}
            onHandlerModalDelete={onHandlerModalDelete}
        />
    </View>
  )
}

export default PetRegistration

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30,
        backgroundColor:colors.bgcolor
    }
})