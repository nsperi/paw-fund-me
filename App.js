import{View, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {useFonts} from 'expo-font' 
import colors from './src/utils/golbals/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home'
import PetDetail from './src/screens/PetDetail'
import PetRegistration from './src/screens/PetRegistration'


const Stack = createNativeStackNavigator()

const App = () => {

  const [fontsLoaded] = useFonts({
    "Amatic":require("./assets/fonts/AmaticSC-Bold.ttf")
  })



  if(!fontsLoaded) return null
  

  return(
      <>
        <StatusBar backgroundColor={colors.bgcolor} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='PetDetail' component={PetDetail}/>
            <Stack.Screen name='PetRegistration' component={PetRegistration}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})