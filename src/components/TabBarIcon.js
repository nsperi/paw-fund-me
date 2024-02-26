import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import colors from '../utils/golbals/colors'

const TabBarIcon = ({title,nameIcon,focused}) => {
  return (
    <View style={styles.container}>
      <Entypo name={nameIcon} size={25} color={focused ? colors.secondarycolor:colors.bgcolor}/>  
      <Text style={[styles.text,!focused && styles.textFocused]} >{title}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({

    container:{
        alignItems: 'center'
    },
    text:{
        color:colors.textcolor,
        textAlign:"center",
        fontSize:15
    },
    textFocused:{
        color: colors.textcolor
    }

})