import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Header } from '../components/Header'
import pets from '../utils/data/pets.json'


const PetsByCategory = ({navigation, route}) => {

  const [petsFiltered, setPetsFiltered] = useState([])

  useEffect(()=>{
    setPetsFiltered(pets.filter(pet=>pet.category===categorySelected))
      },[categorySelected])
  return (
    <>
      <Header title={categorySelected || 'Pets'}/>
      <FlatList
        style={styles.container}
        data={petsFiltered}
        keyExtractor={item => item.id}
        renderItem={({item})=><PetByCategory item={item}/>}
      />
    </>
  )
}

export default PetsByCategory

const styles = StyleSheet.create({})