import { StatusBar } from 'expo-status-bar'
import {useFonts} from 'expo-font' 
import colors from './src/utils/golbals/colors'
import MainNavigator from './src/navigation/MainNavigatior'

const App = () => {

  const [fontsLoaded] = useFonts({
    "Amatic":require("./assets/fonts/AmaticSC-Bold.ttf")
  })



  if(!fontsLoaded) return null
  

  return(
      <>
        <StatusBar backgroundColor={colors.bgcolor} />
        <MainNavigator/>
      </> 
    
  )
}

export default App
