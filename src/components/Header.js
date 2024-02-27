import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../utils/golbals/colors'
import {AntDesign} from '@expo/vector-icons'


const Header = ({title="Paw Fund Me", navigation}) => {
  return (
    <View style={styles.container}>
      {navigation.canGoBack() &&
        <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
          <AntDesign name='arrowleft' size={25} color='black'/>
        </Pressable>
      }
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
    },
    goBack:{
        position:"absolute",
        left:10,
        bottom:15

    }
})