import { StyleSheet, Text, View } from 'react-native'
import colors from '../utils/golbals/colors'


const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondarycolor,
        height:80,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:colors.textcolor,
        fontSize:50,
        fontFamily:'Amatic'
    }
})