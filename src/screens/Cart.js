import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartPetList from '../components/CartPetList'
import cart from '../utils/data/cart.json'
import colors from '../utils/golbals/colors'

const Cart = () => {
  return (
    <View style={styles.container}>
        <FlatList
            data={cart.items}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=><CartPetList item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable>
                <Text style={styles.confirmText}>Confirmar</Text>
            </Pressable>
            <Text style={styles.confirmText}>Total: ${cart.total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        marginBottom:130
    },
    confirmContainer:{
        flexDirection:'row',
        backgroundColor: colors.bgcolor,
        padding:25,
        justifyContent:'center'
    },
    confirmText:{
        fontFamily:'Amatic',
        fontSize:18,
        color:colors.textcolor
    }
})