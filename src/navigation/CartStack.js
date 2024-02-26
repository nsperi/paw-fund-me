import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CartPetList from '../components/CartPetList'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={{
            header: ()=><Header title='Cart'/>
        }}
    >
        <Stack.Screen name='Cart' component={CartPetList}/>
    </Stack.Navigator>
  )
}

export default CartStack

const styles = StyleSheet.create({})