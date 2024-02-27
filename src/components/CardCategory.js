import { Pressable, StyleSheet, Text, View } from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/golbals/colors'


const CardCategory = ({item, navigation}) => {
  const handlePress = () => {
    if (item === 'QUIERO DONAR') {
      navigation.navigate('PetDetail');
    } else if (item === 'NECESITO AYUDA') {
      navigation.navigate('PetRegistration');
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <ShadowPrimary style={styles.container}>
        <Text style={styles.text}>{item}</Text>
      </ShadowPrimary>
    </Pressable>
  )
}

export default CardCategory

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