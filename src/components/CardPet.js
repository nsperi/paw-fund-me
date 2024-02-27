import { StyleSheet, Text, View, Pressable } from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/golbals/colors'

const CardPet = (item,navigation) => {
  return (
    <Pressable onPress={()=>navigation.navigate('PetByCategory',{petSelected:item})}>
        <ShadowPrimary style={styles.container}>
            <Text style={styles.text}>{item}</Text>
        </ShadowPrimary>
    </Pressable>
  )
}

export default CardPet

const styles = StyleSheet.create({
    container:{
        width:'80%',
        backgroundColor:colors.secondarycolor,
        marginHorizontal:'10%',
        marginVertical:20,
        padding:20,
        alignItems:'center',
        borderRadius:5
    },
    text:{
        fontSize:16
    }
})