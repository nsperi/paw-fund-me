import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import colors from '../utils/golbals/colors'



const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Text style={styles.paragraph}>Bienvenido a Paw Fund Me, tu plataforma solidaria para ayudar a las mascotas necesitadas. Descubre conmovedoras historias de animales que requieren tu apoyo y únete a nuestra comunidad comprometida. Explora las adorables caras que esperan tu ayuda y elige participar donando la cantidad que desees. ¡Cada contribución nos acerca un paso más a alcanzar nuestros objetivos y brindarles una vida mejor a estos fieles compañeros! Juntos, podemos hacer la diferencia.</Text>
      <Categories navigation={navigation}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    width:'100%',
    backgroundColor:colors.bgcolor
  },
  paragraph:{
    fontSize:30,
    fontFamily:'Amatic',
    color:colors.textcolor,
    marginHorizontal:50,
    marginVertical:30,
    textAlign:'center'
  }
})